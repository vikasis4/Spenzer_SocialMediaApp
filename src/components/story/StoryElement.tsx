import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { story_type } from '../../config/dummy'


const StoryElement = ({ data }: { data: story_type }) => {
    var colorCode = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    var { imageLink, name, userId }: any = data;


    return (
        <View style={styles.cont}>
            <Image source={{ uri: imageLink }} style={[styles.img, {borderColor: colorCode}]} />
            <Text style={styles.txt}>{name}</Text>
        </View>
    )
}

export default StoryElement

const styles = StyleSheet.create({
    txt:{
        fontFamily:'Poppins-SemiBold',
        color:'white',
        flexDirection:'column',
        fontSize:14
    },
    cont: {
        marginHorizontal: 10,
        justifyContent:'center',
        alignItems:'center',
        gap:10
    },
    img: {
        borderWidth: 3,
        height: 70,
        width: 70,
        borderRadius: 50
    }
})