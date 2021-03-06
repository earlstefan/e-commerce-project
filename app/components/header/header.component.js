"use strict";

angular.module("headerModule").component("headerComponent", {
  templateUrl: "../app/components/header/header.component.html",
  controller: function ($scope, $location) {
    $scope.searchProduct = "HEYYYY";

    $scope.addProduct = () => {
      $location.path("/home/addProduct");
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
