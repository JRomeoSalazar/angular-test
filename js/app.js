"use strict";

(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.directive('productDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'product/_description.html'
        };
    });

    app.directive('productTabs', function(){
        return {
            restrict: 'E',
            templateUrl: 'product/_tabs.html',
            controller: function(){
                this.tab = 1;
                this.selectTab = function(setTab){
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productReviewForm', function(){
        return {
            restrict: 'E',
            templateUrl: 'product/form/_review.html',
            controller: function(){
                this.review = {};
                this.addReview = function(product){
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This is a great description.',
            canPurchase: true,
            isSoldOut: false,
            image: 'images/gem1.png',
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        },
        {
            name: 'Pentagon',
            price: 5.55,
            description: '...',
            canPurchase: true,
            isSoldOut: false,
            image: 'images/gem2.png',
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }]
        }
    ];
})();
