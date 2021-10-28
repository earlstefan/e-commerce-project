"use strict";

angular.module("app").directive("productDir", () => {
  return {
    restrict: "E",
    templateUrl: "../app/shared/product-list/product/product.directive.html",
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
    controller: function ($scope, $element, $attrs, $interpolate, $location) {
      console.log($element[0].nodeName + " - In controller..");
      console.log($scope);
      console.log($scope.product);
      $scope.quickView = function () {
        console.log("working");
        console.log($scope);
        let url = $interpolate("/home/product/{{product.ProductID}}")($scope);
        console.log(url);
        $location.path(url);
      };
    },
    scope: {
      product: "=product",
    },
  };
});
