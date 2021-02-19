define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    var self;
    return Component.extend({
        myTimer: ko.observable(0),
        randomColor: ko.observable(),
        red: ko.observable(0),
        blue: ko.observable(0),
        green: ko.observable(0),
        initialize: function () {
            self = this;
            this._super();
            //call the incrementTime function to run on intialize
            this.incrementTime();
            this.subscribeToTime();
            this.randomColor = ko.computed(function() {
                //return the random colour value
                return 'rgb(' + this.red() + ', ' + this.blue() + ', ' + this.green() + ')';
            }, this);
        },
        //increment myTimer every second
        incrementTime: function() {
            var t = 0;
            setInterval(function() {
                t++;
                self.myTimer(t);
            }, 1000);
        },
        subscribeToTime: function() {
            this.myTimer.subscribe(function(newValue) {
                console.log(newValue);
                self.updateTimerTextColour();
            });
        },
        randomNumber: function() {
            return Math.floor((Math.random() * 255) + 1);
        },
        updateTimerTextColour: function() {
            //define RGB values
            this.red(self.randomNumber());
            this.blue(self.randomNumber());
            this.green(self.randomNumber());
        }
    });
});