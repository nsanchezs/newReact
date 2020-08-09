import React from "react";
import { Link, Route } from "wouter";
import './App.css'
import ListOfGif from "./components/ListOfGif";


export default function App() {
  /* const [keyword, setKeyword] = useState(['panda']) */
  return (
    <div className='App-header'>
      {/* <button onClick={() => setKeyword('peru')}>Cambiar</button> */}
      <h1>App</h1>
      <Link to="/gif/Peru">Link de Perú</Link>
      <Link to="/gif/Chile">Link de Chile</Link>
      <Link to="/gif/Colombia">Link de Colombia</Link>
      <Route
        component={ListOfGif}
        path="/gif/:keyword"
      />
      {/* <ListOfGif keyword={'programmin'} /> */}
    </div>
  );
}


