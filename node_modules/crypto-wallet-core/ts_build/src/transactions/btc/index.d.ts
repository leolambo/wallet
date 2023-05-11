import { Key } from '../../derivation';
export declare class BTCTxProvider {
    lib: any;
    selectCoins(recipients: Array<{
        amount: number;
    }>, utxos: Array<{
        value: number;
        mintHeight: number;
        txid?: string;
        mintTxid?: string;
        mintIndex?: number;
    }>, fee: number): {
        value: number;
        mintHeight: number;
        txid?: string;
        mintTxid?: string;
        mintIndex?: number;
    }[];
    create({ recipients, utxos, change, wallet, feeRate, fee }: {
        recipients: any;
        utxos?: any[];
        change: any;
        wallet: any;
        feeRate: any;
        fee: any;
    }): any;
    getSignature(params: {
        tx: string;
        keys: Array<Key>;
    }): void;
    applySignature(params: {
        tx: string;
        keys: Array<Key>;
    }): void;
    getHash(params: {
        tx: string;
    }): any;
    sign(params: {
        tx: string;
        keys: Array<Key>;
        utxos: any[];
        pubkeys?: any[];
        threshold?: number;
        opts: any;
    }): any;
    getRelatedUtxos({ outputs, utxos }: {
        outputs: any;
        utxos: any;
    }): any;
    getOutputsFromTx({ tx }: {
        tx: any;
    }): any;
    getSigningAddresses({ tx, utxos }: {
        tx: any;
        utxos: any;
    }): string[];
}
//# sourceMappingURL=index.d.ts.map