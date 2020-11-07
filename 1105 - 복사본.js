import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableHighlight, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List, DataTable, Checkbox, Dialog, Portal, Paragraph, Modal, Provider } from 'react-native-paper'
import {PanGestureHandler} from 'react-native-gesture-handler';

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
  const [sideLength, setSideLength] = useState(100);
return(
  <View style = {styles.container}>
    <View style = {styles.setting}>
    <Button onPress = {pressSetting} title = "환경설정"/>
    </View>
    <View style={styles.wrap}>
      <PanGestureHandler
        onGestureEvent={(event) => {
          setSideLength(event.nativeEvent.translationY);
        }}>
        <View
          style={{
            ...styles.square,
            width: sideLength,
            height: sideLength,
          }}></View>
      </PanGestureHandler>
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
      <DataTable.Cell>73503</DataTable.Cell>

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

  const pressAntSetting = () =>
  {
    alert("이미지 들어갈 자리");
  }

  const pressAntSetting2 = () =>
  {
    alert("이미지 들어갈 자리2");
  }

  const pressAntSetting3 = () =>
  {
    alert("이미지 들어갈 자리3");
  }

  const pressAntSetting4 = () =>
  {
    alert("이미지 들어갈 자리4");
  }

  const hideDialog = () => setVisible(false);
  return (
    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
      <List.Accordion>
        <DataTable style = {{backgroundColor: 'white'}}>
          <DataTable.Row>
          <TouchableHighlight onPress={pressAntSetting}>
          <Image
            style={styles.logo}
            source={require('./assets/일꾼.png')}/>
        </TouchableHighlight>
            <DataTable.Cell>  일꾼개미</DataTable.Cell>
            <DataTable.Cell numeric>20자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <TouchableHighlight onPress={pressAntSetting2}>
          <Image
            style={styles.logo}
            source={require('./assets/일꾼.png')}/>
        </TouchableHighlight>
            <DataTable.Cell>  감독관개미</DataTable.Cell>
            <DataTable.Cell numeric>40자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <TouchableHighlight onPress={pressAntSetting3}>
          <Image
            style={styles.logo}
            source={require('./assets/일꾼.png')}/>
        </TouchableHighlight>
            <DataTable.Cell>  회사원개미</DataTable.Cell>
            <DataTable.Cell numeric>80자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <TouchableHighlight onPress={pressAntSetting4}>
          <Image
            style={styles.logo}
            source={require('./assets/일꾼.png')}/>
        </TouchableHighlight>
            <DataTable.Cell>  회장개미</DataTable.Cell>
            <DataTable.Cell numeric>200자원</DataTable.Cell>
          </DataTable.Row>

        </DataTable>
      </List.Accordion>
    </View>
  );
}

function BuildingScreen() {

  const [visible1, setHouse] = React.useState(false);
  const showHouse = () => setHouse(true);
  const hideHouse = () => setHouse(false);

  const [visible2, setApartment] = React.useState(false);
  const showApartment = () => setApartment(true);
  const hideApartment = () => setApartment(false);

  const [visible3, setCompany] = React.useState(false);
  const showCompany = () => setCompany(true);
  const hideCompany = () => setCompany(false);

  const [visible4, setHotel] = React.useState(false);
  const showHotel = () => setHotel(true);
  const hideHotel = () => setHotel(false);

  const containerStyle = {backgroundColor: 'white', padding: 20, height: "70%", width: "70%", marginLeft: "15%", alignItems: 'center', justifyContent: 'center'};

  const pressAntSetting = () =>
  {
    alert("건물 이미지 들어갈 자리");
  }

  const pressAntSetting2 = () =>
  {
    alert("건물 이미지 들어갈 자리2");
  }

  const pressAntSetting3 = () =>
  {
    alert("건물 이미지 들어갈 자리3");
  }

  const pressAntSetting4 = () =>
  {
    alert("건물 이미지 들어갈 자리4");
    
  }
  return (
    <Provider>
    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
    <Portal>
        <Modal visible={visible1} onDismiss={hideHouse} contentContainerStyle={containerStyle}>
          <View style = {{alignItems: 'center', justifyContent: 'center'}}>
          <Text>벽돌집 이미지</Text>
          <Text>비용: 인구 50 자원 500</Text>
          <Text>능력치 분당 인구수 +1</Text>
          </View>
        </Modal>

        <Modal visible={visible2} onDismiss={hideApartment} contentContainerStyle={containerStyle}>
          <View style = {{alignItems: 'center', justifyContent: 'center'}}>
          <Text>아파트 이미지</Text>
          <Text>비용: 인구 50 자원 500</Text>
          <Text>능력치 분당 인구수 +1</Text>
          </View>
        </Modal>

      </Portal>
      <List.Accordion>
        <DataTable style = {{backgroundColor: 'white'}}>
        <DataTable.Row onPress = {showHouse}>
          <Image
            style={styles.logo}
            source={require('./assets/아파트.png')}/>
            <DataTable.Cell>  벽돌집</DataTable.Cell>
            <DataTable.Cell numeric>20자원</DataTable.Cell>
        </DataTable.Row>

          <DataTable.Row>
          <TouchableHighlight onPress={showApartment}>
          <Image
            style={styles.logo}
            source={require('./assets/아파트.png')}/>
        </TouchableHighlight>
            <DataTable.Cell>  아파트</DataTable.Cell>
            <DataTable.Cell numeric>40자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <TouchableHighlight onPress={pressAntSetting4}>
          <Image
            style={styles.logo}
            source={require('./assets/아파트.png')}/>
        </TouchableHighlight>
            <DataTable.Cell>  개미 회사</DataTable.Cell>
            <DataTable.Cell numeric>80자원</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          <TouchableHighlight onPress={pressAntSetting4}>
          <Image
            style={styles.logo}
            source={require('./assets/아파트.png')}/>
        </TouchableHighlight>
            <DataTable.Cell>  개미 호텔</DataTable.Cell>
            <DataTable.Cell numeric>200자원</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </List.Accordion>
    </View>
    </Provider>
  );
}

function MapScreen() {
  return (

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
  },
  logo: {
    backgroundColor: '#056ecf',
    height: 50,
    width: 50,
  },
  
  wrap: {flex: 1, justifyContent: 'center'},
  
  square: {
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});