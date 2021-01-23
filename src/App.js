import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Text_time from './Text_time';
import Api_fetch from './Api_fetch';




function App() {

  return (
    <div className="App">
      <h1>Essay Writing</h1>

      <Api_fetch />
      <Text_time />




    </div>
  );
}

export default App;
