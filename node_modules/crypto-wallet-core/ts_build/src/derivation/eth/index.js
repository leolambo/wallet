"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_utils_1 = __importDefault(require("web3-utils"));
var BitcoreLib = require('bitcore-lib');
var EthDeriver = (function () {
    function EthDeriver() {
    }
    EthDeriver.prototype.padTo32 = function (msg) {
        while (msg.length < 32) {
            msg = Buffer.concat([new Buffer([0]), msg]);
        }
        if (msg.length !== 32) {
            throw new Error("invalid key length: " + msg.length);
        }
        return msg;
    };
    EthDeriver.prototype.deriveAddress = function (network, xpubkey, addressIndex, isChange) {
        var xpub = new BitcoreLib.HDPublicKey(xpubkey, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        var derived = xpub.derive(path).publicKey;
        return this.addressFromPublicKeyBuffer(derived.toBuffer());
    };
    EthDeriver.prototype.addressFromPublicKeyBuffer = function (pubKey) {
        var ecPoint = new BitcoreLib.PublicKey.fromBuffer(pubKey).point;
        var x = ecPoint.getX().toBuffer({ size: 32 });
        var y = ecPoint.getY().toBuffer({ size: 32 });
        var paddedBuffer = Buffer.concat([x, y]);
        var address = web3_utils_1.default.keccak256("0x" + paddedBuffer.toString('hex')).slice(26);
        return web3_utils_1.default.toChecksumAddress(address);
    };
    EthDeriver.prototype.derivePrivateKey = function (network, xPriv, addressIndex, isChange) {
        var xpriv = new BitcoreLib.HDPrivateKey(xPriv, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        var derivedPrivKey = xpriv.derive(path);
        var privKey = derivedPrivKey.privateKey.toString('hex');
        var pubKeyObj = derivedPrivKey.publicKey;
        var pubKey = pubKeyObj.toString('hex');
        var pubKeyBuffer = pubKeyObj.toBuffer();
        var address = this.addressFromPublicKeyBuffer(pubKeyBuffer);
        return { address: address, privKey: privKey, pubKey: pubKey };
    };
    return EthDeriver;
}());
exports.EthDeriver = EthDeriver;
//# sourceMappingURL=index.js.map