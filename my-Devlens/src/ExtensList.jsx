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
return (
  <div>
    <Extensions/>
  </div>
);
   }
   export default ExtensList;

   function Extensions(props){
    return(
        <div>
        {ExtensionsList.map((extensions,index)=>(
            <div key={index}>
                <img src={extensions.photoName}/>
                <h1>{extensions.name}</h1>
            <p>{extensions.use}</p>
            </div>
        ))}
       
         </div>
    )
   }