import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import Navbar from '../components/Navbar'
import { theme } from '../config/app.variables'
import Post from '../components/Post'
import { post } from '../config/dummy'
import { FlashList } from "@shopify/flash-list";
import Story from '../components/story/Story'


function Screen_Home({ navigation, route }: any): React.JSX.Element {



    return (
        <View style={styles.cont}>
            <Navbar navigation={navigation} route={route} />
                <Story />
                <FlashList
                    data={post}
                    renderItem={(data) => <Post data={data} />}
                    estimatedItemSize={5}
                />
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