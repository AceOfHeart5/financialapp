import { useState } from 'react'
import './App.css';

import CustomerList from './components/CustomerList';
import CustomerAdd from './components/CustomerAdd';

function App() {
  const [renderCount, setRenderCount] = useState(0)

  const rerender = () => {
    setRenderCount(renderCount + 1)
  }

  console.log(renderCount)

  return (
    <div className="App">
      <h1>I'm The App!</h1>
      <CustomerAdd rerender={rerender}></CustomerAdd>
      <CustomerList></CustomerList>
    </div>
  );
}

export default App;
