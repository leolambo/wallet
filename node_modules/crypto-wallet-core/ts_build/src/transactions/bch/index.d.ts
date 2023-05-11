import { BTCTxProvider } from '../btc';
export declare class BCHTxProvider extends BTCTxProvider {
    lib: any;
    create({ recipients, utxos, change, wallet, fee }: {
        recipients: any;
        utxos?: any[];
        change: any;
        wallet: any;
        fee?: number;
    }): any;
}
//# sourceMappingURL=index.d.ts.map