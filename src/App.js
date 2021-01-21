
import { Provider } from 'react-redux';
import './App.css';
import TopBar from './Components/menuComponent/TopBar';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <TopBar/>
     
    </div>
    </Provider>
  );
}

export default App;
