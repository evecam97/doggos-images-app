
//Create the connection with the api and get a dog picture
export const getGifs = async( ) => {

    const urlApi = "https://dog.ceo/api/breeds/image/random"
    const resp = await fetch( urlApi );
    const { message,status } = await resp.json();
    if(status != "success"){
        return {code:400,message:"There is an error with the request."};
    }else{
        return {code:200, message:message};
    }
}