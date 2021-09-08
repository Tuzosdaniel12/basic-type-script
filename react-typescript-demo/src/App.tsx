import Greet from './components/Greet';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Greet name={"Daniel"} age={29} isSleepy={false}/>
    </div>
  );
}

export default App;
