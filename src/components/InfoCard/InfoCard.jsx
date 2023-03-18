import React from 'react'
import Modal from "react-native-modal"
import { View,Text } from 'react-native'
import styles from './InfoCard.style';
const InfoCard=({visible,onClose,user})=>{
    return(
        <Modal 
        style={styles.modal}
        isVisible={visible}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        onSwipeComplete={onClose}
        swipeDirection="down"
        backdropOpacity={0.3}
        >
            <View style={styles.container}>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.fullname}>{user.first_name} {user.last_name}</Text>
            </View>
        </Modal>
    )
}

export default InfoCard