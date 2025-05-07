import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const Notifications = () => {
    const navigation = useNavigation();
  
  const navigationfun=()=>{
    navigation.navigate("MainView");
  }
  return (
    <View>
      <ScrollView>
        {/* <Text> Notifications</Text> */}

        <View>
          <Text>NO MORE NOTIFICATIONS</Text>
        </View>
        <Button mode="contained" onPress={navigationfun} >go to main </Button>
      </ScrollView>
    </View>
  );
};

export default Notifications;
