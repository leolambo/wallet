"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitcoreCash = require('bitcore-lib-cash');
var BchValidation = (function () {
    function BchValidation() {
    }
    BchValidation.prototype.validateAddress = function (network, address) {
        var AddressCash = BitcoreCash.Address;
        return AddressCash.isValid(address, network);
    };
    BchValidation.prototype.validateUri = function (addressUri) {
        var URICash = BitcoreCash.URI;
        return URICash.isValid(addressUri);
    };
    return BchValidation;
}());
exports.BchValidation = BchValidation;
//# sourceMappingURL=index.js.map