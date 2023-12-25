import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import Navbar from '../components/Navbar'
import { theme } from '../config/app.variables'
import Post from '../components/Post'
import { post } from '../config/dummy'
import { FlashList } from "@shopify/flash-list";


function Screen_Home({ navigation, route }: any): React.JSX.Element {


    return (
        <View style={styles.cont}>
            <Navbar navigation={navigation} route={route} />
            <ScrollView>
                <View style={{ height: 15 }}></View>
                <View style={{ minHeight: 5 }}>
                    <FlashList
                        data={post}
                        renderItem={(data) => <Post data={data} />}
                        estimatedItemSize={5}
                    />
                </View>
                <View style={{ height: 300 }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: theme.primary,
        height: '100%',
    },

})

export default Screen_Home