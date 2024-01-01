import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f5f8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    counterContainer:{
        alignItems:'center',
    },
    mainText:{
        fontSize:27,
        textAlign:'center',
    },
    spanText:{
        color:'#c20a72'
    },
    paraText:{
        fontSize:20,
        marginTop:5,
        textAlign:'center',
    },
    button:{
        backgroundColor:'#007bff',
        height:20,
        width:50,
        marginTop:10,
        borderRadius:10,
    },
    buttonText:{
        color:"#ffffff",
        textAlign:'center',
    }
});
export default styles;