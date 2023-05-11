"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bitcore = require('bitcore-lib');
var BtcValidation = (function () {
    function BtcValidation() {
    }
    BtcValidation.prototype.validateAddress = function (network, address) {
        var Address = Bitcore.Address;
        return Address.isValid(address, network);
    };
    BtcValidation.prototype.validateUri = function (addressUri) {
        var URI = Bitcore.URI;
        return URI.isValid(addressUri);
    };
    return BtcValidation;
}());
exports.BtcValidation = BtcValidation;
//# sourceMappingURL=index.js.map