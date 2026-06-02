import Body from './Components/Body'
import appstore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
