import logo from './logo.svg';
import './App.css';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <View>
            <Table />
         </View>
      </header>
    </div>
  );
}

export default App;
