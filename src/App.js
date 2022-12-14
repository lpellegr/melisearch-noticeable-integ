import logo from './logo.svg';
import './App.css';
import NotificationPopup from './NotificationPopup.js';
import Modal from './Modal.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Modal />
        <NotificationPopup />
        
      </header>
      
    </div>
  );
}

export default App;
