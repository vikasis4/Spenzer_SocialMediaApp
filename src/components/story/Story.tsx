import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StoryElement from './StoryElement'
import { stories } from '../../config/dummy'
import { FlashList } from '@shopify/flash-list'

const Story = () => {
    return (
        <View style={styles.cont}>
            <FlashList
                data={stories}
                renderItem={({item, index}) => <StoryElement data={item} />}
                estimatedItemSize={5}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Story

const styles = StyleSheet.create({
    cont: {
        padding: 16,
    }
})