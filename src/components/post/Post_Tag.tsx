import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Post_Tag = ({ title, data }: any) => {
    return (
        <View style={{ paddingHorizontal: 12, paddingBottom: 12 }}>
            <Text style={[styles.txt, {fontFamily: 'Poppins-Bold'}]}>{title} :- </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {data.map((person: string, index: number) => {
                    return <Text key={index} style={[styles.txt]}>{person} </Text>
                })}
            </View>
        </View>
    )
}

export default Post_Tag

const styles = StyleSheet.create({
    txt: {
        fontFamily: 'Poppins-Regular',
        color: 'white',
        fontSize: 12,
        paddingRight:10
    },
})