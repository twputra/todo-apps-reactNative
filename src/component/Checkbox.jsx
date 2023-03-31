import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

// export default function Form() {
//   return (
//     <View style={style.container}>
//       <Text style={style.header}>Sign In</Text>

//       <Text style={style.textStyle}>Email</Text>
//       <TextInput
//         style={style.textInput}
        
//       />

//       <Text style={style.textStyle}>Password</Text>
//       <TextInput secureTextEntry={true} style={style.textInput} />

//       <TouchableOpacity
//         style={style.button}
//         onPress={() => alert("Mau ngapain lo!")}
//       >
//         <Text style={style.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     display: "flex",
//     padding: 20,
//   },
//   header: {
//     color: "black",
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 50,
//   },
//   button: {
//     backgroundColor: "black",
//     height: 45,
//     width: "100%",
//     borderRadius: 10,
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 20,
//     textAlign: "center",
//   },
//   textStyle: {
//     fontSize: 16,
//     fontWeight: "semibold",
//     marginBottom: 5,
//   },
//   textInput: {
//     height: 45,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//     padding: 10,
//     color: "black",
//     border: "black",
//   },
// });

export default function Form() {
  return (
    <View style={styles.container}>

      <Image source={require('../../assets/Women.png')}
      style={{ width:200, height:300}}
      />
      {/* <Image source={require('./assets/ilustration/textWays.png')}
      style={{ width:280, height:50}}
      /> */}
      <Text style={styles.text}
        >Write your activity and finish your activity. Fast, Simple and Easy to Use</Text>
      <TouchableOpacity>
            <Text style = {styles.button1}>
              Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style = {styles.button2}>
              Register
            </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:100
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#FF5555',
    padding: 10,
    width:350,
    marginBottom:10,
    textAlign:'center',
    color: 'white'

  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#B0B0B0',
    padding: 10,
    width:350,
    textAlign:'center',
    color: 'white'
  },
  text:{
    marginBottom:40,
    textAlign:'center',
    marginTop:20,
  }
});