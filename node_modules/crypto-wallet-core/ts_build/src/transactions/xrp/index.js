"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var ripple_binary_codec_1 = __importDefault(require("ripple-binary-codec"));
var ripple_lib_1 = require("ripple-lib");
var HashPrefix;
(function (HashPrefix) {
    HashPrefix[HashPrefix["livenet"] = 1415073280] = "livenet";
    HashPrefix[HashPrefix["mainnet"] = 1415073280] = "mainnet";
    HashPrefix[HashPrefix["testnet"] = 1937012736] = "testnet";
})(HashPrefix || (HashPrefix = {}));
var XRPTxProvider = (function () {
    function XRPTxProvider() {
    }
    XRPTxProvider.prototype.create = function (params) {
        var recipients = params.recipients, tag = params.tag, from = params.from, invoiceID = params.invoiceID, fee = params.fee, feeRate = params.feeRate, nonce = params.nonce;
        var _a = recipients[0], address = _a.address, amount = _a.amount;
        var rippleAPI = new ripple_lib_1.RippleAPI();
        var schemaValidate = ripple_lib_1.RippleAPI._PRIVATE.schemaValidator.schemaValidate;
        var Flags = 2147483648;
        var amountStr = rippleAPI.dropsToXrp(amount);
        var feeNum = fee || feeRate;
        var feeStr = rippleAPI.dropsToXrp(feeNum.toString());
        var payment = {
            source: {
                address: from,
                maxAmount: {
                    value: amountStr,
                    currency: 'XRP'
                }
            },
            destination: {
                address: address,
                amount: {
                    value: amountStr,
                    currency: 'XRP'
                }
            }
        };
        var instructions = {
            fee: feeStr,
            sequence: nonce,
            maxLedgerVersion: null
        };
        var txJSON = {
            TransactionType: 'Payment',
            Account: from,
            Destination: address,
            Amount: amount.toString(),
            Flags: Flags,
            Fee: fee.toString(),
            Sequence: nonce
        };
        if (invoiceID) {
            payment.invoiceID = invoiceID;
            txJSON.InvoiceID = invoiceID;
        }
        if (tag) {
            payment.destination.tag = tag;
            txJSON.DestinationTag = tag;
        }
        schemaValidate('preparePaymentParameters', { address: from, payment: payment, instructions: instructions });
        schemaValidate('tx-json', txJSON);
        return ripple_binary_codec_1.default.encode(txJSON);
    };
    XRPTxProvider.prototype.getSignatureObject = function (params) {
        var tx = params.tx, key = params.key;
        var txJSON = ripple_binary_codec_1.default.decode(tx);
        var rippleAPI = new ripple_lib_1.RippleAPI();
        var signedTx = rippleAPI.sign(JSON.stringify(txJSON), {
            privateKey: key.privKey.toUpperCase(),
            publicKey: key.pubKey.toUpperCase()
        });
        return signedTx;
    };
    XRPTxProvider.prototype.getSignature = function (params) {
        var signedTransaction = this.getSignatureObject(params).signedTransaction;
        return signedTransaction;
    };
    XRPTxProvider.prototype.getHash = function (params) {
        var tx = params.tx, _a = params.network, network = _a === void 0 ? 'mainnet' : _a;
        var prefix = HashPrefix[network].toString(16).toUpperCase();
        return this.sha512Half(prefix + tx);
    };
    XRPTxProvider.prototype.applySignature = function (params) {
        var signature = params.signature;
        return signature;
    };
    XRPTxProvider.prototype.sign = function (params) {
        var tx = params.tx, key = params.key;
        var signature = this.getSignature({ tx: tx, key: key });
        return this.applySignature({ tx: tx, signature: signature });
    };
    XRPTxProvider.prototype.sha512Half = function (hex) {
        return crypto_1.createHash('sha512')
            .update(Buffer.from(hex, 'hex'))
            .digest('hex')
            .toUpperCase()
            .slice(0, 64);
    };
    return XRPTxProvider;
}());
exports.XRPTxProvider = XRPTxProvider;
//# sourceMappingURL=index.js.map