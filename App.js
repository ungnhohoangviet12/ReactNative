import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/RootReducer';
const store = createStore(rootReducer)
export default function App() {
  return (
    //Ham cung cap ep react stater with redux
    <Provider store={store}>
      <Home />
    </Provider>
  );
}


