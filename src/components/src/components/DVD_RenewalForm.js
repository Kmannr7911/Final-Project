import React from "react";
import { createComic, getComics, updateComic, deleteComic } from "../API";
import DVD from './DVD';
import React from "react";
import { createDVD, getDVD, updateDVD, deleteDVD } from "../../API";
import DVD from "./DVD";

export default class DVDList extends React.Component {
    state = {
        DVD: [ ],
        newTitle: ''
    };

    componentDidMount() {
        this.fetchDVD();
    }

    fetchComics = async () => {
        const DVD = await getDVD();
        this.setState({ DVD });
    };

    createDVD = async(DVD) => {
        await createDVD(DVD);
        this.fetchDVDs();
    }

    updateComic = async(DVD) => {
        console.log('update', DVD);
        await updateDVD(DVD);
        this.fetchDVD();
    }

    deleteDVD = async(id) => {
        await deleteDVD(id)
        this.fetchDVD();
    }


    render() {
        return (
            <div>
            <h1>DVDs</h1>
            <form>
                <input
                    type='text'
                    placeholder='title'
                    onChange={(e) => this.setState({ newTitle: e.target.value })}
                    value={ this.state.newTitle }>
                </input>
          
            <button type='update'
                onClick={() => this.createDVD({ title: this.state.newTitle})}>
                update
            </button>
            <div className = "DVD-list">
                {this.state.DVD.map((DVD) => {
                    return (
                        <DVD DVD = {DVD}/>
                    )

                
                
                })}              
            </div>
            <button type='delete'
                onClick={() => this.createDVD({ title: this.state.newTitle})}>
                delete
            </button>
            </form>
            </div>
        );
    }
}