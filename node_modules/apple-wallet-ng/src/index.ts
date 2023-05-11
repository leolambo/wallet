import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface EncryptedCardData {
  activationData: string;
  encryptedPassData: string;
  wrappedKey: string;
}


export interface CardData {
  cardholderName: string;
  primaryAccountNumberSuffix: string;
  localizedDescription?: string;
  paymentNetwork?: string;
}

/**
 * @Interfaces
 * EncryptedCardData
 * CardData
 */
@Plugin({
  pluginName: 'AppleWallet',
  plugin: 'cordova-apple-wallet',
  pluginRef: 'AppleWallet',
  repo: 'https://github.com/cmgustavo/cordova-apple-wallet',
  platforms: ['iOS'],
})
@Injectable()
export class AppleWalletNg extends IonicNativePlugin {
  /**
   * Simple call to determine if the current device supports Apple Pay and has a supported card installed.
   * @return {Promise<boolean>}
   */
  @Cordova()
  available(): Promise<boolean> {
    return;
  }

  /**
   * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
   * @param {cardData} data
   * @return {Promise<any>}
   */
  @Cordova()
  startAddPaymentPass(data: CardData): Promise<any> {
    return;
  }

  /**
   * Simple completion handler that takes encrypted card data returned from your server side, in order to get the final response from Apple to know if the card is added succesfully or not.
   * @param {encryptedCardData} data
   * @return {Promise<any>}
   */
  @Cordova()
  completeAddPaymentPass(data: EncryptedCardData): Promise<any> {
    return;
  }

  /**
   * Check paired devices by suffix.
   * @param {string} data
   * @return {Promise<any>}
   */
  @Cordova()
  checkPairedDevicesBySuffix(data: string): Promise<any> {
    return;
  }

  /**
   * graph request
   * @param {string} data
   * @return {Promise<any>}
   */
  @Cordova()
  graphRequest(headers: any, json: any): Promise<any> {
    return;
  }

}
