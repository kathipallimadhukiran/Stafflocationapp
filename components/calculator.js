import {
    View,Text,StyleSheet
} from "react-native"
import {
    Button
    } from "react-native-elements"
const  Calculator=()=>{
    <>
    <View style={{width:200,height:200,backgroundColor:"pink",}}>
        <Text >Calculator</Text>
        <Button title="1"  />
        <Button title="2"  />
        <Button title="3" />

    </View>
    </>        
}



export default Calculator