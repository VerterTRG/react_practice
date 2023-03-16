import { HomeWork2 } from "./hw2"
import { HomeWork1 } from "./hw1"
import React, { useState } from "react"

const HWS = []
HWS.push({ 'id': 1, 'component': HomeWork1, 'description': 'Home work 1' })
HWS.push({ 'id': 2, 'component': HomeWork2, 'description': 'Home work 2' })

const Button = ({ hws, handleClick }) => {
    return hws.map((pos) =>
        <button key={pos.id} onClick={() => handleClick(pos.id)}>{pos.description}</button>
    )
}

const View = ({ id }) => {
    if (id === 0) 
    return <div><h2>Select home work</h2><p>This is my first React application</p></div>

    for (let i = 0; i < HWS.length; i++) {
        if (id === HWS[i].id) {
            return HWS[i].component()
        }
    }
    return <h2>Home work not found</h2>
}


const CommonHomeWork = ({ numberOfHomeWork }) => {

    const [id, setView] = useState(0)
    // const view = (id) => {
    //     console.log("You clicked " + id)
    //     setView(id)
    // }

    return (
        <div>
            <Button hws={HWS} handleClick={setView} />
            <View id={id} />
        </div>
    )
}

export { CommonHomeWork }