import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Navbar from '../components/Navbar'
import { theme } from '../config/app.variables'


function Screen_Home({ navigation, route }: any): React.JSX.Element {

    return (
        <View style={styles.cont}>
            <Navbar />
            <Text style={styles.one}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: theme.primary,
        height: '100%',
    },
    one: {
        fontSize: 32,
        color: 'black',
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 40,
        fontFamily: 'Poppins-SemiBold',
    }
})

export default Screen_Home