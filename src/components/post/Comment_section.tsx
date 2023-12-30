import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { comments, comment_type } from '../../config/dummy';
import { FlashList } from '@shopify/flash-list';
import RenderLongText from '../RenderLongText';


function RenderComments({ data }: any): React.JSX.Element {

    return (
        <RenderLongText description={data.comment} />
    )
}

const Comment_section = () => {



    return (
        <View style={{ flex: 1 }}>
            <FlashList
                data={comments}
                renderItem={({ index, item }) => <RenderComments data={item} />}
                estimatedItemSize={20}
            />
        </View>
    )
}

export default Comment_section

const styles = StyleSheet.create({


})