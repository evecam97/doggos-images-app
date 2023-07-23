import { useState } from "react"
import { getGifs } from "../helpers/getGifs";

// function to add dog picture
export const AddImage = () => {

    const [gif, setGif] = useState("");

    const getImages = async () => {
        const newGif = await getGifs();
        return newGif;
    }


    const addButton = async () => {
        const gifValue = await getImages();
        setGif(gifValue);
        console.log("apretando boton: " + gifValue);
    }

    return (
        <>
            <button onClick={addButton}>Touch me!</button>

            <div className="card-grid">
                {gif.code === 200 ? (
                    <img src={gif.message} alt="" />
                ) : (
                    <p>{gif.message}</p>
                )}
            </div>
        </>
    );

}