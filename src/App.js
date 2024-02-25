import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Table from './Table';
import Testcss from './Testcss';


function App() {
  useEffect(()=>{
    var arr=[1,2,3,40];
    let obj=arr.reduce((acc,curr)=>{
      {console.log(acc)}
      return (
    ({...acc,[curr]:curr}))},{})
    //console.log(obj);
  },[])

  useEffect(() => {
    setInterval(() => {
      console.log("run after 2 secs")
    }, 2000)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <Table/>
      <Testcss/>
    </div>
  );
}

export default App;
