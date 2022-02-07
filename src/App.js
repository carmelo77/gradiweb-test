import { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/** */
import HeaderComponent from './components/HeaderComponent';
import ContentComponent from './views/Content';

function App() {

  return (
    <div>

      <HeaderComponent />
      
      <ContentComponent />
      
    </div>
  );
}

export default App;
