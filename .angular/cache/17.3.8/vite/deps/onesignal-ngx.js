import {
  Component,
  Injectable,
  NgModule,
  ɵɵdefineInjectable
} from "./chunk-GSGCMU4L.js";
import "./chunk-PZN677VP.js";
import "./chunk-Z73UEKK3.js";
import {
  __awaiter
} from "./chunk-NOK57FAP.js";
import "./chunk-X6JV76XL.js";

// node_modules/onesignal-ngx/fesm2015/onesignal-ngx.js
function oneSignalLogin(externalId, jwtToken) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.login(externalId, jwtToken).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function oneSignalLogout() {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.logout().then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function oneSignalSetConsentGiven(consent) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.setConsentGiven(consent).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function oneSignalSetConsentRequired(requiresConsent) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.setConsentRequired(requiresConsent).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function slidedownPromptPush(options) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Slidedown.promptPush(options).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function slidedownPromptPushCategories(options) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Slidedown.promptPushCategories(options).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function slidedownPromptSms(options) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Slidedown.promptSms(options).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function slidedownPromptEmail(options) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Slidedown.promptEmail(options).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function slidedownPromptSmsAndEmail(options) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Slidedown.promptSmsAndEmail(options).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function slidedownAddEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.Slidedown.addEventListener(event, listener);
  });
}
function slidedownRemoveEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.Slidedown.removeEventListener(event, listener);
  });
}
function notificationsSetDefaultUrl(url) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Notifications.setDefaultUrl(url).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function notificationsSetDefaultTitle(title) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Notifications.setDefaultTitle(title).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function notificationsRequestPermission() {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Notifications.requestPermission().then((result) => resolve(result)).catch((error) => reject(error));
    });
  });
}
function notificationsAddEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.Notifications.addEventListener(event, listener);
  });
}
function notificationsRemoveEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.Notifications.removeEventListener(event, listener);
  });
}
function sessionSendOutcome(outcomeName, outcomeWeight) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Session.sendOutcome(outcomeName, outcomeWeight).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function sessionSendUniqueOutcome(outcomeName) {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.Session.sendUniqueOutcome(outcomeName).then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function userAddAlias(label, id) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.addAlias(label, id);
  });
}
function userAddAliases(aliases) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.addAliases(aliases);
  });
}
function userRemoveAlias(label) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.removeAlias(label);
  });
}
function userRemoveAliases(labels) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.removeAliases(labels);
  });
}
function userAddEmail(email) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.addEmail(email);
  });
}
function userRemoveEmail(email) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.removeEmail(email);
  });
}
function userAddSms(smsNumber) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.addSms(smsNumber);
  });
}
function userRemoveSms(smsNumber) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.removeSms(smsNumber);
  });
}
function userAddTag(key, value) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.addTag(key, value);
  });
}
function userAddTags(tags) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.addTags(tags);
  });
}
function userRemoveTag(key) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.removeTag(key);
  });
}
function userRemoveTags(keys) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.removeTags(keys);
  });
}
function userGetTags() {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    let retVal;
    yield (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      retVal = oneSignal.User.getTags();
    });
    return retVal;
  });
}
function userAddEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.addEventListener(event, listener);
  });
}
function userRemoveEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.removeEventListener(event, listener);
  });
}
function userSetLanguage(language) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.setLanguage(language);
  });
}
function userGetLanguage() {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    let retVal;
    yield (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      retVal = oneSignal.User.getLanguage();
    });
    return retVal;
  });
}
function userTrackEvent(name, properties) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.trackEvent(name, properties);
  });
}
function pushSubscriptionOptIn() {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.User.PushSubscription.optIn().then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function pushSubscriptionOptOut() {
  return new Promise((resolve, reject) => {
    var _a;
    if (isOneSignalScriptFailed) {
      reject(new Error("OneSignal script failed to load."));
      return;
    }
    (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
      oneSignal.User.PushSubscription.optOut().then(() => resolve()).catch((error) => reject(error));
    });
  });
}
function pushSubscriptionAddEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.PushSubscription.addEventListener(event, listener);
  });
}
function pushSubscriptionRemoveEventListener(event, listener) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.User.PushSubscription.removeEventListener(event, listener);
  });
}
function debugSetLogLevel(logLevel) {
  var _a;
  (_a = window.OneSignalDeferred) === null || _a === void 0 ? void 0 : _a.push((oneSignal) => {
    oneSignal.Debug.setLogLevel(logLevel);
  });
}
var PushSubscriptionNamespace = {
  get id() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.id;
  },
  get token() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.token;
  },
  get optedIn() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.PushSubscription) === null || _c === void 0 ? void 0 : _c.optedIn;
  },
  optIn: pushSubscriptionOptIn,
  optOut: pushSubscriptionOptOut,
  addEventListener: pushSubscriptionAddEventListener,
  removeEventListener: pushSubscriptionRemoveEventListener
};
var UserNamespace = {
  get onesignalId() {
    var _a, _b;
    return (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.onesignalId;
  },
  get externalId() {
    var _a, _b;
    return (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.User) === null || _b === void 0 ? void 0 : _b.externalId;
  },
  addAlias: userAddAlias,
  addAliases: userAddAliases,
  removeAlias: userRemoveAlias,
  removeAliases: userRemoveAliases,
  addEmail: userAddEmail,
  removeEmail: userRemoveEmail,
  addSms: userAddSms,
  removeSms: userRemoveSms,
  addTag: userAddTag,
  addTags: userAddTags,
  removeTag: userRemoveTag,
  removeTags: userRemoveTags,
  getTags: userGetTags,
  addEventListener: userAddEventListener,
  removeEventListener: userRemoveEventListener,
  setLanguage: userSetLanguage,
  getLanguage: userGetLanguage,
  trackEvent: userTrackEvent,
  PushSubscription: PushSubscriptionNamespace
};
var SessionNamespace = {
  sendOutcome: sessionSendOutcome,
  sendUniqueOutcome: sessionSendUniqueOutcome
};
var DebugNamespace = {
  setLogLevel: debugSetLogLevel
};
var SlidedownNamespace = {
  promptPush: slidedownPromptPush,
  promptPushCategories: slidedownPromptPushCategories,
  promptSms: slidedownPromptSms,
  promptEmail: slidedownPromptEmail,
  promptSmsAndEmail: slidedownPromptSmsAndEmail,
  addEventListener: slidedownAddEventListener,
  removeEventListener: slidedownRemoveEventListener
};
var NotificationsNamespace = {
  get permissionNative() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permissionNative) !== null && _c !== void 0 ? _c : "default";
  },
  get permission() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window.OneSignal) === null || _a === void 0 ? void 0 : _a.Notifications) === null || _b === void 0 ? void 0 : _b.permission) !== null && _c !== void 0 ? _c : false;
  },
  setDefaultUrl: notificationsSetDefaultUrl,
  setDefaultTitle: notificationsSetDefaultTitle,
  isPushSupported,
  requestPermission: notificationsRequestPermission,
  addEventListener: notificationsAddEventListener,
  removeEventListener: notificationsRemoveEventListener
};
function isPushSupported() {
  return isPushNotificationsSupported();
}
var ONESIGNAL_SDK_ID = "onesignal-sdk";
var DEFAULT_SCRIPT_SRC = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
var isOneSignalInitialized = false;
var isOneSignalScriptFailed = false;
if (typeof window !== "undefined") {
  window.OneSignalDeferred = window.OneSignalDeferred || [];
}
function isPushNotificationsSupported() {
  return supportsVapidPush() || supportsSafariPush();
}
function isMacOSSafariInIframe() {
  return window.top !== window && // isContextIframe
  navigator.vendor === "Apple Computer, Inc." && // isSafari
  navigator.platform === "MacIntel";
}
function supportsSafariPush() {
  return window.safari && typeof window.safari.pushNotification !== "undefined" || isMacOSSafariInIframe();
}
function supportsVapidPush() {
  return typeof PushSubscriptionOptions !== "undefined" && PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey");
}
function handleOnError() {
  isOneSignalScriptFailed = true;
}
function addSDKScript(scriptSrc) {
  if (document.getElementById(ONESIGNAL_SDK_ID)) {
    return;
  }
  const script = document.createElement("script");
  script.id = ONESIGNAL_SDK_ID;
  script.defer = true;
  script.src = scriptSrc || DEFAULT_SCRIPT_SRC;
  script.onerror = () => {
    handleOnError();
  };
  document.head.appendChild(script);
}
var OneSignal = class {
  constructor() {
    this.User = UserNamespace;
    this.Session = SessionNamespace;
    this.Debug = DebugNamespace;
    this.Slidedown = SlidedownNamespace;
    this.Notifications = NotificationsNamespace;
    this.login = oneSignalLogin;
    this.logout = oneSignalLogout;
    this.setConsentGiven = oneSignalSetConsentGiven;
    this.setConsentRequired = oneSignalSetConsentRequired;
  }
  /* P U B L I C */
  /**
   * @PublicApi
   */
  init(options) {
    var _a;
    if (isOneSignalInitialized) {
      return Promise.reject(`OneSignal is already initialized.`);
    }
    if (!options || !options.appId) {
      return Promise.reject("You need to provide your OneSignal appId.");
    }
    if (!document) {
      return Promise.reject(`Document is not defined.`);
    }
    if (((_a = options.welcomeNotification) === null || _a === void 0 ? void 0 : _a.disabled) !== void 0) {
      options.welcomeNotification.disable = options.welcomeNotification.disabled;
    }
    addSDKScript(options.scriptSrc);
    return new Promise((resolve, reject) => {
      var _a2;
      (_a2 = window.OneSignalDeferred) === null || _a2 === void 0 ? void 0 : _a2.push((oneSignal) => {
        oneSignal.init(options).then(() => {
          isOneSignalInitialized = true;
          resolve();
        }).catch(reject);
      });
    });
  }
};
OneSignal.ɵprov = ɵɵdefineInjectable({ factory: function OneSignal_Factory() {
  return new OneSignal();
}, token: OneSignal, providedIn: "root" });
OneSignal.decorators = [
  { type: Injectable, args: [{
    providedIn: "root"
  }] }
];
OneSignal.ctorParameters = () => [];
var OnesignalNgxComponent = class {
  constructor() {
  }
  ngOnInit() {
  }
};
OnesignalNgxComponent.decorators = [
  { type: Component, args: [{
    selector: "onesignal-onesignal-ngx",
    template: `
    <p>
      onesignal-ngx works!
    </p>
  `
  }] }
];
OnesignalNgxComponent.ctorParameters = () => [];
var OnesignalNgxModule = class {
};
OnesignalNgxModule.decorators = [
  { type: NgModule, args: [{
    declarations: [OnesignalNgxComponent],
    imports: [],
    exports: [OnesignalNgxComponent]
  }] }
];
export {
  OneSignal,
  OnesignalNgxComponent,
  OnesignalNgxModule
};
//# sourceMappingURL=onesignal-ngx.js.map
