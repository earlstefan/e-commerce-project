"use strict";

angular.module("app").directive("carouselDir", () => {
  return {
    templateUrl: "../app/shared/carousel/carousel.directive.html",
    compile: function (tElement, tAttributes) {
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
    },
  };
});
