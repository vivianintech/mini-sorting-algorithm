"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // constructor(public collection: Sortable) {};
    Sorter.prototype.sort = function () {
        // const { length }= this.collection;
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if (this.collection.compare(j, j+1)) {
                //   this.collection.swap(j, j+1)
                // }
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
        ;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
