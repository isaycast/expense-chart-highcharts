import './App.css';
import { Barchar } from './components/Barchar';
import { CardFooter} from './components/CardFooter'
import { CardTop} from './components/Cardtop'

function App() {
  return (

    <div className="App">
      <div className="card-chart-container" >
        <div className="card-chart-container2">
          <CardTop/>
          <Barchar/>
          <CardFooter/>
        </div>
        
     </div>
    </div>
  );
}

export default App;
