import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface NotificationData {
  /**
   * Determines whether the notification was pressed or not
   */

  wasTapped: boolean;

  /**
   * Notification data hash item
   */

  [name: string]: any;
}

/**
 * @name FCMNG
 * @description
 * Provides basic functionality for Firebase Cloud Messaging / Push Notification / Analytics
 *
 * @usage
 * ```typescript
 * import { FCMNG } from 'fcm-ng';
 *
 * constructor(private fcmNg: FCMNG) {}
 *
 * ...
 *
 * this.fcmNg.subscribeToTopic('marketing');
 *
 * this.fcmNg.getToken().then(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcmNg.onNotification().subscribe(data => {
 *   if(data.wasTapped){
 *     console.log("Received in background");
 *   } else {
 *     console.log("Received in foreground");
 *   };
 * });
 *
 * this.fcmNg.onTokenRefresh().subscribe(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcmNg.unsubscribeFromTopic('marketing');
 *
 * ```
 * @interfaces
 * NotificationData
 */
@Plugin({
  pluginName: 'FCMNG',
  plugin: 'cordova-plugin-fcm-ng',
  pluginRef: 'FCMPlugin',
  repo: 'https://github.com/cmgustavo/cordova-plugin-fcm-ng',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FCMNG extends IonicNativePlugin {
  /**
   * Gets device's current registration id
   *
   * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
   */
  @Cordova()
  getToken(): Promise<string> {
    return;
  }

  /**
   * Event firing on the token refresh
   *
   * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
   */
  @Cordova({
    observable: true
  })
  onTokenRefresh(): Observable<string> {
    return;
  }

  /**
   * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
   *
   * @param {string} topic Topic to be subscribed to
   *
   * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
   */
  @Cordova()
  subscribeToTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
   *
   * @param {string} topic Topic to be unsubscribed from
   *
   * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
   */
  @Cordova()
  unsubscribeFromTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Tracking events [logEvent](https://firebase.google.com/docs/analytics/android/events)
   *
   * @param {string} eventName Name of event to track
   * @param {object} eventParams Params of the eventName
   *
   * @returns {Promise<any>} Returns a promise if event has been sent successfully
   */
  @Cordova()
  logEvent(eventName: string, eventParams: any): Promise<any> {
    return;
  }

  /**
   * Set User ID [setUserId](https://firebase.google.com/docs/analytics/userid)
   *
   * @param {string} userId ID of the user
   *
   * @returns {Promise<any>} Returns a promise userId has been sent successfully
   */
  @Cordova()
  setUserId(userId: string): Promise<any> {
    return;
  }

  /**
   * Set User Property [setUserProperty](https://firebase.google.com/docs/analytics/android/properties)
   *
   * @param {string} name Name of the property
   * @param {string} value Value of the property
   *
   * @returns {Promise<any>} Returns a promise if event has been sent successfully
   */
  @Cordova()
  setUserProperty(name: string, value: string): Promise<any> {
    return;
  }

  /**
   * Clear all notifications
   *
   * @returns {Promise<string>} Returns a Promise empty or error
   */
  @Cordova()
  clearAllNotifications(): Promise<any> {
    return;
  }

  /**
   * On Dynamic Link
   *
   * @returns {Promise<string>} Returns a Promise empty or error
   */
  @Cordova()
  onDynamicLink(): Promise<any> {
    return;
  }

  /**
   * Create Dynamic Link
   *
   * @returns {Promise<string>} Returns a Promise empty or error
   */
  @Cordova()
  createDynamicLink(params: any): Promise<any> {
    return;
  }

  /**
   * Get dynamic link
   *
   * @returns {Observable<any>} returns an object with data from the notification
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 2
  })
  getDynamicLink(): Observable<NotificationData> {
    return;
  }

  /**
   * Watch for incoming notifications
   *
   * @returns {Observable<any>} returns an object with data from the notification
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 2
  })
  onNotification(): Observable<NotificationData> {
    return;
  }
}
