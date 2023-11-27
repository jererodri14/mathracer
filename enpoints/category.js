

const LEVELS_URL = "http://192.168.0.3:5000/levels";

export const getUsersLevels = async (userName) => {
    try {
        const response = await fetch(`${LEVELS_URL}/${userName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Este es el error: ', error);
        throw new Error('Error al obtener los niveles.')
    }
}


