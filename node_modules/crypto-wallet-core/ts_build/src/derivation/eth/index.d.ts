/// <reference types="node" />
import { IDeriver } from '..';
export declare class EthDeriver implements IDeriver {
    padTo32(msg: any): any;
    deriveAddress(network: any, xpubkey: any, addressIndex: any, isChange: any): string;
    addressFromPublicKeyBuffer(pubKey: Buffer): string;
    derivePrivateKey(network: any, xPriv: any, addressIndex: any, isChange: any): {
        address: string;
        privKey: any;
        pubKey: any;
    };
}
//# sourceMappingURL=index.d.ts.map