import React from 'react'
import { View, StyleSheet } from 'react-native'
import Navbar from '../components/Navbar'
import { theme } from '../config/app.variables'
import Story from '../components/story/Story'
import Post from '../components/post/Post'


function Screen_Home({ navigation, route }: any): React.JSX.Element {



    return (
        <View style={styles.cont}>
            <Navbar navigation={navigation} route={route} />
            <Story />
            <Post />
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: theme.secondary,
        height: '100%',
    },

})

export default Screen_Home