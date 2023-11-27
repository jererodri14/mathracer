const USERS_URL = "http://192.168.1.2:5000/users"; //cambiar por la ip de la pc que corre el backend

export const putUserAvatar = async (userName, avatarId) => {
    try {
        const response = await fetch(`${USERS_URL}/avatar/${userName}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ avatares_id: avatarId })
        });
        return await response.json();
    } catch (error) {
        console.log('Este es el error: ', error);
        throw new Error('Error al inicar sesion.')
    }
}

export const postUser = async (userName, password, email) => {
    try {
        const response = await fetch(`${USERS_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombreUsuario: userName, contraseña: password, correo: email })
        });
        return await response.json();
    } catch (error) {
        console.log('Este es el error: ', error);
        throw new Error('Error al inicar sesion.')
    }
}