import { StyleSheet } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import PostComponent from './PostComponent'
import { post } from '../../config/dummy'
import CommentModal from '../../modals/CommentModal'

const Post = () => {


    return (
        <>
            <CommentModal />
            <FlashList
                data={post}
                renderItem={(data) => <PostComponent data={data} />}
                estimatedItemSize={5}
            />
        </>
    )
}

export default Post

const styles = StyleSheet.create({})