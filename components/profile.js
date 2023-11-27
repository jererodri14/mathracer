import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Modal, View, Text } from "react-native";
import CustomButton from "./customButton";
import { useSession } from '../session/sessionContext';
import { putUserAvatar } from '../endpoints/user';
import { getAvatar, getAvatarLenght, getAllAvatars } from '../assets/avatars/avatars'

export default function Profile({ navigation }) {
    const { userData } = useSession();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [imageToSave, setImageToSave] = useState(getAvatar(userData.avatares_id - 1));

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const handleImagePress = (index) => {
        setSelectedImageIndex(index === selectedImageIndex ? null : index);
    };

    const getAvatarSelected = (index) => {
        setImageToSave(getAvatar(index));
    };


    return (
        <ImageBackground source={require('../assets/images/background.png')} style={{ width: '100%', height: '100%', alignItems: 'center', gap: 10 }}>
            <View style={styles.top_view}>
                <CustomButton iconSrc={require('../assets/icons/back-arrow.png')} viewStyle={styles.option} onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.container}>
                <CustomButton iconSrc={imageToSave} iconStyle={{ width: '100%', height: '100%', marginBottom: 10 }} viewStyle={styles.circleButton} titleStyle={styles.title} onPress={() => openModal()} />
                <AvatarsModal isVisible={modalVisible} closeModal={closeModal} handleImagePress={handleImagePress} selectedImageIndex={selectedImageIndex}
                    getAvatarSelected={getAvatarSelected} />
            </View>
            <View style={styles.title_view}>
                <Text style={styles.title}>{userData.nombreUsuario}</Text>
            </View>
            <View style={styles.title_view}>
                <Text style={styles.title}>Puntos totales</Text>
                <Text style={styles.title}>{userData.puntos}</Text>
            </View>
            <View style={styles.title_view}>
                <CustomButton iconSrc={require('../assets/icons/mail.png')} viewStyle={styles.mail} />
            </View>
        </ImageBackground>
    );
}

const AvatarsModal = ({ isVisible, closeModal, handleImagePress, selectedImageIndex, getAvatarSelected }) => {
    const imagesPerRow = 3;
    const rows = Math.ceil(getAvatarLenght() / imagesPerRow);
    const { userData, setData } = useSession();

    const handleSaveImage = async (index) => {
        await putUserAvatar(userData.nombreUsuario, index + 1);
        setData({ ...userData, avatares_id: index + 1 });
        getAvatarSelected(index);
        closeModal();
    };


    const renderImageRow = (rowIndex) => {
        const startIndex = rowIndex * imagesPerRow;
        const endIndex = Math.min(startIndex + imagesPerRow, getAvatarLenght());

        return (
            <View key={rowIndex} style={styles.modalDisplay}>
                {getAllAvatars().slice(startIndex, endIndex).map((image, index) => (
                    <CustomButton
                        key={startIndex + index}
                        iconSrc={image}
                        onPress={() => handleImagePress(startIndex + index)}
                        viewStyle={[styles.image, selectedImageIndex === startIndex + index ? styles.buttonPressed : null]}
                    />
                ))}
            </View>
        );
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.innerModal}>
                    <Text style={styles.title}>Avatares</Text>
                    {[...Array(rows)].map((_, rowIndex) => renderImageRow(rowIndex))}
                    <View style={styles.modalDisplay}>
                        <CustomButton title="Guardar" onPress={() => handleSaveImage(selectedImageIndex)} viewStyle={styles.modalButtons} titleStyle={styles.titleButtons} />
                        <CustomButton title="Cerrar" onPress={() => closeModal()} viewStyle={styles.modalButtons} titleStyle={styles.titleButtons} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'coiny-regular',
    },
    title_view: {
        justifyContent: 'center',
        marginVertical: 50,
        paddingBottom: 10
    },
    top_view: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        padding: 10,
        justifyContent: 'space-between',
    },
    option: {
        height: 50,
        backgroundColor: '#669cc4',
        borderRadius: 10,
        fontFamily: 'coiny-regular',
        elevation: 5,
    },
    circleButton: {
        backgroundColor: 'white',
        borderRadius: 100,
        fontFamily: 'coiny-regular',
        elevation: 5,
        height: 200,
        width: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerModal: {
        width: 350,
        height: 620,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalDisplay: {
        flexDirection: 'row',
        margin: 7,
        justifyContent: 'center'
    },
    mail: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 100,
        width: 100,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
        margin: 7,
    },
    modalButtons: {
        height: 50,
        width: 100,
        margin: 5,
        borderRadius: 10
    },
    titleButtons: {
        color: 'black',
        fontFamily: 'coiny-regular',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    buttonPressed: {
        borderColor: 'blue',
        borderWidth: 10,
        borderRadius: 100
    },
});
