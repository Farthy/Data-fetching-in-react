import './App.css';
import Axios from './components/Axios';
import Fetch from './components/Fetch';
import ReactQuery from './components/ReactQuery';

function App() {
  return (
    <div className="App">
     <Fetch/>
     <Axios/>
     <ReactQuery/>
    </div>
  );
}

export default App;
