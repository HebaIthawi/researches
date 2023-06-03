//import logo from './logo.svg';
import './App.css';
import SideNav from './Components/SideNav/SideNav';

function App() {
  return (
    <div className="App" >
      <div class='bg-gradient-to-r from-green-400 to-blue-500'>
        <SideNav/>
        <header className="App-header">
          <p
            className= "text-3xl font-bold ">
              .. Stay Focused ..
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
