'use strict'

angular.module('app').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled:true
    })
    $routeProvider.when("/", {
        template: "<card-component></card-component>"
    }).when("/blog/:id", {
        template: "Hello World!"
    }).when("/footer", {
        templateUrl: "app/components/footer/footer.component.html"
    }).otherwise({
        template: "Not found"
    })
});
