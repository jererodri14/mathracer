const LOGIN_URL = "http://192.168.0.7:5000/login"; //cambiar por la ip de la pc que corre el backend

export const getLogin = async (userName, password) => {
    try {
        const response = await fetch(`${LOGIN_URL}?nombreUsuario=${userName}&password=${password}`);
        if (response.status !== 200) {
            return null;
        }
        return await response.json();
    } catch (error) {
        console.log('Este es el error: ', error);
        throw new Error('Error al inicar sesion.')
    }
}