"use strict";

angular
  .module("homeModule")
  .factory("getProductListService", [
    "$http",
    ($http) => {
      let baseUrl = "http://localhost:4000";
      let oProductListService = {};

      oProductListService.getProductList = (callback) => {
        $http({
          url: baseUrl + "/getProducts",
          method: "GET",
        }).then(
          (res) => {
            console.log("Product List fetched...");
            callback(res.data);
          },
          (err) => {
            console.log(err);
          }
        );
      };
      return oProductListService;
    },
  ])
  .factory("getProductService", [
    "$http",
    "$q",
    ($http, $q) => {
      let baseUrl = "http://localhost:4000";
      let oProductService = {};

      oProductService.getProduct = (ProductID) => {
        return $q.when(
          $http({
            url: baseUrl + "/getProduct/" + ProductID,
            method: "GET",
          }).then(
            (res) => {
              console.log("Product fetched...");
              let i = res.data.length - 1;
              return res.data[i];
            },
            (err) => {
              console.log(err);
            }
          )
        );
      };
      return oProductService;
    },
  ])
  .factory("addProductService", [
    "$http",
    "$q",
    "$route",
    ($http, $q, $route) => {
      let baseUrl = "http://localhost:4000";
      let oAddProductService = {};
      let addProductArr = {};

      oAddProductService.addProduct = (callback) => {
        addProductArr = {
          ProductSKU: $route.current.scope.ProductSKU,
          ProductName: $route.current.scope.ProductName,
          ProductPrice: $route.current.scope.ProductPrice,
          ProductCartDesc: $route.current.scope.ProductCartDesc,
          ProductStock: $route.current.scope.ProductStock,
          ProductImage: $route.current.scope.ProductImage,
          ProductWeight: $route.current.scope.ProductWeight,
          ProductCategoryID: $route.current.scope.ProductCategoryID,
        };

        return $q.when(
          $http({
            url: baseUrl + "/addProduct",
            method: "POST",
            data: addProductArr,
          }).then(
            (res) => {
              console.log("Product Added...");
              console.log(res);
              callback(res);
            },
            (err) => {
              console.log(err);
            }
          )
        );
      };
      return oAddProductService;
    },
  ])
  .factory("editProductService", [
    "$http",
    "$q",
    "$route",
    ($http, $q, $route) => {
      let baseUrl = "http://localhost:4000";
      let oEditProductService = {};
      let editProductArr = {};

      oEditProductService.editProduct = () => {
        editProductArr = {
          ProductID: $route.current.scope.ProductID,
          ProductSKU: $route.current.scope.ProductSKU,
          ProductName: $route.current.scope.ProductName,
          ProductPrice: $route.current.scope.ProductPrice,
          ProductCartDesc: $route.current.scope.ProductCartDesc,
          ProductStock: $route.current.scope.ProductStock,
          ProductImage: $route.current.scope.ProductImage,
          ProductWeight: $route.current.scope.ProductWeight,
          ProductCategoryID: $route.current.scope.ProductCategoryID,
        };

        return $q.when(
          $http({
            url: baseUrl + "/editProduct",
            method: "POST",
            data: editProductArr,
          }).then(
            (res) => {
              console.log("Product Edited...");
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          )
        );
      };
      return oEditProductService;
    },
  ])
  .factory("deleteProductService", [
    "$http",
    "$q",
    ($http, $q) => {
      let baseUrl = "http://localhost:4000";
      let oDeleteProductService = {};

      oDeleteProductService.deleteProduct = (ProductID, callback) => {
        return $q.when(
          $http({
            url: baseUrl + "/deleteProduct/" + ProductID,
            method: "POST",
          }).then(
            (res) => {
              console.log("Product Deleteed...");
              console.log(res);
              callback(res);
            },
            (err) => {
              console.log(err);
            }
          )
        );
      };
      return oDeleteProductService;
    },
  ]);
