import React, { Component, useState, useRef, useEffect } from 'react';
import { Dimensions, View, StyleSheet, TouchableOpacity, Pressable, TouchableWithoutFeedback ,Image,TouchableHighlight,AsyncStorage} from 'react-native';
import { Modal, Text, Button, TouchableRipple } from 'react-native-paper';
import { State, TapGestureHandler, PanGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
import Animated, { Easing, useSharedValue, useDerivedValue, interpolateColors, withSpring, useAnimatedStyle, repeat, delay, useAnimatedGestureHandler, withTiming, sequence, EasingNode, cancelAnimation } from 'react-native-reanimated';
import { render } from 'react-dom';





const flipAnimation = (props) => {

    if (props.x > 90)
    {
        if (currentValue >= 90) {
            Animated.spring(animatedValue, {
              toValue: 0,
              tension: 10,
              friction: 8,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.spring(animatedValue, {
              toValue: 180,
              tension: 10,
              friction: 8,
              useNativeDriver: false,
            }).start();
          }
    }
  };








const Box = (props) => {
    console.log('Box', props);
    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const color = useSharedValue("blue");
    const scale = useSharedValue(1);
    const [active, setActive] = useState(false);





/*
    useEffect(()=> {
        const getData = async () => {
            const result = await AsyncStorage.getItem('boxesNew');
            console.log("result", result);
            if (result != null) {
                const json = await JSON.parse(result);
                setBoxes(json);
            }
        }
        getData();
    }, []);
*/
    useEffect( ()=> {
        activate( props.active);
    }, [props.active]);

    useEffect( ()=> {
        switch (props.action) {
        case "jump": 
            jump(); 
            setTimeout( ()=> {
                props.cleanupAction();
            }, 200);
            break;
        }

    }, [props.action]);

        
    const jump = () => {
        x.value = withTiming(x.value + 10, {duration: 200, ease: Easing.linear});
        y.value = repeat(withTiming(y.value-80, { duration: 100}), 2, true);
    }

    const blink = () => { }

    const setColor = (c)=> color.value = c;

    const activate = (newActive=true)=> {
        //setColor(newActive ? "orange" : "blue");
        setActive(newActive);
    }
    
    const panHandler = useAnimatedGestureHandler( {
        onStart: (_, ctx) => {
            ctx.startX = x.value;
            ctx.startY = y.value;
            ctx.dragged = false;

            
        },
        onActive: (event, ctx) => {
            if (ctx.dragged == false) {
                ctx.dragged = true;
                /* dragging를 처음 시작하게 된다면 */     
            }
            x.value = ctx.startX + event.translationX;
            y.value = ctx.startY + event.translationY;
        },
        onFinish: (_, ctx) => {
            if (ctx.dragged == true) {
                /* dragging을 했다면 */
            }
          
    x.value =sequence (
        withTiming(-10,{duration: Math.random()*(8000) + 2000}),
        repeat(withTiming(-50, {duration:10000}), -1, true)
    )
        }
    });

    // 그냥 있을떄 바로 이동하기.
    x.value =sequence (
        withTiming(-10,{duration: Math.random()*(8000) + 2000}),
        repeat(withTiming(-50, {duration:10000}), -1, true)
    )

    const onTap = () => {
        //jump();
        props.activate(!active);
    }

    const animatedStyle = useAnimatedStyle
    ( ()=> {
        return {
            //borderRadius: 5,
            elevation: 10,
            //backgroundColor: color.value,
            left: props.left,
            top: props.top,
            transform: [ 
                {translateX: x.value },
                {translateY: y.value },
                {scale: scale.value }
            ]
        }
    });

    return (
        <PanGestureHandler onGestureEvent={panHandler} >
            
            <Animated.View style={[styles.box, animatedStyle]} >
            <Image source = {require('./../../assets/개미.png')}/> 
            </Animated.View>    
        </PanGestureHandler>
    );
}

const Boxes = (props) => {
    const [boxes, setBoxes] = useState([{
        name: 'box 1',
        left: 0, top: 0, width: 0, height: 0, active: true
    }
    ]); // react hook

    const intersect = ( x, y, w, h, x1, y1, w1, h1) => 
        y + h >= y1 && y1 + h1 >= y && x + w >= x1 && x1 + w1 >= x;

    const cleanupAction = () => {}

    const add = ()=> {
        let myBoxes = [...boxes];
        myBoxes.push( {
            name: `box ${Math.floor(Math.random()*100000)}`, 
            left: Math.random()*(-250) + -40, top: -200,
            width: 100, height: 100, active: false
        });
        setBoxes(myBoxes);
    }

    const remove = () => {
        let myBoxes = boxes.filter( (box) => box.active === false);
        setBoxes(myBoxes);
    }

    const jump = ()=> {
        console.log("Boxes jump called");
    }
    const blink = () => {}    

    const activate = (name, newActive)=> {
        let myBoxes = [ ...boxes ]; // spread operator ... 전개 연산자
        myBoxes.forEach( (box)=> {
            if (box.name == name) 
                box.active = newActive;            
        });
        setBoxes(myBoxes);
    }

    let boxesRender = [];
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        boxesRender.push( <Box name={box.name} key={box.name}
            left={box.left} top={box.top} 
            width={box.width} height={box.height}
            active={box.active} action={box.action}
            cleanupAction={cleanupAction}
            activate={(flag)=> activate(box.name, flag)}
            />
        );
        //boxesRender.clear;
    }

    return ( 
    <View key="boxContainer" style={styles.absoluteContainer} >
        { boxesRender }
        <View key="buttons" style={styles.menu} >
          
            <TouchableHighlight onPress = {add}>
        <Image source = {require('./../../assets/구매.png')} />
      </TouchableHighlight>  
      
        </View>
    </View>);
}



/*
export function a ()
{ 
    <Boxes />
}
*/



export default class ReanimatedScreen1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <View style={styles.absoluteContainer}>




                <View style={[styles.logo]}>
                    <Boxes />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
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
        width: 100,
        height: 50,
        marginLeft: 12
        //orientation: "portrait"
       // backgroundColor: "blue",
    }, 
    falsebox: {
        position: 'absolute',
        width: 0,
        height: 0,
     //   backgroundColor: "blue",
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
    logo : {
        left: 294,
        right: 0,
        top: 8,
       // bottom: 0,
        width: 100,
        height: 100,
    }
});