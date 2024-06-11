import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigation/AppNavigator';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
