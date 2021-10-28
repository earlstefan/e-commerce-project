"use strict";

angular.module("homeModule").component("homeComponent", {
  templateUrl: "../app/components/home/home.component.html",
  controller: function ($scope, getProductListService) {
    $scope.title = "Hello Bitch!";
    $scope.a = 0;
    $scope.b = 0;
    $scope.products = [];
    $scope.searchProducts = [];

    getProductListService.getProductList((res) => {
      $scope.products = res;
      $scope.searchProducts = res;
      console.log($scope.products);
    });
  },
});
