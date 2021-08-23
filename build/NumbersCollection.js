"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var Sorter_1 = require("./Sorter");
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    ;
    Object.defineProperty(NumbersCollection.prototype, "length", {
        /*
        Notice that the below is equal to line 2:
        data: number[];
      
        constructor (data: number[]) {
          this.data = data;
        }
        */
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    // this compare function returns true if the left number is more than the right number
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    // this swap function doesn't return anything
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}(Sorter_1.Sorter));
exports.NumbersCollection = NumbersCollection;
