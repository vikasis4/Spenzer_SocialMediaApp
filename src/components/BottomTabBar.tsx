import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { theme } from '../config/app.variables';
import { ihome, ahome, isearch, asearch, ipost, apost, isetting, asetting, iuser, auser } from '../config/images';
import BottomNavAni from '../animation/BottomNavAni';
import React from 'react';

export default function BottomTabBar({ state, descriptors, navigation }: any) {

    const [currentPosition, setCurrentPosition] = React.useState('3%');
    const keyValue: any = {
        Home: '3%',
        Search: '23%',
        Post: '50%',
        Setting: '63%',
        Account: '83%'
    };

    const ChangeScr = (value: string) => {
        setCurrentPosition(keyValue[value])
        navigation.navigate(value);
    }

    return (
        <View style={styles.main}>

            <BottomNavAni currentPosition={currentPosition} />

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[0]) }} style={styles.child}>
                <Image source={state.index === 0 ? ahome : ihome} style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[1]) }} style={styles.child}>
                <Image source={state.index === 1 ? asearch : isearch} style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[2]) }} style={[styles.Mchild]}>
                <Image source={state.index === 2 ? apost : ipost} style={styles.Nimg} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[3]) }} style={styles.child}>
                <Image source={state.index === 3 ? asetting : isetting} style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[4]) }} style={styles.child}>
                <Image source={state.index === 4 ? auser : iuser} style={styles.img} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 30,
        width: 30,
    },
    Nimg: {
        height: 50,
        width: 50,
    },
    main: {
        flexDirection: 'row',
        backgroundColor: theme.secondary,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    child: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Mchild: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        position: 'relative',

        borderWidth: 4,
        bottom: 10,
        borderRadius: 70,
        backgroundColor: theme.secondary
    },
    txt: {
        fontFamily: "Poppins-Bold",
        color: "white",
        fontSize: 14,
    }
})