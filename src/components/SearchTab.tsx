import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '../config/app.variables'
import { asearch } from '../config/images'

const SearchTab = () => {

    const [text, setText] = React.useState("");
    const onChangeText = (value: string) => {
        setText(value);
    }

    return (
        <View style={styles.cont}>
            <TextInput
                style={styles.input}
                placeholderTextColor={theme.secondary}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter your query"
            />
            <TouchableOpacity activeOpacity={0.2} style={styles.touch}>
                <Image source={asearch} style={styles.img}/>
            </TouchableOpacity>
        </View>
    )
}

export default SearchTab

const styles = StyleSheet.create({
    img:{
        height:36,
        width:36,
    },
    touch:{
        width: '20%',
        alignItems: 'center',
        backgroundColor:theme.secondary,
        justifyContent:'center'
    },
    cont: {
        backgroundColor: theme.secondary,
        flexDirection: 'row',
        elevation:8,
        paddingBottom:10,
        paddingLeft:12,
        paddingTop:10
    },
    input:{
        width:"80%",
        borderRadius:6,
        paddingLeft:12,
        color:theme.secondary,
        backgroundColor:'white',
        fontFamily:'Poppins-Regular'
    }
})