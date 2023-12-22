import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { theme } from '../config/app.variables'

const Navbar = () => {
    return (
        <View style={styles.main}>
            <StatusBar backgroundColor={theme.secondary} />
            <Text style={styles.txt}>Spenzer</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text onPress={() => { console.log("OH NO") }} style={styles.txt2}>Notif</Text>
                <Text onPress={() => { console.log("OH YES") }} style={styles.txt2}>Chats</Text>
            </View>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24
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