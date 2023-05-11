"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require('web3-utils');
var EthValidation = (function () {
    function EthValidation() {
    }
    EthValidation.prototype.validateAddress = function (_network, address) {
        return utils.isAddress(address);
    };
    EthValidation.prototype.validateUri = function (addressUri) {
        if (!addressUri) {
            return false;
        }
        var address = this.extractAddress(addressUri);
        var ethereumPrefix = /ethereum/i.exec(addressUri);
        return !!ethereumPrefix && utils.isAddress(address);
    };
    EthValidation.prototype.extractAddress = function (data) {
        var prefix = /^[a-z]+:/i;
        var params = /([\?\&](value|gas|gasPrice|gasLimit)=(\d+([\,\.]\d+)?))+/i;
        return data.replace(prefix, '').replace(params, '');
    };
    return EthValidation;
}());
exports.EthValidation = EthValidation;
//# sourceMappingURL=index.js.map