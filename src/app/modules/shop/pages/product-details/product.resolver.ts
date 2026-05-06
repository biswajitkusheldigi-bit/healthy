import { inject, PLATFORM_ID } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { MetasService } from '../../../../services/metas.service';
import { environment } from '../../../../../environments/environment';
import { isPlatformServer } from '@angular/common';
import { catchError, map, of, tap } from 'rxjs';
import { BreadcrumbData } from '../../../../components/breadcrumb/breadcrumb.component';

export const productResolver: ResolveFn<any> = (route, state) => {
  const productService = inject(ProductService);
  const metasService = inject(MetasService);
  const platformId = inject(PLATFORM_ID);
  
  const slug = route.paramMap.get('product-slug');
  if (!slug) return of(null);

  return productService.getProductsDetailsPage(slug).pipe(
    tap((res: any) => {
      const data = res?.data;
      if (data) {
        let cMetaTitle = data.name;
        if (data.brandId && data.brandId.name) {
          cMetaTitle = data.brandId.name + "'s " + cMetaTitle;
        }
        cMetaTitle = 'Buy ' + cMetaTitle + ' online at HealthyBazar';

        let _breadcrumb: BreadcrumbData[] = [];
        if (data.categories && data.categories.length) {
          const { name, slug } = data.categories[0];
          _breadcrumb.push({
            title: name,
            url: '/category/' + slug,
            urlForSchema: 'category/' + slug,
          });
        }
        let title = data.name;
        _breadcrumb.push({ title, url: '', urlForSchema: '' });

        let _title = data.metaTitle || cMetaTitle;
        let _description = data.metaDescription || (data.description && data.description.short ? data.description.short : '');
        if (_description && typeof _description === 'string') {
           _description = _description.replace(/<\/?[^>]+(>|$)/g, '');
        }

        metasService.setCanonical(environment.appHost + 'product/' + data.slug);
        
        const imageUrl = environment.imageUrl + (data.thumbnail ? data.thumbnail.savedName : (data.images && data.images.length ? data.images[0].savedName : ''));

        metasService.setMetaTags({
          title: _title,
          description: _description,
          image: imageUrl
        }, false);

        if (data.metaIndex == true) {
          metasService.setNoIndexTag();
        }

        if (isPlatformServer(platformId)) {
           metasService.setProductSchema(
             imageUrl,
             _description,
             data.price || { minPrice: 0 },
             data.brandId?.name || '',
             data.name,
             environment.appHost + 'product/' + data.slug
           );

           if (_breadcrumb.length > 0 && _breadcrumb[0].urlForSchema) {
              metasService.setBreadCrumb(
                _breadcrumb[0].title,
                environment.appHost + _breadcrumb[0].urlForSchema,
                title,
                environment.appHost + 'product/' + data.slug
              );
           }
        }
      }
    }),
    map((res: any) => res?.data),
    catchError(() => of(null))
  );
};
