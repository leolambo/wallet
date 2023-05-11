import { Key } from '../../derivation';
export declare class XRPTxProvider {
    create(params: {
        recipients: Array<{
            address: string;
            amount: string;
        }>;
        tag?: number;
        from: string;
        invoiceID?: string;
        fee: number;
        feeRate: number;
        nonce: number;
    }): any;
    getSignatureObject(params: {
        tx: string;
        key: Key;
    }): {
        signedTransaction: string;
        id: string;
    };
    getSignature(params: {
        tx: string;
        key: Key;
    }): string;
    getHash(params: {
        tx: string;
        network?: string;
    }): string;
    applySignature(params: {
        tx: string;
        signature: string;
    }): string;
    sign(params: {
        tx: string;
        key: Key;
    }): string;
    sha512Half(hex: string): string;
}
//# sourceMappingURL=index.d.ts.map