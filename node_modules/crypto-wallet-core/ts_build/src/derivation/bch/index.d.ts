import { AbstractBitcoreLibDeriver } from '../btc';
export declare class BchDeriver extends AbstractBitcoreLibDeriver {
    bitcoreLib: any;
    deriveAddress(network: any, pubKey: any, addressIndex: any, isChange: any): any;
    derivePrivateKey(network: any, xPriv: any, addressIndex: any, isChange: any): {
        address: any;
        privKey: any;
        pubKey: any;
    };
}
//# sourceMappingURL=index.d.ts.map