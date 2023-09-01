import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20
},
image:{
    height:50,
    width:50,
    resizeMode:'contain'
},
middleContainer: {
    flex:1,
    marginHorizontal:10,
    justifyContent:'space-between',
},
type:{
    color:'#000',
    fontWeight:'bold',
    fontSize:18,
    marginBottom:5
},
time:{
    color:'#5d5d5d'
},
rightContainer: {
    width:100,
    justifyContent:'flex-end',
    flexDirection:'row'
},
price:{
    color:'#000',
    fontWeight:'bold',
    fontSize:18,
    marginLeft:5
}
});

export default styles