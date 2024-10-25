import {Fragment} from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  
  return (
    // <Fragment></Fragment> => temporary wrapping element 
    // (Header & main are 2 returned values, can only return 1)
    <Fragment> 
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
