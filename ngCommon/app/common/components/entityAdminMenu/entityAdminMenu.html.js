angular.module("common").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/common/components/entityAdminMenu/entityAdminMenu.html", "<div class=\"entity-admin-menu\">" + "    " + "    <h1>" + "        {{ entityNamePluralized }}" + "    </h1>" + "" + "    <ul>" + "        <li><a ng-href=\"#/{{ entityNameLowerCase }}/add\">Add {{ entityName }}</a></li>" + "        <li><a ng-href=\"#/{{ entityNameLowerCase }}/list\">{{ entityNamePluralized }}</a></li>" + "    </ul>" + "" + "</div>");
}]);
//# sourceMappingURL=entityAdminMenu.html.js.map