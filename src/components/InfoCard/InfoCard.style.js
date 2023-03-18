import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:Dimensions.get("window").height/11,
        padding:15
    },
    modal:{
        justifyContent:"flex-end",
        margin:0,
    },
    username:{
        fontWeight:"bold",
        fontSize:18,
        color:"black"
    },
    fullname:{
        fontSize:16
    }
})