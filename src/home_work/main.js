import { HomeWork2 } from "./hw2"
import { HomeWork1 } from "./hw1"

const CommonHomeWork = ({ numberOfHomeWork }) => {

    if (numberOfHomeWork === 1) {
        return <HomeWork1 />
    }

    if (numberOfHomeWork === 2) {
        return <HomeWork2 />
    }

    return <h2>Home work not found</h2>
}

export { CommonHomeWork }