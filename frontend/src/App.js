import { getCharacters } from "./actions/marvel";
import {useState,useEffect} from'react';
import Hero from "./components/Hero";
import './App.css';

function App() {

  const [pageNumber, setpageNumber] = useState(1);
  const [marvelCharacters, setmarvelCharacters] = useState([])

  useEffect(()=>{
    getCharacters(pageNumber).then((herosData)=>{
      setmarvelCharacters(herosData)
    })
  },[pageNumber]);
  

  const nextPage = async() =>{
    setpageNumber(pageNumber+1);
  }

  const previousPage = async()=> {
    if(pageNumber>1)
      setpageNumber(pageNumber-1);
  }

  return (
  <div className="App">
    <div className="heros">
      {marvelCharacters.map((hero,index)=>(<Hero key={hero.id} name={hero.name} thumbnail={hero.thumbnail} description={hero.description} />))}

    </div>
    {pageNumber}
    <button onClick={()=>previousPage()}>Previous</button>
    <button onClick={()=>nextPage()}>Next</button>
  </div>);
}

export default App;
