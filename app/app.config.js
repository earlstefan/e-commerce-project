"use strict";

angular.module("app").config(function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      template: "<home-component></home-component>",
    })
    .when("/home", {
      template: "<home-component></home-component>",
    })
    .when("/home/addProduct", {
      templateUrl: "../app/shared/product-list/product-add/product-add.html",
      controller: "productAddController",
    })
    .when("/home/product/:ProductID", {
      templateUrl:
        "../app/shared/product-list/product-detail/product-detail.html",
      controller: "productDetailController",
      resolve: {
        productDetail: function (getProductService, $route) {
          console.log(getProductService);
          console.log($route);
          return getProductService.getProduct($route.current.params.ProductID);
        },
      },
    })
    .when("/home/product/:ProductID/edit", {
      templateUrl: "../app/shared/product-list/product-edit/product-edit.html",
      controller: "productEditController",
      resolve: {
        productDetail: function (getProductService, $route) {
          console.log(getProductService);
          console.log($route);
          return getProductService.getProduct($route.current.params.ProductID);
        },
      },
    })
    .otherwise({
      template: "<home-component></home-component>",
    });
});
