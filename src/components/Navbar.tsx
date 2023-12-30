import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { theme } from '../config/app.variables'
import { bell, chat } from '../config/images'

const Navbar = ({ navigation, route }: any) => {

    return (
        <View style={styles.main}>
            <StatusBar backgroundColor={theme.secondary} />
            <Text style={styles.txt}>Spenzer</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <TouchableOpacity style={styles.touch} onPress={() => { navigation.navigate("Screen_Notification") }}>
                    <View style={styles.dot} />
                    <Image source={bell} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => { navigation.navigate("ChatList") }}>
                    <View style={styles.dot} />
                    <Image source={chat} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    touch:{
        position:'relative'
    },
    dot:{
        position:'absolute',
        borderRadius:50,
        right:-8, top:0,
        height:10,
        width:10,
        backgroundColor:theme.accent
    },
    txt: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
    },
    txt2: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 14
    },
    main: {
        backgroundColor: theme.secondary,
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 20,
        elevation: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})