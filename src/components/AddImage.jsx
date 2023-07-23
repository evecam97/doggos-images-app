import { useState } from "react"
import { getGifs } from "../helpers/getGifs";

// function to add dog picture
export const AddImage = () => {

    const [gif, setGif] = useState("");
    const [counter, setCounter] = useState(0);
    const handleAdd = () => setCounter(counter + 1)

    const getImages = async () => {
        const newGif = await getGifs();
        return newGif;
    }


    const addButton = async () => {
        const gifValue = await getImages();
        setGif(gifValue);
        handleAdd()
    }

    return (
        <>
            <button onClick={addButton}>Touch me!</button>
            <div className="card-grid">
                {gif.code === 200 ? (
                    <div>
                        <img src={gif.message} alt="" />
                        <p>Doggo: {counter}</p>
                    </div>
                ) : (
                    <p>{gif.message}</p>
                )}
                
            </div>
        </>
    );

}