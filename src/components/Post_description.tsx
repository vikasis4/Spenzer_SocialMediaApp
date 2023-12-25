import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '../config/app.variables';

const Post_description = ({ description }: any): React.JSX.Element => {

    const [state, setState] = React.useState(false);
    React.useEffect(() => {
        description.length > 170 ? setState(true) : null;
    }, [])

    return (
        <View>
            <Text style={[styles.desc, {paddingBottom: state ? 0 : 12}]}>{state ? description.slice(0, 170) : description}</Text>
            {
                state ?
                    <TouchableOpacity activeOpacity={1} onPress={() => setState(!state)}>
                        <Text style={styles.read}>Read More..</Text>
                    </TouchableOpacity>
                    :
                    description.length > 170 ?
                        <TouchableOpacity activeOpacity={1} onPress={() => setState(!state)}>
                            <Text style={styles.read}>Read Less..</Text>
                        </TouchableOpacity>
                        :
                        null
            }
        </View>
    )
}

export default Post_description

const styles = StyleSheet.create({
    desc: {
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 12,
        color: 'black',
        fontSize: 12,
    },
    read: {
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 12,
        paddingBottom: 10,
        color: theme.secondary,
        fontSize: 12
    },
})