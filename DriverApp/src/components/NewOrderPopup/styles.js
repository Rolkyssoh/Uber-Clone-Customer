import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        position:'absolute',
        bottom:0,
        width:'100%',
        padding:20,
        height:'100%',
        justifyContent:'space-between',
        backgroundColor:'#00000099'
    },
    popupContainer:{
        backgroundColor:'#000',
        borderRadius:10,
        height:250,
        alignItems:'center',
        justifyContent:'space-around'
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    uberType:{
        color:'lightgrey',
        fontSize:20,
        marginHorizontal:10
    },
    userBg:{
        backgroundColor:'#008bff',
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:60
    },
    minutes:{
        color:'lightgrey',
        fontSize:36,
    },
    distance:{
        color:'lightgrey',
        fontSize:26,
    },

    declineButton: {
        backgroundColor:'#000',
        padding:20,
        borderRadius:50,
        width:100,
        alignItems:'cen'
    },
    declineText: {
        color:'#fff',
        fontWeight:'bold'
    },
})

export default styles