import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomContainer: {
        height:100,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15
    },
    bottomText: {
       color:'#000',
       fontSize:22,
       color:'#4a4a4a'
    },
    roundButton: {
        position:'absolute',
        backgroundColor:'#fff',
        padding:5,
        borderRadius:25
    },
    goButton: {
        position:'absolute',
        backgroundColor:'#1495ff',
        width:75,
        height:75,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        bottom:110,
        left: Dimensions.get('window').width / 2 - 37
    },
    goText:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold'
    },
    balanceButton:{
        position:'absolute',
        backgroundColor:'#1c1c1c',
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        top:10,
        left: Dimensions.get('window').width / 2 - 50
    },
    balanceText:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
    }
})

export default styles