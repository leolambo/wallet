import { Injectable } from '@angular/core';
import { Logger } from '../../providers/logger/logger';

// providers
import { BwcProvider } from '../bwc/bwc';
import { CurrencyProvider } from '../currency/currency';
import { InvoiceProvider } from '../invoice/invoice';
import { OnGoingProcessProvider } from '../on-going-process/on-going-process';

@Injectable()
export class PayproProvider {
  constructor(
    private logger: Logger,
    private bwcProvider: BwcProvider,
    private currencyProvider: CurrencyProvider,
    private onGoingProcessProvider: OnGoingProcessProvider,
    private invoiceProvider: InvoiceProvider
  ) {
    this.logger.debug('PayproProvider initialized');
  }

  public async getPayProOptions(
    paymentUrl,
    disableLoader?: boolean,
    attempt: number = 1
  ): Promise<any> {
    this.logger.info('PayPro Options: try... ' + attempt);
    const bwc = this.bwcProvider.getPayProV2();
    const options: any = {
      paymentUrl,
      unsafeBypassValidation: true
    };
    if (!disableLoader) {
      this.onGoingProcessProvider.set('fetchingPayProOptions');
    }
    const payOpts = await bwc.getPaymentOptions(options).catch(async err => {
      this.logger.error(`PayPro Options ERR: ${err.message}`);
      if (attempt <= 3) {
        await new Promise(resolve => setTimeout(resolve, 5000 * attempt));
        return this.getPayProOptions(paymentUrl, disableLoader, ++attempt);
      } else {
        if (!disableLoader) this.onGoingProcessProvider.clear();
        throw err;
      }
    });
    if (!disableLoader) this.onGoingProcessProvider.clear();
    this.logger.info('PayPro Options: SUCCESS', JSON.stringify(payOpts));
    return payOpts;
  }

  public async getPayProDetails(params: {
    paymentUrl;
    coin;
    payload?: { address?: string };
    disableLoader?: boolean;
    attempt?: number;
  }): Promise<any> {
    let { paymentUrl, coin, payload, disableLoader, attempt = 1 } = params;
    this.logger.info('PayPro Details: try... ' + attempt);
    const bwc = this.bwcProvider.getPayProV2();
    const chain = this.currencyProvider.getChain(coin).toUpperCase();
    const options: any = {
      paymentUrl,
      chain,
      currency: coin.toUpperCase(),
      payload,
      unsafeBypassValidation: true
    };
    if (!disableLoader) {
      this.onGoingProcessProvider.set('fetchingPayPro');
    }

    const payDetails = await bwc
      .selectPaymentOption(options)
      .catch(async err => {
        this.logger.error(`PayPro Details ERR: ${err.message}`);
        if (attempt <= 3) {
          await new Promise(resolve => setTimeout(resolve, 5000 * attempt));
          return this.getPayProDetails({
            paymentUrl,
            coin,
            payload,
            disableLoader,
            attempt: ++attempt
          });
        } else {
          if (!disableLoader) this.onGoingProcessProvider.clear();
          throw err;
        }
      });
    if (!disableLoader) this.onGoingProcessProvider.clear();
    // workaround for getting invoice exchange rates
    if (payDetails && !payDetails.exchangeRates) {
      const invoiceId = payDetails.payProUrl.split('i/')[1];
      const network = payDetails.payProUrl.includes('test')
        ? 'testnet'
        : 'livenet';
      const invoice = await this.invoiceProvider.getBitPayInvoiceWithNetwork(
        invoiceId,
        network
      );
      payDetails.exchangeRates = invoice.exchangeRates;
    }
    this.logger.info('PayPro Details: SUCCESS', JSON.stringify(payDetails));
    return payDetails;
  }
}
