import './App.css';
import CardColumn from './components/CardColumn/CardColumn'

function App() {
  return (
    <div className="App">
      <CardColumn value="Good things" cardColor="#bb86fc"/>
      <CardColumn value="Bad things" cardColor="#ff7597"/>
      <CardColumn value="Action items" cardColor="#02ddc5"/>
    </div>
  );
}

export default App;
