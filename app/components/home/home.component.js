"use strict";

angular.module("homeModule").component("homeComponent", {
  templateUrl: "../app/components/home/home.component.html",
  controller: function ($scope, getProductListService) {
    $scope.title = "Hello Bitch!";
    $scope.a = 0;
    $scope.b = 0;
    $scope.productList = [];

    getProductListService.getProductList((res) => {
      $scope.productList = res;
      console.log($scope.productList);
    });
  },
});
