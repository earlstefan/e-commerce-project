"use strict";

angular.module("app").controller("productEditController", [
  "$scope",
  "productDetail",
  "editProductService",
  function ($scope, productDetail, editProductService) {
    console.log(productDetail);
    $scope.ProductID = productDetail.ProductID;
    $scope.ProductName = productDetail.ProductName;
    $scope.ProductSKU = productDetail.ProductSKU;
    $scope.ProductPrice = productDetail.ProductPrice;
    $scope.ProductCartDesc = productDetail.ProductCartDesc;
    $scope.ProductStock = productDetail.ProductStock;
    $scope.ProductImage = productDetail.ProductImage;
    $scope.ProductWeight = productDetail.ProductWeight;
    $scope.ProductCategoryID = productDetail.ProductCategoryID;

    $scope.editProduct = () => {
      editProductService.editProduct((res) => {});
    };
  },
]);
