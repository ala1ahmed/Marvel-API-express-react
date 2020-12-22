//import { getCharacters } from "./actions/marvel";
import {useState,useEffect} from'react';

function App() {

  const [pageNumber, setpageNumber] = useState(1);

  const nextPage = () =>{
    setpageNumber(pageNumber+1);
  }

  const previousPage = ()=> {
    if(pageNumber>1)
      setpageNumber(pageNumber-1);
  }

  return (
  <div className="App">
    {pageNumber}
    <button onClick={()=>previousPage()}>Previous</button>
    <button onClick={()=>nextPage()}>Next</button>
  </div>);
}

export default App;
