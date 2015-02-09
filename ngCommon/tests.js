describe("AlertItem Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/alertItem/alertItem.html", getStringFromUrl("/app/common/components/alertItem/alertItem.html"));
        element = angular.element("<alert-item></alert-item>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("Alerts Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/alerts/alerts.html", getStringFromUrl("/app/common/components/alerts/alerts.html"));
        element = angular.element("<alerts></alerts>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("EntityAdminMenu Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/entityAdminMenu/entityAdminMenu.html", getStringFromUrl("/app/common/components/entityAdminMenu/entityAdminMenu.html"));
        element = angular.element("<entity-admin-menu entity-name-pluralized=\"Roles\" entity-name=\"Role\"></entity-admin-menu>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("Wtf Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/wtf/wtf.html", getStringFromUrl("/app/common/components/wtf/wtf.html"));
        element = angular.element("<wtf></wtf>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
