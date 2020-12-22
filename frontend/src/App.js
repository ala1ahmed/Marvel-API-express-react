import { getCharacters } from "./actions/marvel";
import {useState,useEffect} from'react';
import Hero from "./components/Hero";

function App() {

  const [pageNumber, setpageNumber] = useState(1);
  const [marvelCharacters, setmarvelCharacters] = useState([])
  

  const nextPage = async() =>{
    setpageNumber(pageNumber+1);
    const data=await getCharacters(pageNumber);
    setmarvelCharacters(data);
  }

  const previousPage = async()=> {
    if(pageNumber>1)
      setpageNumber(pageNumber-1);
      const data=await getCharacters(pageNumber);
    setmarvelCharacters(data);
  }

  return (
  <div className="App">
    <div className="Heros">
      {marvelCharacters.map((hero,index)=>(<Hero key={index} name={hero.name} thumbnail={hero.thumbnail} description={hero.description} />))}

    </div>
    {pageNumber}
    <button onClick={()=>previousPage()}>Previous</button>
    <button onClick={()=>nextPage()}>Next</button>
  </div>);
}

export default App;
