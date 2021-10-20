"use strict";

// angular.module("homeModule").provider("getProductListService", () => {
//   let baseUrl = "";

//   this.config = (url) => {
//     baseUrl = url;
//   };

//   this.$get = [
//     "$log",
//     "$http",
//     ($log, $http) => {
//       $log.log("Instantiating getProductListService...");
//       let oProductListService = {};
//       oProductListService.getProductList = (callback) => {
//         $http({
//           url: baseUrl + "/getProducts",
//           method: "GET",
//         }).then(
//           (res) => {
//             console.log(res.data);
//             callback(res.data);
//           },
//           (err) => {
//             console.log(err);
//           }
//         );
//       };

//       return oProductListService;
//     },
//   ];
// });

angular.module("homeModule").factory("getProductListService", [
  "$http",
  ($http) => {
    let baseUrl = "http://localhost:8000";
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
]);
