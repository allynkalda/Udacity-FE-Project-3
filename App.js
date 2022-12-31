import { Provider } from 'react-redux'
import Toast from 'react-native-toast-message';

import Navigation from './src/navigation';
import initializeStore from './src/store'

const store = initializeStore()

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  );
}
