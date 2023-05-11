# apple-wallet-ng
This is a wrapper for using `cordova-apple-wallet-ng` with Ionic projects instead to install `@ionic-native/apple-wallet`.

## Requirements

Make sure you have `cordova-apple-wallet-ng` installed.

```Bash
cordova plugin add cordova-apple-wallet-ng
```

See [this guide](https://github.com/cmgustavo/cordova-apple-wallet) for more details

## Installation

Run this command to install the Apple Wallet wrapper into your project.

```bash
npm install apple-wallet-ng --save
```

## Usage

### Declare
```typescript
import { AppleWalletNg } from 'apple-wallet-ng';


constructor(private appleWallet: AppleWalletNg) { }
```

### available

Simple call to determine if the current device supports Apple Pay and has a supported card installed.

```typescript
this.appleWallet.available()
 .then((res: boolean) => {
   // Expect res to be boolean
  })
 .catch((err) => {
   // Catch {{err}} here
 });
```

### startAddPaymentPass

Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.

This method provides the data needed to create a request to add your payment pass (credit/debit card). After a successful callback, pass the certificate chain to your issuer server-side using our callback delegate method `AppleWallet.completeAddPaymentPass`. The issuer server-side should returns an encrypted JSON payload containing the encrypted card data, which is required to be get the final response

```typescript
this.appleWallet.startAddPaymentPass(data: cardData)
 .then((res: any) => {
   // User proceed and successfully asked to add card to his wallet
   // Use the callback response JSON payload to complete addition process
  })
 .catch((err) => {
   // Catch {{err}} here
 });
```

### completeAddPaymentPass

```typescript
this.appleWallet.completeAddPaymentPass(data: encryptedCardData)
 .then((res: any) => {
   // Expect res to be string either 'success' or 'error'
  })
 .catch((err) => {
   // Catch {{err}} here
   // Error and can not add the card, or something wrong happend
   // PKAddPaymentPassViewController will be dismissed
 });
```

### checkPairedDevicesBySuffix

```typescript
this.appleWallet.checkPairedDevicesBySuffix(data: string)
 .then((res: any) => {
   // Expect res to be any
  })
 .catch((err) => {
   // Error and can not get paired devices, or something wrong happend
 });
```

### graphRequest

```typescript
this.appleWallet.graphRequest(headers, json, success, error)
 .then((res: any) => {
   // Expect res to be any
  })
 .catch((err) => {
   // Error and can not get grapthRequest, or something wrong happend
 });
```
