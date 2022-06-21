import React from "react";
import { createComic, getComics, updateComic, deleteComic } from "../API";
import DVD from './DVD';

render() {
    return (
        <div>
        <form>
            <input
                type='text'
                placeholder='title'
                onChange={(e) => this.setState({ newTitle: e.target.value })}
                value={ this.state.newTitle }>
            </input>
      
        <button type='update'
            onClick={() => this.createnewform({ title: this.state.newTitle})}>
            update
        </button>
        <div className = "renewal-list">
            {this.state.DVD.map((renewalDVD) => {
                return (
                    <DVD DVD = {id}/>
                )

            
            
            })}              
        </div>
        </form>
        
        </div>
    );
}
