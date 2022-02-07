import { Provider } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/** */
import HeaderComponent from './components/HeaderComponent';
import ContentComponent from './views/Content';
import { store } from './store/store';

function App() {

  return (
    <Provider store={ store }>

      <HeaderComponent />
      
      <ContentComponent />
      
    </Provider>
  );
}

export default App;
