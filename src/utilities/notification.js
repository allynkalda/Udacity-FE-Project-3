import { Keyboard } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

export const onNotificationSubmit = () => {
  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: 'This is a notification',
      body: 'This is the body',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue"
    },
    trigger: {
      seconds: 5,
    },
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  );
};

export const handleNotification = () => {
  console.warn('Remember to contact your saved customer!');
};

export const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === 'granted')
    console.log('Notification permissions granted.');
};

