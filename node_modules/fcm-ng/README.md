# fcm-ng (aka FCMNG)
This is a wrapper for using `cordova-plugin-fcm-ng` with Ionic projects instead to install `@ionic-native/fcm`.

This plugin works with any version of `cordova-plugin-fcm-ng`, but only ***v4*** or higher support Google Analytics for tracking events.

## Requirements

Make sure you have `cordova-plugin-fcm-ng` installed.

```Bash
cordova plugin add cordova-plugin-fcm-ng

```
See [this guide](https://github.com/cmgustavo/cordova-plugin-fcm) for more details

## Installation

Run following command to install the FCMNG wrapper in your project.

```bash
npm install fcm-ng --save
```
## Basic Usage
To use this plugin, import and add it to provider and inject it where you wish to use.

```typescript
// app.module.ts
import { FCMNG } from 'fcm-ng';

...

@NgModule({
  ...

  providers: [
    ...
    FCMNG
    ...
  ]
  ...
})
export class AppModule { }
```

```typescript
import { FCMNG } from 'fcm-ng';
import { Platform } from 'ionic-angular';

@Component({ ... })
export class MyComponent {

  constructor(private FCMPlugin: FCMNG, private platform: Platform) {

    this.platform.ready().then(() => {

      this.FCMPlugin.logEvent('test_event', { param1: 'param_1' }).then(res => {
        // OK
      }).catch(e => {
        // Error
      });

      this.FCMPlugin.setUserId('tester1234').then(res => {
        // OK
      }).catch(e => {
        // Error
      });

      this.FCMPlugin.setUserProperty('test_property', 'test1').then(res => {
        // OK
      }).catch(e => {
        // Error
      });
    });
  }
}
```

## License

FCMNG is released under the MIT License. Please refer to the [LICENSE](https://github.com/bitpay/copay/blob/master/LICENSE) file that accompanies this project for more information including complete terms and conditions.
