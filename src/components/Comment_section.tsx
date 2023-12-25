import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { comments, comment_type } from '../config/dummy';
import { FlashList } from '@shopify/flash-list';
import { theme } from '../config/app.variables';
import Post_description from './Post_description';


function RenderComments({ data }: any): React.JSX.Element {

    return (
        <Post_description description={data.comment} />
    )
}

const Comment_section = () => {

    const [state, setState] = React.useState(true);


    return (
        (state ?
            <View style={styles.main}>
                <TouchableOpacity onPress={() => setState(!state)} style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex: 1 }}></TouchableOpacity>
                <View style={{ backgroundColor: 'lightgray', flex: 3, paddingHorizontal: 20, paddingVertical: 18 }}>

                    <ScrollView>
                        <View style={{ minHeight: 5 }}>
                            <FlashList
                                data={comments}
                                renderItem={({ index, item }) => <RenderComments data={item} />}
                                estimatedItemSize={10}
                            />
                        </View>
                    </ScrollView>

                </View>
            </View>
            :
            null)
    )
}

export default Comment_section

const styles = StyleSheet.create({
    txt: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        paddingBottom: 24
    },
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
})