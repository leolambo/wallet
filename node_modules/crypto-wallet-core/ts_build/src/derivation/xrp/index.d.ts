import { IDeriver } from '..';
export declare class XrpDeriver implements IDeriver {
    deriveAddress(network: any, xpubkey: any, addressIndex: any, isChange: any): any;
    derivePrivateKey(network: any, xPriv: any, addressIndex: any, isChange: any): {
        address: any;
        privKey: any;
        pubKey: any;
    };
}
//# sourceMappingURL=index.d.ts.map