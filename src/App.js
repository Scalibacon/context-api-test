import Grandpa from './components/Grandpa';

import CountContextProvider from './contexts/CountContext';

function App() {
  return (
    <div className="App">
      <CountContextProvider>
        <Grandpa/>
      </CountContextProvider>     
    </div>
  );
}

export default App;
