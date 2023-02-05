import { Provider } from 'react-redux'
import Toast from 'react-native-toast-message';
import { useEffect } from 'react'
import * as Notifications from 'expo-notifications';

import { askNotification, handleNotification } from './src/utilities/notification';
import Navigation from './src/navigation';
import initializeStore from './src/store'

const store = initializeStore()

export default function App() {

  useEffect(() => {
    askNotification()

    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, [])
  
  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  );
}
