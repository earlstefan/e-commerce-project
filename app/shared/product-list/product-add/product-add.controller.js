"use strict";

angular.module("app").controller("productAddController", [
  "$scope",
  "$timeout",
  "addProductService",
  function ($scope, $timeout, addProductService) {
    $scope.ProductName = "";
    $scope.ProductSKU = "";
    $scope.ProductPrice = "";
    $scope.ProductCartDesc = "";
    $scope.ProductStock = "";
    $scope.ProductImage = "";
    $scope.ProductWeight = "";
    $scope.ProductCategoryID = "";
    $scope.isSuccess = false;

    $scope.callAtTimeout = function () {
      $scope.isSuccess = false;
    };

    $scope.addProduct = function () {
      //add data then pass it to the addProductService.
      addProductService.addProduct((res) => {
        $scope.isSuccess = true;
        $timeout(function () {
          $scope.callAtTimeout();
        }, 5000);
      });
    };
  },
]);
