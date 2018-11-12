import  React  from  'react';
import "./DisplayS.css";

const  DisplaySimpson = ({ simpson }) => {
    return (
        <div  className="DisplaySimpson">
            <img  className="ImageSimpson" src={simpson.image}  alt="voilà-simpson"  />
            <ul>
                <li> character : {simpson.character}</li>
                <li> quote: {simpson.quote}</li>
                
            </ul>
        </div>
    );
};

export  default  DisplaySimpson;