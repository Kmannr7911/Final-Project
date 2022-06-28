import React from "react";
import { createComic, getComics, updateComic, deleteComic } from "../API";
import DVD from './DVD';


export default class DVD extends React.Component {
    constructor(props){
     super(props);
     this.comic=props.comic
    }
     

    
     render() {
         console.log(this.DVD)
         return (
             <>
             <p>
             {this.DVD.title}
         </p>
                     <div className="button-container" 
                     onClick={() => this.deleteDVD({ id: this.state.id})}>
                         <button type="Delete"
                         >delete</button>
                         </div>    
                         </>
         );
      }
 
 }