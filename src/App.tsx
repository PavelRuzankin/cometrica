import React from 'react';

import Header from "./components/Header"
import Body from './components/Body';
import Modal from './Modal';

const App: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Header/>
      <Body/>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
