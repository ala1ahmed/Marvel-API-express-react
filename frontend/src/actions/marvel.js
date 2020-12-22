import api from '../utils/api';


export const getCharacters = async (pageNumber) => {

    try {

        const res = await api.get("/charachters",{
            params:{
                page:pageNumber
            }
        });

        return res.data.data.results;

        
    } catch (error) {
        console.log(error);
    }

}