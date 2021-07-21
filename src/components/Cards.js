import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
function Cards() {
    return (
        <div className="cards">
            <h1>Modeled in blender</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem
                        src={process.env.PUBLIC_URL + '/images/pyramids.png'}
                        text="not really yet just filler"
                        label="Blender Model"
                        path="/model"/>
                        <CardItem
                        src={process.env.PUBLIC_URL + '/images/pyramids.png'}
                        text="not really yet just filler"
                        label="Blender Model"
                        path="/model"/>
                        <CardItem
                        src={process.env.PUBLIC_URL + '/images/pyramids.png'}
                        text="not really yet just filler"
                        label="Blender Model"
                        path="/model"/>
                    </ul>
            </div>
        </div>
            
            
        </div>
    )
}

export default Cards
