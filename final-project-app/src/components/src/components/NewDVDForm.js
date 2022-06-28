import React from "react";
import { createComic, getComics, updateComic, deleteComic } from "../API";
import DVD from './DVD';


render() 
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
 