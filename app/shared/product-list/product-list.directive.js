"use strict";

angular.module("app").directive("productListDir", () => {
  return {
    restrict: "E",
    templateUrl: "../app/shared/product-list/product-list.directive.html",
    compile: function (tElement, tAttributes) {
      console.log(tElement[0].nodeName + " - In compile..");
      return {
        pre: function (scope, iElement, iAttributes, controller) {
          console.log(iElement[0].nodeName + " - In pre..");
        },
        post: function (scope, iElement, iAttributes, controller) {
          console.log(iElement[0].nodeName + " - In post..");
        },
      };
    },
    controller: function ($scope, $element, $attrs) {
      console.log($element[0].nodeName + " - In controller..");
      console.log($scope);
    },
    scope: {
      products: "=products",
    },
  };
});
