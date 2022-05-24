import { useCallback, useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.scss';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevState => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(prevState => !prevState);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
