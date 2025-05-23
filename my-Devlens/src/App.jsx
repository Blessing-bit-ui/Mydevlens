import "./App.css";
import { useState } from "react";
import dow from './assets/dow.png';
import ExtensList from './ExtensList';

function App() {
  return (
    <>
      <Header />
      <ExtensList />
    </>
  );
}
export default App;

function Header(){
  return(

    <div class="flex justify-between bg-zinc-900 w-[290px] md:w-11/12 mr-auto ml-auto mt-20 p-3 border rounded-lg">
      <span><h2 class="text-white text-[20px]">Extensions</h2></span><span><img src={dow} 
      alt='dow photo'
      class="w-7"/> 
      </span>
    
    </div>
  )
}
