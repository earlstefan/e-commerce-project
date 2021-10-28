"use strict";

angular.module("footerModule").component("footerComponent", {
  templateUrl: "../app/components/footer/footer.component.html",
  controller: function ($scope, $location) {
    $scope.$location = $location;
  },
});
