"use strict";

angular.module("productListModule").component("productListComponent", {
  templateUrl: "../app/shared/product-list/product-list.component.html",
  controller: function ($scope, $location, $http) {
    $scope.title = "Hello Bitch!";
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = (a, b) => {
      $http({
        url: "http://localhost:8000/Sum?a=" + a + "&b=" + b,
        method: "GET",
      }).then(
        (res) => {
          console.log(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
    };

    $scope.blogItems = [
      {
        title: "This is a Title Name",
        id: 1,
        description: "Lorem Nyan Nyan 1",
      },
      {
        title: "This is a Title Book",
        id: 2,
        description: "Lorem Nyan Nyan 2",
      },
      {
        title: "This is a Title Surf",
        id: 3,
        description: "Lorem Nyan Nyan 3",
      },
      {
        title: "This is a Title Speed",
        id: 4,
        description: "Lorem Nyan Nyan 4",
      },
    ];

    $scope.items = $scope.blogItems;
    $scope.$location = $location;
  },
});
