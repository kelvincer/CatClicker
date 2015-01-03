'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("App", [])

    .controller("CounterCtrl", function(){

      var count = this;
      count.value1 = 0;
      count.increment1 = function(){
        count.value1++;
      };
      count.value2 = 0;
      count.increment2 = function () {
        count.value2++;
      }

    });
