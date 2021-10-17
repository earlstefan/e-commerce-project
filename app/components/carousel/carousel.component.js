'use strict';

angular.module('carouselComponent')
    .component('carouselComponent', {
        templateUrl: "../app/components/carousel/carousel.component.html",
        controller: function($scope, $location) {
              $scope.title = "Hello Bitch!";

              $scope.blogItems = [
                  {title: "This is a Title Name", id: 1, description: "Lorem Nyan Nyan 1"},
                  {title: "This is a Title Book", id: 2, description: "Lorem Nyan Nyan 2"},
                  {title: "This is a Title Surf", id: 3, description: "Lorem Nyan Nyan 3"},
                  {title: "This is a Title Speed", id: 4, description: "Lorem Nyan Nyan 4"},
              ]

              $scope.items = $scope.blogItems;
              $scope.$location = $location;
              let slider = tns({
                container: ".tns-slider",
                items: 1,
                slideBy: "page",
                mouseDrag: true,
                controlsPosition: "bottom",
                navPosition: "bottom",
                autoplayButtonOutput: false,
                autoplay: true,
                responsive: {
                  640: {
                    items: 1,
                  },
                  1000: {
                    items: 1,
                  },
                  1400: {
                    items: 1,
                  },
                },
              });
        }
    });