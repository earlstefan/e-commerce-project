"use strict";

angular.module("app").controller("productDetailController", [
  "$scope",
  "$location",
  "productDetail",
  "deleteProductService",
  function ($scope, $location, productDetail, deleteProductService) {
    if (productDetail != "undefined") {
      console.log(productDetail);

      $scope.productDetail = productDetail;
      let productID = $scope.productDetail.ProductID;

      $scope.editProduct = () => {
        $location.path("/home/product/" + productID + "/edit");
      };

      $scope.deleteProduct = () => {
        deleteProductService.deleteProduct(productID, (res) => {});
      };
    }
  },
]);
