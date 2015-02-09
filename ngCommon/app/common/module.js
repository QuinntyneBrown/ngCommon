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