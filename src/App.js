
import { Provider } from 'react-redux';
import './App.css';
import TopBar from './Components/menuComponent/TopBar';
import {store,persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="App">
     <TopBar/>
     
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
