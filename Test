import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableHighlight, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List, DataTable } from 'react-native-paper'

function HomeScreen({navigation})
{
  const MoveToMain = () =>
  {
    navigation.navigate("Main");
  }

return(
  <View style = {styles.safeAreaContainer}>
    <Button onPress = {MoveToMain} title = "TAP TO START"/>
  </View>
);
}

function MainScreen()
{
  const pressSetting = () =>
  {
    alert("환경설정");
  }

return(
  <View style = {styles.container}>
    <View style = {styles.setting}>
      <Button onPress = {pressSetting} title = "환경설정"/>
    </View>
    <Tab.Navigator>
      <Tab.Screen name= "도시" component={CityScreen} />
      <Tab.Screen name= "개미" component={AntScreen} />
      <Tab.Screen name= "건물" component={BuildingScreen} />
      <Tab.Screen name= "지도" component={MapScreen} />
    </Tab.Navigator>  
  </View>
);
}

function CityScreen() {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const pressCity = () =>
  {
    alert("아파트");
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button onPress = {pressCity} title = "도시"/>
    </View>
  );
}

function AntScreen() {
  return (
    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
      <List.Accordion>
        <DataTable style = {{backgroundColor: 'green'}}>
          <Button title = 'store' />
        </DataTable>
      </List.Accordion>
    </View>
  );
}

function BuildingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>건물</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View>
      <Text>지도</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component = {HomeScreen}></Stack.Screen>
          <Stack.Screen name = "Main" component = {MainScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeAreaContainer : 
  {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS == 'android' ? 24 : 0,
    justifyContent: 'center', 
    alignItems: 'center'
  },  

  text1: 
  {
    fontSize: 24,
    backgroundColor: 'orange',
  }, 

  touchable: 
  {
    flex: 1,

  }, 

  setting: 
  {
    alignItems: 'flex-end'
  }, 

  city: 
  {
    flexDirection:'row',
    alignItems: 'flex-start'
  }
});
