
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HomePage from './components/HomePage';
import './style.css';

function App() {
 

  return (
    <>
      <Provider store={store}>
        <HomePage />

      </Provider>
    </>
  )
}

export default App;
