import { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.scss';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph(prevState => !prevState);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
