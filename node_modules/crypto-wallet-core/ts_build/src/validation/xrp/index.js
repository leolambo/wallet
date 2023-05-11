"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_x_1 = __importDefault(require("base-x"));
var bitcore_lib_1 = __importDefault(require("bitcore-lib"));
var RIPPLE_ALPHABET = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';
var XrpValidation = (function () {
    function XrpValidation() {
    }
    XrpValidation.prototype.validateAddress = function (_network, address) {
        var RippleAddressRegex = new RegExp(/^r[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]{27,35}$/);
        if (!address.match(RippleAddressRegex)) {
            return false;
        }
        var base58 = base_x_1.default(RIPPLE_ALPHABET);
        var buffer = new Buffer(base58.decode(address));
        var prefix = buffer.slice(0, 1);
        var data = buffer.slice(1, -4);
        var hash = Buffer.concat([prefix, data]);
        hash = bitcore_lib_1.default.crypto.Hash.sha256(hash);
        hash = bitcore_lib_1.default.crypto.Hash.sha256(hash);
        var checksum = buffer.slice(-4).reduce(function (acc, check, index) {
            if (check !== hash[index]) {
                return 0;
            }
            else
                return acc || 1;
        });
        if (checksum === 0) {
            return false;
        }
        return true;
    };
    XrpValidation.prototype.validateUri = function (addressUri) {
        if (!addressUri) {
            return false;
        }
        var address = this.extractAddress(addressUri);
        var ripplePrefix = /ripple/i.exec(addressUri);
        return !!ripplePrefix && this.validateAddress('livenet', address);
    };
    XrpValidation.prototype.extractAddress = function (data) {
        var prefix = /^[a-z]+:/i;
        var params = /([\?\&](amount|dt)=(\d+([\,\.]\d+)?))+/i;
        return data.replace(prefix, '').replace(params, '');
    };
    return XrpValidation;
}());
exports.XrpValidation = XrpValidation;
//# sourceMappingURL=index.js.map