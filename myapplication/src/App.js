import logo from './logo.svg';
import './App.css';

function App() {
  function showMessageAndroid(){
    window.Android.messageClick('Hello Android');
    console.log('Chamando function Android');
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Communication react and Android.
        </p>
        <button onClick={showMessageAndroid}> Click Me! o/</button>
      </header>
    </div>
  );
}


export default App;
