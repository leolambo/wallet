"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ripple_keypairs_1 = __importDefault(require("ripple-keypairs"));
var bitcore_lib_1 = __importDefault(require("bitcore-lib"));
var XrpDeriver = (function () {
    function XrpDeriver() {
    }
    XrpDeriver.prototype.deriveAddress = function (network, xpubkey, addressIndex, isChange) {
        var xpub = new bitcore_lib_1.default.HDPublicKey(xpubkey, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        var pubKey = xpub.derive(path).toObject().publicKey;
        var address = ripple_keypairs_1.default.deriveAddress(pubKey);
        return address;
    };
    XrpDeriver.prototype.derivePrivateKey = function (network, xPriv, addressIndex, isChange) {
        var xpriv = new bitcore_lib_1.default.HDPrivateKey(xPriv, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        var derivedXPriv = xpriv.derive(path);
        var privKey = derivedXPriv.toObject().privateKey.toUpperCase();
        var pubKey = derivedXPriv.hdPublicKey.toObject().publicKey.toUpperCase();
        var address = ripple_keypairs_1.default.deriveAddress(pubKey);
        return { address: address, privKey: privKey, pubKey: pubKey };
    };
    return XrpDeriver;
}());
exports.XrpDeriver = XrpDeriver;
//# sourceMappingURL=index.js.map