export interface Key {
    address: string;
    privKey?: string;
    pubKey?: string;
}
export interface IDeriver {
    deriveAddress(network: string, xPub: string, addressIndex: number, isChange: boolean): string;
    derivePrivateKey(network: string, xPriv: string, addressIndex: number, isChange: boolean): Key;
}
export declare class DeriverProxy {
    get(chain: any): IDeriver;
    deriveAddress(chain: any, network: any, xpubKey: any, addressIndex: any, isChange: any): string;
    derivePrivateKey(chain: any, network: any, privKey: any, addressIndex: any, isChange: any): Key;
    pathFor(chain: any, network: any, account?: number): string;
}
declare const _default: DeriverProxy;
export default _default;
//# sourceMappingURL=index.d.ts.map