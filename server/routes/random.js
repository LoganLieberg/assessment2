var express = require('express');
//var router = express.Router();
var path = require('path');

//export this


var randomNumber = function  (min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);

    }
var randomAnimal = randomNumber(1, 100);


module.exports = randomNumber;
