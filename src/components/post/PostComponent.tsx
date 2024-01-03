import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { theme } from '../../config/app.variables';
import { aheart, comment, iheart } from '../../config/images';
import RenderLongText from '../RenderLongText';
import { post_type } from '../../config/dummy';
import Post_Tag from './Post_Tag';

const PostComponent = ({ data }: any) => {

    const { _id, author, commentId, description, author_id, image, tagged, tags, likes, author_img }: post_type = data.item;
    const [like, setLike] = React.useState(false);
    var clickRef = React.useRef(0).current;
    const handleLike = () => {
        clickRef += 1;
        clickRef == 2 ? setLike(!like) : null;
        clickRef == 2 ? clickRef = 0 : null;
    }
 

    return (
        <View style={styles.cont}>
            <View style={styles.contIn}>
                <Image source={{ uri: author_img }} style={styles.profile_img} />
                <View style={{ paddingHorizontal: 10, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 20 }}>{author}</Text>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14, position: 'relative', bottom: 8 }}>{author_id}</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={handleLike}>
                <ImageBackground source={{ uri: image }} style={{ height: 360, width: "100%" }} >
                    <Image source={aheart} style={styles.like} />
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.contTwo}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                    <Image source={like ? aheart : iheart} style={{ height: 34, width: 34 }} />
                </TouchableOpacity>
                <Image source={comment} style={{ height: 34, width: 34 }} />
            </View>


            <RenderLongText description={description} />

            <Post_Tag title="People Tagged" data={tagged} />

            <Post_Tag title="Hashtags" data={tags} />



        </View>
    )
}

export default PostComponent

const styles = StyleSheet.create({
    like: {
        height: 100,
        width: 100,
    },
    contTwo: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 10,
        gap: 18
    },
    profile_img: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    contIn: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 6
    },
    cont: {
        margin: 10,
        borderWidth: 1,
        elevation: 8,
        paddingVertical: 12,
        backgroundColor: theme.secondary
    }
})