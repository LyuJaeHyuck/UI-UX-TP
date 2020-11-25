import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import React, {useState, useRef,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableHighlight, Image, ImageBackground,TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { List, DataTable, Checkbox, Dialog, Portal, Paragraph, Modal, Provider, Snackbar, Button } from 'react-native-paper'
import ReanimatedScreen2 from './src/screens/ReanimatedScreen2';
import ReanimatedScreen1 from './src/screens/ReanimatedScreen1';

import Animated, { Easing, useSharedValue, useDerivedValue, interpolateColors, withSpring, useAnimatedStyle, repeat, delay, useAnimatedGestureHandler, withTiming, sequence, EasingNode, cancelAnimation, add } from 'react-native-reanimated';
import { State, TapGestureHandler, PanGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
//import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';
//import * as ReanimatedScreen1 from './src/screens/ReanimatedScreen1';
/*
   const ReanimatedScreen2Add = () => {
    new ReanimatedScreen2().add();
  };
*/









function HomeScreen({navigation})
{
  const MoveToMain = () =>
  {
    navigation.navigate("Main");
  }

return(
  <View style = {styles.safeAreaContainer}>
    <Button onPress = {MoveToMain} style = {{backgroundColor: 'gray'}} color = 'white'>TAP TO START</Button>
  </View>
);
}

const MainScreen = (props) => 
{
  const pressSetting = () =>
  {
    alert("환경설정");
  }

 const moveTo = (dest) => props.navigation.navigate(dest);






const Box = (props) => {
return < View style = {styles.box}>
  <Text style = {styles.text}>{props.object.id}</Text>
</View>
}

/*
const JSTestScreen = (props) => 
{
  let pos ={ x : 0, p:0};
  let box ={ id : 'box 1', position : pos};
  let box2 = {id : 'box 1', position : pos};

  console.log (box === box2);

  return (
    <View style ={styles.absoluteContainer}></View>
  )
}
*/





  const [visibleCity, setCity] = React.useState(false);

  const [visibleAnt, setAnt] = React.useState(false);

  const [visibleBuilding, setBuilding] = React.useState(false);

  const [visibleMap, setMap] = React.useState(false);

  const [visibleWorker, setWorker] = React.useState(false);
  const showWorker = () => setWorker(true);
  const hideWorker = () => setWorker(false);

  const [visibleSupervisor, setSupervisor] = React.useState(false);
  const showSupervisor = () => setSupervisor(true);
  const hideSupervisor = () => setSupervisor(false);

  const [visibleOffice, setOffice] = React.useState(false);
  const showOffice = () => setOffice(true);
  const hideOffice = () => setOffice(false);

  const [visibleChairman, setChairman] = React.useState(false);
  const showChairman = () => setChairman(true);
  const hideChairman = () => setChairman(false);

  const [visibleHouse, setHouse] = React.useState(false);
  const showHouse = () => setHouse(true);
  const hideHouse = () => setHouse(false);

  const [visibleApartment, setApartment] = React.useState(false);
  const showApartment = () => setApartment(true);
  const hideApartment = () => setApartment(false);

  const [visibleCompany, setCompany] = React.useState(false);
  const showCompany = () => setCompany(true);
  const hideCompany = () => setCompany(false);

  const [visibleHotel, setHotel] = React.useState(false);
  const showHotel = () => setHotel(true);
  const hideHotel = () => setHotel(false);

  const [visibleStore, setStore] = React.useState(true);

  const [visibleCollection, setCollection] = React.useState(false);

  const [visibleExpansion, setExpansion] = React.useState(false);

  const [visibleAchievement, setAchievement] = React.useState(false);

  const [visbleMain, setMain] = React.useState(true);
  const showMain = () => setMain(false);

  const [visbleList, setList] = React.useState(false);

  const [cityClick, setCityClick] = React.useState(false);
  const [antClick, setAntClick] = React.useState(false);
  const [buildingClick, setBuildingClick] = React.useState(false);
  const [mapClick, setMapClick] = React.useState(false);

  let main = null;

  let list = null;

  let clickBuilding = <Image source = {require('./assets/BuildingButton.png')} />;
  let clickCity = <Image source = {require('./assets/CityButton.png')} />;
  let clickAnt = <Image source = {require('./assets/AntButton.png')} />;
  let clickMap = <Image source = {require('./assets/MapButton.png')} />;;

  if (visbleMain) {
    main = 
    <Modal visible = {visbleMain} onDismiss = {showMain}>
      <TouchableHighlight onPress = {showMain}>
      <View style = {{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: '100%', width: '100%'}}>
        <Button onPress = {showMain} color = 'black'>TAP TO START</Button>
      </View>
      </TouchableHighlight>
    </Modal>
  }

  else  {
    main = null
  }

  /*
              <TouchableHighlight onPress={ }>
            <Image
              style={styles.logo}
              source={require('./assets/일꾼.png')}/>
          </TouchableHighlight>
*/
//========================================================================================================
  if (visbleList) {
    if (visibleCity) {
      list = 
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
    }
/*
  <TouchableHighlight onPress={() => {
//setAnt(false),
ReanimatedScreen1.a()}
              }>
            <Image
              style={styles.logo}
              source={require('./assets/일꾼.png')}/>
          </TouchableHighlight>
    */
  // <ReanimatedScreen1/>
    else if (visibleAnt) {
      list = 
      <DataTable style = {{backgroundColor: 'white'}}>
            <DataTable.Row>
            <TouchableHighlight onPress={showWorker}>
            <Image
              style={styles.logo}
              source={require('./assets/일꾼.png')}/>
          </TouchableHighlight>
              <DataTable.Cell>  일꾼개미</DataTable.Cell>
              <DataTable.Cell numeric>20자원</DataTable.Cell>
              <DataTable.Cell></DataTable.Cell>
              
              <ReanimatedScreen2/>
     


            </DataTable.Row>
            <DataTable.Row>
            <TouchableHighlight onPress={showSupervisor}>
            <Image
              style={styles.logo}
              source={require('./assets/일꾼.png')}/>
          </TouchableHighlight>
              <DataTable.Cell>  감독관개미</DataTable.Cell>
              <DataTable.Cell numeric>40자원</DataTable.Cell>
              <DataTable.Cell></DataTable.Cell>
              
              <ReanimatedScreen2/>
            </DataTable.Row>
  
            <DataTable.Row>
            <TouchableHighlight onPress={showOffice}>
            <Image
              style={styles.logo}
              source={require('./assets/일꾼.png')}/>
          </TouchableHighlight>
              <DataTable.Cell>  회사원개미</DataTable.Cell>
              <DataTable.Cell numeric>80자원</DataTable.Cell>
              <DataTable.Cell></DataTable.Cell>
              
              <ReanimatedScreen2/>
            </DataTable.Row>
  
            <DataTable.Row>
            <TouchableHighlight onPress={showChairman}>
            <Image
              style={styles.logo}
              source={require('./assets/일꾼.png')}/>
          </TouchableHighlight>
              <DataTable.Cell>  회장개미</DataTable.Cell>
              <DataTable.Cell numeric>200자원</DataTable.Cell>
              <DataTable.Cell></DataTable.Cell>
              
              <ReanimatedScreen2/>
            </DataTable.Row>
  
          </DataTable>
    }
  
    else if (visibleBuilding) {
      list = 
      <DataTable style = {{backgroundColor: 'white'}}>
          <DataTable.Row >
          <TouchableHighlight onPress = {showHouse}>
            <Image
              style={styles.logo}
              source={require('./assets/아파트.png')}/>
          </TouchableHighlight>
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
            <TouchableHighlight onPress={showCompany}>
            <Image
              style={styles.logo}
              source={require('./assets/아파트.png')}/>
            </TouchableHighlight>
              <DataTable.Cell>  개미 회사</DataTable.Cell>
              <DataTable.Cell numeric>80자원</DataTable.Cell>
            </DataTable.Row>
  
            <DataTable.Row>
            <TouchableHighlight onPress={showHotel}>
            <Image
              style={styles.logo}
              source={require('./assets/아파트.png')}/>
            </TouchableHighlight>
              <DataTable.Cell>  개미 호텔</DataTable.Cell>
              <DataTable.Cell numeric>200자원</DataTable.Cell>
            </DataTable.Row>
          </DataTable>    
    }
  
    else if (visibleMap) {
      list = 
      <View style = {{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center' , backgroundColor: 'gray', height: 258}}>
      <View style = {{width: 50, height: 231, justifyContent: 'space-between'}}>
          <TouchableHighlight onPress={() => {
           setStore(true),
            setCollection(false),
            setExpansion(false),
            setAchievement(false); 
          }}>
            <Image style = {{height: 50, width: 50}} source = {require('./assets/ButtonStore.png')}/>
          </TouchableHighlight>
  
          <TouchableHighlight onPress={() => {
            setStore(false),
            setCollection(true),
            setExpansion(false),
            setAchievement(false);
          }}>
            <Image style = {{height: 50, width: 50}} source = {require('./assets/ButtonCollection.png')}/>
          </TouchableHighlight >
  
          <TouchableHighlight onPress={() => {
            setStore(false),
            setCollection(false),
            setExpansion(true),
            setAchievement(false);
          }}>
            <Image style = {{height: 50, width: 50}} source = {require('./assets/확장_Button.png')}/>
          </TouchableHighlight>
  
          <TouchableHighlight onPress={() => {
            setStore(false),
            setCollection(false),
            setExpansion(false),
            setAchievement(true);
          }}>
            <Image style = {{height: 50, width: 50}} source = {require('./assets/업적_Button.png')}/>
          </TouchableHighlight>
      </View>
      <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around', backgroundColor: 'white', width: 189, height: 230}}>
          <Modal visible = {visibleStore}>
            <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around', backgroundColor: 'white', width: 189, height: 230}}>
            <Image source = {require('./assets/상점.png')}/>
            <Image source = {require('./assets/GoButton.png')}/>
            </View>
          </Modal>
  
          <Modal visible = {visibleCollection}>
            <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around', backgroundColor: 'white', width: 189, height: 230}}>
            <Image source = {require('./assets/수집.png')}/>
            <Image source = {require('./assets/GoButton.png')}/>
            </View>
          </Modal>
  
          <Modal visible = {visibleExpansion}>
            <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around', backgroundColor: 'white', width: 189, height: 230}}>
            <Image source = {require('./assets/확장.png')}/>
            <Image source = {require('./assets/GoButton.png')}/>
            </View>
          </Modal>
  
          <Modal visible = {visibleAchievement}>
            <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around', backgroundColor: 'white', width: 189, height: 230}}>
            <Image source = {require('./assets/업적.png')}/>
            <Image source = {require('./assets/GoButton.png')}/>
            </View>
          </Modal>
      </View>
      </View>
    }
  
    else {
      list = null
    }
  }

  else  {
    list = null
  }

  if (cityClick) {    
    clickCity = <Image source = {require('./assets/CityButtonClick.png')} />;
  }

  else  {
    clickCity = <Image source = {require('./assets/CityButton.png')} />;
  }
 
  if (antClick) {    
    clickAnt = <Image source = {require('./assets/AntButtonClick.png')} />;
  }

  else  {
    clickAnt = <Image source = {require('./assets/AntButton.png')} />;
  }

  if (buildingClick) {    
    clickBuilding = <Image source = {require('./assets/BuildingButtonClick.png')} />;
  }

  else  {
    clickBuilding = <Image source = {require('./assets/BuildingButton.png')} />;
  }

  if (mapClick) {    
    clickMap = <Image source = {require('./assets/MapButtonClick.png')} />;
  }

  else  {
    clickMap = <Image source = {require('./assets/MapButton.png')} />;
  }



/*
    <View style={styles.absoluteContainer}>
                    <Boxes />
            </View>

*/
/*
<Boxes />




<TouchableHighlight onPress={add }>
            <Image
              style={styles.logo}
              source={require('./assets/일꾼.png')}/>
          </TouchableHighlight>
*/


/*
<TouchableHighlight onPress={() => {
            setCity(true),
            setAnt(false),
            setBuilding(false),
            setMap(false);

            setCityClick(true);
            setBuildingClick(false);
            setAntClick(false);
            setMapClick(false);
          }}
          >
            {clickCity}
      </TouchableHighlight>
*/


return(
  <Provider>
  <View>   
  <ImageBackground source = {require('./assets/축소게임화면.png')} style = {{width: '100%', height: '100%'}}>


  <View style = {styles.setting}>

  <TouchableHighlight onPress={pressSetting}>
          <Image
            style={styles.logo}
            source={require('./assets/optionIcon.png')}
          />
        </TouchableHighlight>
    </View>



    <View style = {{flex: 1, justifyContent: 'flex-end'}}>
    <View style = {{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
      <TouchableHighlight onPress = {() => {
        if (visbleList) {
          setList(false);
        }

        else  {
          setList(true);
        }
      }}>
        <Image source = {require('./assets/UIDown.png')} />
      </TouchableHighlight>     
    </View>
    {list} 
      <ImageBackground source = {require('./assets/UI.png')} style = {{width: '100%', height: 50}}>
      <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>




        
      

      <TouchableHighlight onPress={() => {
            setCity(false),
            setAnt(true),
            setBuilding(false),
            setMap(false);

            setCityClick(false);
            setAntClick(true);
            setBuildingClick(false);
            setMapClick(false);
          }}
          >
            {clickAnt}
      </TouchableHighlight>

      <TouchableHighlight onPress={() => {
            setCity(false),
            setAnt(false),
            setBuilding(true),
            setMap(false);

            setCityClick(false);
            setAntClick(false);
            setBuildingClick(true);
            setMapClick(false);
          }}
          >
            {clickBuilding}
      </TouchableHighlight>

      <TouchableHighlight onPress={() => {
            setCity(false),
            setAnt(false),
            setBuilding(false),
            setMap(true);

            setCityClick(false);
            setBuildingClick(false);
            setAntClick(false);
            setMapClick(true);
          }}
          >
            {clickMap}
      </TouchableHighlight>              
      </View>                
      </ImageBackground>      
    </View>
  </ImageBackground>
  {main}
  </View>

  <Portal>
    <Modal visible={visibleHouse} onDismiss={hideHouse} >
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Building_Ex_벽돌집.png')}/>
      </View>
    </Modal>
  
    <Modal visible={visibleApartment} onDismiss={hideApartment}>
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Building_Ex_아파트.png')}/>
      </View>
    </Modal>
  
    <Modal visible={visibleCompany} onDismiss={hideCompany}>
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Building_Ex_회사.png')}/>
      </View>
    </Modal>
  
    <Modal visible={visibleHotel} onDismiss={hideHotel}>
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Building_Ex_호텔.png')}/>
      </View>
    </Modal>

    <Modal visible={visibleWorker} onDismiss={hideWorker} >
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Ant_Ex_일꾼.png')}/>
      </View>
    </Modal>
  
    <Modal visible={visibleSupervisor} onDismiss={hideSupervisor}>
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Ant_Ex_감독.png')}/>
      </View>
    </Modal>
  
    <Modal visible={visibleOffice} onDismiss={hideOffice}>
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Ant_Ex_회사원.png')}/>
      </View>
    </Modal>
  
    <Modal visible={visibleChairman} onDismiss={hideChairman}>
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Image source = {require('./assets/Ant_Ex_회장.png')}/>
      </View>
    </Modal>
  
  </Portal>
  </Provider>  
);
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function ReanimatedScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name = "Main" component = {MainScreen} options = {{headerShown: false}}></Stack.Screen>
       
       </Stack.Navigator>
    </NavigationContainer>
  );
}













//  <Stack.Screen name = "ReanimatedScreen2" component = {ReanimatedScreen2} options = {{headerShown: false}}></Stack.Screen>
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
    paddingTop: Platform.OS == 'android' ? 24 : 0,
    alignItems: 'flex-end',
  }, 

  city: 
  {
    flexDirection:'row',
    alignItems: 'flex-start'
  },
  logo: {
    //backgroundColor: '#056ecf',
    height: 50,
    width: 50,
  },

  wrap: {flex: 1, justifyContent: 'center'},

  square: {
    backgroundColor: 'blue',
    alignSelf: 'center',
  },

  buttonStyle: {
    backgroundColor: "gray",
    borderRadius: 15,
    margin: 5,
  },
  absoluteContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
  },
  menu: {
      height:36, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center'
  },
  box: {
      position: 'absolute',
      width: 80,
      height: 80,
      backgroundColor: "blue",
  },
  commandText: {
      flex:1,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      color: 'white'
  },
  wrapRowContainer: {
      flex: 1, 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'flex-start'
  },
  border: {
      borderColor: 'yellow',
      borderWidth: 10,
      borderStyle: 'dashed',
  },
  text : {
    flex : 1,
    fontWeight : 'bold',
    textAlign : 'center',
    textAlignVertical : 'center'
  }
});

const s = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
  }
});