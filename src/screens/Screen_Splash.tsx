import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Screen_Splash({ navigation, route }: any): React.JSX.Element {

    React.useEffect(() => {
        setTimeout(() => {            
            navigation.replace("Home")
        }, 2000)
    }, [])

    return (
        <View style={styles.cont}>
            <Text style={styles.txt}>SPENZER</Text>
        </View>
    )
}

export default Screen_Splash

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "black"
    },
    txt: {
        color: "gold",
        fontSize: 42,
        textAlign: "center",
        fontFamily:'Poppins-Bold',
    }
})