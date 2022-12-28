import { Provider } from 'react-redux'
import Navigation from './src/navigation';
import initializeStore from './src/store'

const store = initializeStore()

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
