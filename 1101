import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableHighlight, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List, DataTable, Checkbox, Dialog, Portal } from 'react-native-paper'

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
    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
    <List.Accordion>
      <DataTable style = {{backgroundColor: 'white'}}>
      <DataTable.Row>
      <DataTable.Cell>시장</DataTable.Cell>
      <DataTable.Cell>진우</DataTable.Cell>

    </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell>도시 등급</DataTable.Cell>
      <DataTable.Cell>소도시</DataTable.Cell>

    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>보유자원</DataTable.Cell>
      <DataTable.Cell>73502</DataTable.Cell>

    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>인구수</DataTable.Cell>
      <DataTable.Cell>3502</DataTable.Cell>

    </DataTable.Row>

      </DataTable>
    </List.Accordion>
  </View>
  );
}

function AntScreen() {
  const [checked, setChecked] = React.useState(false); 

  const [visible, setVisible] = React.useState(false);

  const showDialog = () =>
  {
    <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
    </Portal>
  }
  const hideDialog = () => setVisible(false);

  return (
    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
      <List.Accordion>
        <DataTable style = {{backgroundColor: 'white'}}>
          <DataTable.Row onPress = {showDialog}>
          <Image source = {require('./assets/c625dcdf7f1fb4d6.png')}/>
            <DataTable.Cell>  일꾼개미</DataTable.Cell>
            <DataTable.Cell numeric>20자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <Image source = {require('./assets/c625dcdf7f1fb4d6.png')} />
            <DataTable.Cell>  감독관개미</DataTable.Cell>
            <DataTable.Cell numeric>40자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <Image source = {require('./assets/c625dcdf7f1fb4d6.png')}/>
            <DataTable.Cell>  회사원개미</DataTable.Cell>
            <DataTable.Cell numeric>80자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <Image source = {require('./assets/c625dcdf7f1fb4d6.png')}/>
            <DataTable.Cell>  회장개미</DataTable.Cell>
            <DataTable.Cell numeric>200자원</DataTable.Cell>
          </DataTable.Row>

        </DataTable>
      </List.Accordion>
    </View>
  );
}

function BuildingScreen() {
  return (
    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
      <List.Accordion>
        <DataTable style = {{backgroundColor: 'white'}}>
          <DataTable.Row>
          <Image source = {require('./assets/07be15af8c4cd374.png')}/>
            <DataTable.Cell>  벽돌집</DataTable.Cell>
            <DataTable.Cell numeric>20자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <Image source = {require('./assets/07be15af8c4cd374.png')} />
            <DataTable.Cell>  아파트</DataTable.Cell>
            <DataTable.Cell numeric>40자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <Image source = {require('./assets/07be15af8c4cd374.png')} />
            <DataTable.Cell>  개미 회사</DataTable.Cell>
            <DataTable.Cell numeric>80자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <Image source = {require('./assets/07be15af8c4cd374.png')} />
            <DataTable.Cell>  개미 호텔</DataTable.Cell>
            <DataTable.Cell numeric>200자원</DataTable.Cell>
          </DataTable.Row>

        </DataTable>
      </List.Accordion>
    </View>
  );
}

function MapScreen() {
  return (
    // <View style = {{flex: 1, justifyContent: 'flex-end'}}>
    //   <List.Accordion>
    //     <View style = {{backgroundColor: 'green'}}>
    //       <View style = {{width: 100}}>
    //         <Button title = 'store' style = {{justifyContent: 'flex-start'}} />
    //         <Button title = 'store' style = {{justifyContent: 'flex-start'}} />
    //         <Button title = 'store' style = {{justifyContent: 'flex-start'}} />
    //       </View>
    //     </View>
    //   </List.Accordion>
    // </View>

    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
      <List.Accordion>
      <DataTable style = {{backgroundColor: 'red'}}>


        <Button title = 'store' />
        <Button title = '업적' />
        <Button title = '수집품' />
        <Button title = '확장' />

 
      </DataTable>
    </List.Accordion>
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
