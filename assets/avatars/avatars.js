const avatarImages = [
    require('../avatars/1.png'),
    require('../avatars/2.png'),
    require('../avatars/3.png'),
    require('../avatars/4.png'),
    require('../avatars/5.png'),
    require('../avatars/6.png'),
    require('../avatars/7.png'),
    require('../avatars/8.png'),
    require('../avatars/9.png'),
    require('../avatars/10.png'),
    require('../avatars/11.png'),
    require('../avatars/12.png'),
    require('../avatars/13.png'),
    require('../avatars/14.png'),
    require('../avatars/15.png'),
];

export const getAvatar = (index) => {
    return avatarImages[index];
};

export const getAvatarLenght = () => {
    return avatarImages.length;
};

export const getAllAvatars = () => {
    return avatarImages;
};