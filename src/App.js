import React from 'react';
import ContextSample from './ContextSample';
import Counter from "./Counter";


const App = () => {
    return <Counter />;
}





/* useEffect
function App() {
  const [visible, setVisible] = useState(false);

  return (
      <div>
        <button onClick={() => {setVisible(!visible);}}>

          {visible ? '숨기기' : '보이기'}
        </button>
      <br />
        {visible && <Info />}
      </div>
  );
}
 */

export default App;
