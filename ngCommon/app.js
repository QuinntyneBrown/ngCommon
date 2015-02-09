var CommonModule;
(function (CommonModule) {
    "use strict";
    angular.module("common", [
        "core",
        "configuration",
        "session",
        "ngAnimate",
        "ngRoute"
    ]).config(config).run(run);
    function config() {
    }
    function run() {
    }
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=module.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var AlertItem = (function () {
        function AlertItem() {
            this.$inject = [];
            this.restrict = "E";
            this.replace = true;
            this.scope = {
                alert: "="
            };
            this.templateUrl = "/app/common/components/alertItem/alertItem.html";
            this.link = function (scope, element, attributes) {
                scope.removeAlert = function (alert) {
                    this.alerting.removeAlert(alert);
                };
            };
        }
        AlertItem.componentId = "alertItem";
        return AlertItem;
    })();
    angular.module("common").directive(AlertItem.componentId, function () { return new AlertItem(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=alertItem.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/alertItem/_Chutzpah.39db5784c1b89248de2bea1f0b983478.test.html", "<!DOCTYPE html>" + "<html>" + "<head>" + "    <meta charset=\"utf-8\" />" + "    <title>Jasmine Spec Runner</title>" + "    <link rel=\"stylesheet\" type=\"text/css\" href=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine.css\"/>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine.js\"></script>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine-html.js\"></script>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/boot.js\"></script>" + "<link rel=\"shortcut icon\" type=\"image/png\" href=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine_favicon.png\"/>" + "" + "    " + "    " + "    " + "    " + "    <script type=\"text/javascript\" src=\"file:///c:/projects/ngsecurity/ngsecurity/app/common/components/alertitem/alertitemspec.js\"></script>" + "" + "    <script type=\"text/javascript\">" + "" + "        (function () {" + "            var amdTestPath = \"\";" + "            if (window.require && typeof window.require === \"function\" && amdTestPath !== \"\") {" + "                if (window.chutzpah) {" + "                    window.chutzpah.usingModuleLoader = true;" + "                }" + "" + "                requirejs.config({" + "                    map: {" + "                        '*': {" + "                            " + "                            }" + "                    }" + "                });" + "" + "                window.require([amdTestPath], function () {" + "" + "                    console.log(\"!!_!! Stating Jasmine from AMD callback...\");" + "                    window.initializeJasmine();" + "                });" + "            }" + "            else {" + "                var currentWindowOnload = window.onload;" + "" + "                window.onload = function() {" + "                    if (currentWindowOnload) {" + "                        currentWindowOnload();" + "                    }" + "                    window.initializeJasmine();" + "                };" + "            }" + "" + "        })();" + "    </script>" + "</head>" + "<body>" + "</body>" + "</html>");
}]);
//# sourceMappingURL=_Chutzpah.39db5784c1b89248de2bea1f0b983478.test.html.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/alerts/alerts.html", "<div data-ng-click=\"wtf()\">" + "    <div ng-repeat=\"alert in currentAlerts\" class=\"alert alert-{{alert.type}}\">" + "        {{ alert.message }}" + "        <div class=\"close\">" + "            <span class=\"glyphicon glyphicon-remove\">close</span>" + "        </div>" + "    </div>" + "</div>" + "");
}]);
//# sourceMappingURL=alerts.html.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var Alerts = (function () {
        function Alerts(alerting) {
            var _this = this;
            this.alerting = alerting;
            this.$inject = ["alerting"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/common/components/alerts/alerts.html";
            this.link = function (scope, element, attributes) {
                scope.removeAlert = function (alert) {
                    this.alerting.removeAlert(alert);
                };
                scope.currentAlerts = _this.alerting.currentAlerts;
            };
        }
        Alerts.componentId = "alerts";
        return Alerts;
    })();
    angular.module("common").directive(Alerts.componentId, function (alerting) { return new Alerts(alerting); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=alerts.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/alerts/_Chutzpah.cf99d870bdfb98b18f312dcebef19427.test.html", "<!DOCTYPE html>" + "<html>" + "<head>" + "    <meta charset=\"utf-8\" />" + "    <title>Jasmine Spec Runner</title>" + "    <link rel=\"stylesheet\" type=\"text/css\" href=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine.css\"/>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine.js\"></script>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine-html.js\"></script>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/boot.js\"></script>" + "<link rel=\"shortcut icon\" type=\"image/png\" href=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine_favicon.png\"/>" + "" + "    " + "    " + "    " + "    " + "    <script type=\"text/javascript\" src=\"file:///c:/projects/ngsecurity/ngsecurity/app/common/components/alerts/alertsspec.js\"></script>" + "" + "    <script type=\"text/javascript\">" + "" + "        (function () {" + "            var amdTestPath = \"\";" + "            if (window.require && typeof window.require === \"function\" && amdTestPath !== \"\") {" + "                if (window.chutzpah) {" + "                    window.chutzpah.usingModuleLoader = true;" + "                }" + "" + "                requirejs.config({" + "                    map: {" + "                        '*': {" + "                            " + "                            }" + "                    }" + "                });" + "" + "                window.require([amdTestPath], function () {" + "" + "                    console.log(\"!!_!! Stating Jasmine from AMD callback...\");" + "                    window.initializeJasmine();" + "                });" + "            }" + "            else {" + "                var currentWindowOnload = window.onload;" + "" + "                window.onload = function() {" + "                    if (currentWindowOnload) {" + "                        currentWindowOnload();" + "                    }" + "                    window.initializeJasmine();" + "                };" + "            }" + "" + "        })();" + "    </script>" + "</head>" + "<body>" + "</body>" + "</html>");
}]);
//# sourceMappingURL=_Chutzpah.cf99d870bdfb98b18f312dcebef19427.test.html.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/entityAdminMenu/entityAdminMenu.html", "<div class=\"entity-admin-menu\">" + "    " + "    <h1>" + "        {{ entityNamePluralized }}" + "    </h1>" + "" + "    <ul>" + "        <li><a ng-href=\"#/{{ entityNameLowerCase }}/add\">Add {{ entityName }}</a></li>" + "        <li><a ng-href=\"#/{{ entityNameLowerCase }}/list\">{{ entityNamePluralized }}</a></li>" + "    </ul>" + "" + "</div>");
}]);
//# sourceMappingURL=entityAdminMenu.html.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var EntityAdminMenu = (function () {
        function EntityAdminMenu() {
            this.$inject = [];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/common/components/entityAdminMenu/entityAdminMenu.html";
            this.link = function (scope, element, attributes) {
                scope.entityNameLowerCase = attributes.entityName.toLowerCase().replace(" ", "");
                scope.entityName = attributes.entityName;
                scope.entityNamePluralized = attributes.entityNamePluralized;
            };
        }
        EntityAdminMenu.componentId = "entityAdminMenu";
        return EntityAdminMenu;
    })();
    angular.module("common").directive(EntityAdminMenu.componentId, function () { return new EntityAdminMenu(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=entityAdminMenu.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/entityAdminMenu/_Chutzpah.33798c2dac8baa759d949f7fb55c7ebc.test.html", "<!DOCTYPE html>" + "<html>" + "<head>" + "    <meta charset=\"utf-8\" />" + "    <title>Jasmine Spec Runner</title>" + "    <link rel=\"stylesheet\" type=\"text/css\" href=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine.css\"/>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine.js\"></script>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine-html.js\"></script>" + "<script type=\"text/javascript\" src=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/boot.js\"></script>" + "<link rel=\"shortcut icon\" type=\"image/png\" href=\"file:///C:/USERS/QBROWN/APPDATA/LOCAL/MICROSOFT/VISUALSTUDIO/12.0/EXTENSIONS/A2FRCX2K.NN4/TestFiles/jasmine/v2/jasmine_favicon.png\"/>" + "" + "    " + "    " + "    " + "    " + "    <script type=\"text/javascript\" src=\"file:///c:/projects/ngsecurity/ngsecurity/app/common/components/entityadminmenu/entityadminmenuspec.js\"></script>" + "" + "    <script type=\"text/javascript\">" + "" + "        (function () {" + "            var amdTestPath = \"\";" + "            if (window.require && typeof window.require === \"function\" && amdTestPath !== \"\") {" + "                if (window.chutzpah) {" + "                    window.chutzpah.usingModuleLoader = true;" + "                }" + "" + "                requirejs.config({" + "                    map: {" + "                        '*': {" + "                            " + "                            }" + "                    }" + "                });" + "" + "                window.require([amdTestPath], function () {" + "" + "                    console.log(\"!!_!! Stating Jasmine from AMD callback...\");" + "                    window.initializeJasmine();" + "                });" + "            }" + "            else {" + "                var currentWindowOnload = window.onload;" + "" + "                window.onload = function() {" + "                    if (currentWindowOnload) {" + "                        currentWindowOnload();" + "                    }" + "                    window.initializeJasmine();" + "                };" + "            }" + "" + "        })();" + "    </script>" + "</head>" + "<body>" + "</body>" + "</html>");
}]);
//# sourceMappingURL=_Chutzpah.33798c2dac8baa759d949f7fb55c7ebc.test.html.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/identityMenu/identityMenu.html", "<div id=\"core-identity-menu\">" + "" + "    <ul class=\"menu-bar\" data-ng-if=\"!session.isLoggedIn()\">" + "" + "        <li><a href=\"#/signin\">SIGN IN</a></li>" + "" + "        <li><a href=\"#/register\">REGISTER</a></li>" + "" + "    </ul>" + "" + "    <ul class=\"menu-bar\" data-ng-if=\"session.isLoggedIn()\">" + "" + "        <li><a class=\"link\" href=\"#/security\">ADMIN</a></li>" + "" + "        <li><a class=\"link\" href=\"#/signin\">SIGN OUT</a></li>" + "        " + "        <li><a>Hi {{ session.getCurrentUser().username }}!</a></li>" + "" + "    </ul>" + "" + "</div>");
}]);
//# sourceMappingURL=identityMenu.html.js.map
var CommonModule;
(function (CommonModule) {
    var componentId = "identityMenu";
    angular.module("common").directive(componentId, ["session", component]);
    function component(session) {
        return {
            templateUrl: "/app/common/components/identityMenu/identityMenu.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
                scope.session = session;
            }
        };
    }
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=identityMenu.js.map
angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/multiEntitySelect/multiEntitySelect.html", "<div class=\"form-group\">" + "    <div>" + "        <label>" + "            {{ entityNamePlural }}" + "        </label>" + "    </div>" + "" + "    <select ng-model=\"selectedId\"" + "            data-ng-options=\"e.id as e.name for e in vm.entities\"></select>" + "" + "    <div>" + "        <ul>" + "            <li data-ng-repeat=\"entity in parentEntities\">" + "                <a>{{ entity.name }}</a>" + "            </li>" + "        </ul>" + "    </div>" + "</div>");
}]);
//# sourceMappingURL=multiEntitySelect.html.js.map
var CommonModule;
(function (CommonModule) {
    var MultiEntitySelect = (function () {
        function MultiEntitySelect() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/common/components/multiEntitySelect/multiEntitySelect.html";
            this.scope = {
                parentEntities: "=",
                entityService: "="
            };
            this.link = function (scope, element, attributes) {
                scope.parentEntities = scope.parentEntities || [];
                scope.entityNamePlural = attributes.entityNamePlural;
                scope.$watch("selectedId", function () {
                    scope.processSelectedIdChange();
                    scope.selectedId = null;
                });
                scope.processSelectedIdChange = function () {
                    if (scope.selectedId) {
                        for (var i = 0; i < scope.parentEntities.length; i++) {
                            if (scope.parentEntities[i].id == scope.selectedId) {
                                scope.parentEntities.splice(i, 1);
                                return;
                            }
                        }
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == scope.selectedId) {
                                scope.parentEntities.push(scope.vm.entities[i]);
                            }
                        }
                    }
                };
                return scope.entityService.getAll().then(function (results) {
                    scope.vm = {
                        entities: results
                    };
                });
            };
        }
        MultiEntitySelect.componentId = "multiEntitySelect";
        return MultiEntitySelect;
    })();
    angular.module("common").directive(MultiEntitySelect.componentId, function () { return new MultiEntitySelect(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=multiEntitySelect.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var workSpinner = function ($rootScope, requestCounter) {
        return {
            restrict: "E",
            scope: {},
            template: "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>",
            link: function (scope) {
                scope.$watch(function () {
                    return requestCounter.getRequestCount();
                }, function (requestCount) {
                    scope.requestCount = requestCount;
                });
            }
        };
    };
    var componentId = "workSpinner";
    workSpinner.$inject = ["$rootScope", "requestCounter"];
    angular.module("common").directive(componentId, workSpinner);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=workSpinner.js.map
var CommonModule;
(function (CommonModule) {
    var Alerting = (function () {
        function Alerting($timeout) {
            var _this = this;
            this.$timeout = $timeout;
            this.$inject = ["$timeout"];
            this.alertTypes = ["warning", "info", "danger", "success"];
            this.currentAlerts = [];
            this.addWarning = function (message) {
                _this.addAlert("warning", message);
            };
            this.addInfo = function (message) {
                _this.addAlert("info", message);
            };
            this.addDanger = function (message) {
                _this.addAlert("danger", message);
            };
            this.addSuccess = function (message) {
                _this.addAlert("success", message);
            };
            this.errorHandler = function (description) {
                return function () {
                    _this.addDanger(description);
                };
            };
            this.removeAlert = function (alert) {
                for (var i = 0; i < _this.currentAlerts.length; i++) {
                    if (_this.currentAlerts[i] == alert) {
                        _this.currentAlerts.splice(i, 1);
                        break;
                    }
                }
            };
            this.addAlert = function (type, message) {
                var alert = { type: type, message: message };
                _this.currentAlerts.push(alert);
                _this.$timeout(function () {
                    _this.removeAlert(alert);
                }, 10000);
            };
        }
        Alerting.serviceId = "alerting";
        return Alerting;
    })();
    angular.module("common").factory(Alerting.serviceId, function ($timeout) { return new Alerting($timeout); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=alerting.js.map
var CommonModule;
(function (CommonModule) {
    angular.module("common").config(function ($provide) {
        $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
            return function (exception, cause) {
                $delegate(exception, cause);
                var alerting = $injector.get("alerting");
                alerting.addDanger(exception.message);
            };
        });
    });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=exceptionHandler.js.map
//# sourceMappingURL=IAlerting.js.map
var ConfigurationModule;
(function (ConfigurationModule) {
    var app = angular.module("configuration", []);
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=module.js.map
var ConfigurationModule;
(function (ConfigurationModule) {
    var ConfigurationService = (function () {
        function ConfigurationService($http, $q, $rootScope) {
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.baseUri = "api/configuration/";
        }
        ConfigurationService.prototype.get = function () {
            var _this = this;
            var deferred = this.$q.defer();
            this.$http({ method: "GET", url: this.baseUri + "get" }).then(function (results) {
                deferred.resolve(_this.$rootScope.configuration = results.data);
            }).catch(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        ConfigurationService.serviceId = "configurationService";
        return ConfigurationService;
    })();
    ConfigurationModule.ConfigurationService = ConfigurationService;
    angular.module("configuration").service(ConfigurationService.serviceId, ["$http", "$q", "$rootScope", function ($http, $q, $rootScope) { return new ConfigurationService($http, $q, $rootScope); }]);
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=configurationService.js.map
//# sourceMappingURL=IConfigurationService.js.map
var CoreModule;
(function (CoreModule) {
    var app = angular.module("core", ["configuration", "session"]).config(config).run(run);
    config.$inject = ["$httpProvider"];
    function config($httpProvider) {
        $httpProvider.interceptors.push("authorizationInterceptor");
        $httpProvider.interceptors.push("requestCounter");
    }
    run.$inject = ["$http", "$location", "$rootScope", "$route", "$templateCache", "currentUser", "token"];
    function run($http, $location, $rootScope, $route, $templateCache, currentUser, token) {
        $rootScope.$on("$routeChangeStart", function (event, newUrl) {
            $rootScope.inViewTransition = true;
            if (newUrl.originalPath == "/signin") {
                token.set({ data: null });
            }
            ;
            if (newUrl.$$route && newUrl.$$route.authorizationRequired) {
                if (token.get() == null) {
                    $rootScope.$evalAsync(function () {
                        $location.path("/signin");
                    });
                }
                ;
            }
            ;
        });
        $rootScope.$on("$viewContentLoaded", function () {
            $rootScope.inViewTransition = false;
            if ($route.current.$$route.authorizationRequired && (currentUser.get() == null || currentUser.get() == "")) {
                $location.path("/signin");
            }
            ;
        });
    }
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=module.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=IApiEndpointConfig.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=IApiEndpointProvider.js.map
//# sourceMappingURL=ICoreRootScope.js.map
//# sourceMappingURL=IDataService.js.map
//# sourceMappingURL=IRouteProvider.js.map
//# sourceMappingURL=IRouteResolver.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function authorizationInterceptor($q, $rootScope, token) {
        var self = this;
        self.request = function (config) {
            if (token.get()) {
                config.headers.Authorization = "Bearer " + token.get();
            }
            return config;
        };
        return self;
    }
    ;
    var interceptorId = "authorizationInterceptor";
    authorizationInterceptor.$inject = ["$q", "$rootScope", "token"];
    angular.module("core").factory(interceptorId, authorizationInterceptor);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=authorizationInterceptor.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function requestCounter($q) {
        var requests = 0;
        var request = function (config) {
            requests += 1;
            return $q.when(config);
        };
        var requestError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var response = function (response) {
            requests -= 1;
            return $q.when(response);
        };
        var responseError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var getRequestCount = function () {
            return requests;
        };
        return {
            request: request,
            response: response,
            requestError: requestError,
            responseError: responseError,
            getRequestCount: getRequestCount
        };
    }
    var interceptorId = "requestCounter";
    requestCounter.$inject = ["$q"];
    angular.module("core").factory(interceptorId, requestCounter);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=requestCounter.js.map
//module CoreModule {
//    angular.module("core").value("$", $);
//}  
//# sourceMappingURL=jQuery.js.map
var CoreModule;
(function (CoreModule) {
    var ApiEndpointProvider = (function () {
        function ApiEndpointProvider() {
        }
        ApiEndpointProvider.prototype.configure = function (baseUrl) {
            this.config = {
                baseUrl: baseUrl
            };
        };
        ApiEndpointProvider.prototype.$get = function () {
            return this.config;
        };
        return ApiEndpointProvider;
    })();
    angular.module("core").provider("apiEndpointProvider", ApiEndpointProvider);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=ApiEndpointProvider.js.map
(function () {
    "use strict";

    var factoryId = "storage";

    angular.module("core").factory(factoryId, [factory]);

    function factory() {

        var STORAGE_ID = 'ngSecurityStorage';

        return {
            get: function () {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
            },

            getByName: function (params) {
                var items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

                for (var i = 0; i < items.length; i++) {
                    if (params.name === items[i].name) {
                        return items[i];
                    };
                };

                return null;
            },

            put: function (params) {

                var items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

                for (var i = 0; i < items.length; i++) {
                    if (params.name === items[i].name) {
                        items[i].value = params.value;
                        localStorage.setItem(STORAGE_ID, JSON.stringify(items));
                        return;
                    };
                };

                items.push(params);
                localStorage.setItem(STORAGE_ID, JSON.stringify(items));

            }
        };

    };

})();

(function () {
    "use strict";
    var serviceId = "configuration";
    angular.module("core").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "configuration";
        self.get = function () {
            if (data) {
                return data;
            }
            ;
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function (params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
    ;
})();
//# sourceMappingURL=configuration.js.map
var CommonModule;
(function (CommonModule) {
    var formEncode = function () {
        return function (data) {
            var pairs = [];
            for (var name in data) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            return pairs.join('&').replace(/%20/g, '+');
        };
    };
    angular.module("core").factory("formEncode", formEncode);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=formEncode.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function getStringFromUrl(url) {
        var request = new XMLHttpRequest();
        var response = null;
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    response = request.responseText;
                }
            }
        };
        request.open("GET", url, false);
        request.send(null);
        return response;
    }
    angular.module("core").value("getStringFromUrl", getStringFromUrl);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=getStringFromUrl.js.map
(function () {
    "use strict";
    var app = angular.module("session", ["configuration", "common", "core"]);
})();
//# sourceMappingURL=module.js.map
//# sourceMappingURL=ISession.js.map
var SessionModule;
(function (SessionModule) {
    var serviceId = "session";
    angular.module("session").service(serviceId, ["$location", "$http", "$q", "configuration", "configurationService", "currentUser", "token", service]);
    function service($location, $http, $q, configuration, configurationService, currentUser, token) {
        var self = this;
        self.isLoggedIn = function () {
            if (self.getCurrentUser() != null && self.getCurrentUser() != "") {
                return (self.getCurrentUser().username);
            }
        };
        self.isUserInRole = function (roleName) {
            if (self.isLoggedIn()) {
                var user = self.getCurrentUser();
                for (var i = 0; i < user.roles.length; i++) {
                    if (roleName == user.roles[i].name) {
                        return true;
                    }
                }
            }
            return false;
        };
        self.getCurrentUser = function () {
            return currentUser.get();
        };
        self.signOut = function () {
            $http({ method: "GET", url: "api/identity/signout" }).then(function () {
            });
            token.set({ data: null });
            currentUser.set({ data: null });
            $location.path("/");
        };
        self.setConfigurationAsync = function () {
            if (configuration.get()) {
                return $q.when(configuration.get());
            }
            return configurationService.get().then(function (results) {
                configuration.set({ data: results });
                return configuration.get();
            });
        };
        self.getConfiguration = function () {
            return configuration.get();
        };
        return self;
    }
    var Session = (function () {
        function Session($location, $http, $q, configuration, configurationService, currentUser, token) {
            this.$location = $location;
            this.$http = $http;
            this.$q = $q;
            this.configuration = configuration;
            this.configurationService = configurationService;
            this.currentUser = currentUser;
            this.token = token;
            this.isLoggedIn = function () {
                return true;
            };
            this.isUserInRole = function (roleName) {
                return true;
            };
            this.getCurrentUser = function () {
                return {};
            };
            this.signOut = function () {
            };
            this.setConfigurationAsync = function () {
            };
            this.getConfiguration = function () {
                return {};
            };
        }
        Session.ServiceId = "session";
        return Session;
    })();
    SessionModule.Session = Session;
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=session.js.map
var SessionModule;
(function (SessionModule) {
    "use strict";
    var serviceId = "configuration";
    angular.module("session").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "configuration";
        self.get = function get() {
            if (data) {
                return data;
            }
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function set(params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function routeChange(event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=configuration.js.map
var SessionModule;
(function (SessionModule) {
    angular.module("session").service("currentUser", function ($rootScope, storage) { return new CurrentUser($rootScope, storage); });
    var CurrentUser = (function () {
        function CurrentUser($rootScope, storage) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.storage = storage;
            this.name = "currentUser";
            this.get = function () {
                if (_this.data) {
                    return _this.data;
                }
                try {
                    _this.data = _this.storage.getByName({ name: name }).value;
                }
                catch (error) {
                }
                return _this.data;
            };
            this.set = function (value) {
                _this.data = value.data;
                _this.storage.put({ name: name, value: value.data });
            };
            $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
                if (newUrl.originalPath == "/signin") {
                    _this.data = null;
                    _this.set({ data: null });
                }
            });
        }
        CurrentUser.$inject = ["$rootScope", "storage"];
        return CurrentUser;
    })();
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=currentUser.js.map
var SessionModule;
(function (SessionModule) {
    var serviceId = "token";
    angular.module("session").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "token";
        self.get = function () {
            if (data) {
                return data;
            }
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function (params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
    ;
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=token.js.map
