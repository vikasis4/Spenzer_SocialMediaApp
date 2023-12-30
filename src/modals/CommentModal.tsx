import { StyleSheet, Modal, View } from 'react-native'
import React from 'react'
import Comment_section from '../components/post/Comment_section'

const CommentModal = () => {


    return (
        <Modal visible={false} transparent={true}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.8)', flex: 1 }}>
                <Comment_section />
            </View>
        </Modal>
    )
}

export default CommentModal

const styles = StyleSheet.create({})