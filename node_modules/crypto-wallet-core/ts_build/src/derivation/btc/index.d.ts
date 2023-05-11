import { IDeriver } from '..';
export declare abstract class AbstractBitcoreLibDeriver implements IDeriver {
    abstract bitcoreLib: any;
    deriveAddress(network: any, pubKey: any, addressIndex: any, isChange: any): any;
    derivePrivateKey(network: any, xPriv: any, addressIndex: any, isChange: any): {
        address: any;
        privKey: any;
        pubKey: any;
    };
}
export declare class BtcDeriver extends AbstractBitcoreLibDeriver {
    bitcoreLib: any;
}
//# sourceMappingURL=index.d.ts.map