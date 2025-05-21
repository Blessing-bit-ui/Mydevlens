import { useState } from 'react';
import extensions from './assets/extensions.avif';
import css from './assets/css.png';
import speed from './assets/speed.jpg';
import json from './assets/json.png';
import tab from './assets/tab.jpg';
import view from './assets/view.png';
import mark from './assets/mark.jpg';
import grid from './assets/grid.png';
import palette from './assets/palette.png';
import link from './assets/link.png';
import dom from './assets/dom.jpg';
import console from './assets/console.png'
import devlens from './assets/devlens.png';

const ExtensionsList =[
    {
        name:"DevLens",
        use: "Quickly inspect page layouts and visualise elements boundaries",
        photoName: devlens,
        status:"active"
    },
    {
        name: "StlyeSpy",
        use:"Instantly analyse and copy Css from any webpage element",
        photoName: css,
        status:"active",
    },
    {
      name:"SpeedBoost",
      use:"Optimizes browser resource usage to accelerate page loading.",
      photoName: speed,
      status:"inactive"
    },
    {
        name:" JSONWizard",
        use:"Formats, validate and prettifies JSON responses in-browers",
        photoName: json,
        status:"active",
    },
    {
        name:" TabMaster Pro",
        use:"Organises browers tabs into groups and sessions",
        photoName: tab,
        status: "active",
    },
    {
        name:"View PortBuddy",
        use:"simulates various screen resolutions directly within the browser",
        photoName: view,
        status:"inactive"
    },
    {
        name:"Markup Notes",
        use:"Enables annotation and notes directly onto webpages for collaboratives debugging",
        photoName: mark,
        status:"active"
    },
    {
        name:"GridGuides",
        use:"Overlay customize grids and alignment guides to any webpage.",
        photoName:grid,
        status:"inactive"
    },
    {
      name:"Paletter Picker",
      use:"Instantly extracts color palette from webpages.",
      photoName:palette,
      status:"inactive" 
    },
    {
        name:"LinkerChecker",
        use:"Scans and highlights broken on any page",
        photoName:link,
        status:"active"
    },
    {
        name:"DOM Snapchat",
        use:"Capture and export Dom structures quickly",
        photoName: dom,
        status:"inactive"
    },
    {
        name:"Console Plus",
        use:"Enhance developer console with advance filter and logging",
        photoName: console,
        status:"active"
    }
]


   function ExtensList(){
    const [extensionss, setExtensionss] =useState(ExtensionsList)
    function handleRemove(index) {
      const updatedList = extensionss.filter((_,i)=>i !==index)
      setExtensionss(updatedList)
    }
      function handleAll(){
        setExtensionss(ExtensionsList)
      }
    
    return (
      <div class="flex items-center justify-center">
        <div class="flex flex-col md:grid md:grid-cols-4 gap-4 mt-2 md:mr-7 md:ml-7 md:w-full">
         <AllButtons handleAll={handleAll} />
          {extensionss.map((ext, index) => (
            <div key={index} class="w-[300px] bg-zinc-900 p-3 text-white border rounded-lg">
                <img src={ext.photoName}
                class="w-7"
                />
                <span>
                <h1>{ext.name}</h1>
              <p>{ext.use}</p>
              </span>
              <button onClick={()=>handleRemove(index)}class="bg-white text-red-600 text-[10px] p-1 border rounded-md">Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
}
   export default ExtensList;


function AllButtons({handleAll}){
    return(
        <div>
            <button onClick={handleAll}>All</button>
        </div>
    )
}