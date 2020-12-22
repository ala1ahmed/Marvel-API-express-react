import api from '../utils/api';


export const getCharacters = (pageNumber) => {

    try {

        const res = axios.get("/charachters",{
            params:{
                page:pageNumber
            }
        });

        console.log(res);

        
    } catch (error) {
        console.log(error);
    }

}