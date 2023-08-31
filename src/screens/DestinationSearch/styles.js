import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1
    },
    textInput:{
        padding:10,
        backgroundColor:'#eee',
        marginVertical:5,
        color:'#000',
        marginLeft:20
    },
    separator: {
        backgroundColor:'#dddddd',
        height:1
    },
    listView:{
        position:'absolute',
        top:110
    },
    autoCompletContainer: {
        position:'absolute',
        top:0,
        left:10,
        right:10
    },

    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5
    },
    iconContainer:{
        backgroundColor:'#a2a2a2',
        padding:5,
        borderRadius:50,
        marginRight:15,
    },
    locationText:{
        color:'#000'
    },

    circle: {
        width:5,
        height:5,
        backgroundColor:'black',
        position: 'absolute',
        top:20,
        left:15,
        borderRadius:5,
    },
    line: {
        width:1,
        height:50,
        backgroundColor:'#d2d2d2',
        position:'absolute',
        top:28,
        left:17,
    },
    square: {
        width:5,
        height:5,
        backgroundColor:'black',
        position:'absolute',
        top:80,
        left:15
    },
})

export default styles;