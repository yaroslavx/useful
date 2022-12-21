import './App.css';
import ObjectState from './components/ObjectState/ObjectState';
import ArrayState from './components/arrayState/ArrayState';
import UseReducer from './components/useReducer/UseReducer';

function App() {
  return (
    <div >
      <UseReducer />
      <ObjectState />
      <ArrayState />
    </div>
  );
}

export default App;
