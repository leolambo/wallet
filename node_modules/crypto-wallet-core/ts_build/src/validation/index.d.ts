export interface IValidation {
    validateAddress(network: string, address: string): boolean;
    validateUri(addressUri: string): boolean;
}
export declare class ValidationProxy {
    get(chain: any): IValidation;
    validateAddress(chain: any, network: any, address: any): boolean;
    validateUri(chain: any, addressUri: any): boolean;
}
declare const _default: ValidationProxy;
export default _default;
//# sourceMappingURL=index.d.ts.map