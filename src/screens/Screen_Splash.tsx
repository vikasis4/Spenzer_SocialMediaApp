import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../config/app.variables'

function Screen_Splash({ navigation, route }: any): React.JSX.Element {

    React.useEffect(() => {
        setTimeout(() => {            
            navigation.replace("Nav_Bottom")
        }, 2000)
    }, [])

    return (
        <View style={styles.cont}>
            <StatusBar backgroundColor={theme.secondary} />
            <Text style={styles.txt}>SPENZER</Text>
        </View>
    )
}

export default Screen_Splash

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.secondary
    },
    txt: {
        color: theme.accent,
        fontSize: 42,
        textAlign: "center",
        fontFamily:'Poppins-Bold',
    }
})