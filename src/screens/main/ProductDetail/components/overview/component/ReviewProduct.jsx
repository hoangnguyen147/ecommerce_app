import React from 'react'
import { FlatList, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CommentInput from '../../../../../../components/CommentInput/CommentInput'
import Search from '../../../../../../components/Search/Search'
import { SearchInput } from '../../../../../../components/Search/Search.styles'

const data = [
    {
        avatar: require('../../../../../../../assets/images/avar.jpg'),
        name: 'Madelina',
        time_comment: '1 month ago',
        rate: 5,
        comment: 'good!'
    },
    {
        avatar: require('../../../../../../../assets/images/avar.jpg'),
        name: 'Madelina',
        time_comment: '1 month ago',
        rate: 5,
        comment: 'good!'
    },
    {
        avatar: require('../../../../../../../assets/images/avar.jpg'),
        name: 'Madelina',
        time_comment: '1 month ago',
        rate: 5,
        comment: 'good!'
    },
    {
        avatar: require('../../../../../../../assets/images/avar.jpg'),
        name: 'Madelina',
        time_comment: '1 month ago',
        rate: 5,
        comment: 'good!'
    },
    {
        avatar: require('../../../../../../../assets/images/avar.jpg'),
        name: 'Madelina',
        time_comment: '1 month ago',
        rate: 5,
        comment: 'good!'
    },
    {
        avatar: require('../../../../../../../assets/images/avar.jpg'),
        name: 'Madelina',
        time_comment: '1 month ago',
        rate: 5,
        comment: 'good!'
    },
]
const ReviewProduct = ({ ...props }) => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.preview_item}>
                <View style={styles.preview_item_head}>
                    <Image
                        style={styles.preview_avatar}
                        source={require('../../../../../../../assets/images/avar.jpg')}
                    />
                    <View style={styles.preview_name_rate}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.preview_name}>{item.name}</Text>
                            <Text style={{ color: '#7f8c8d' }}>{item.time_comment}</Text>
                        </View>

                        <Text >{item.rate}</Text>
                    </View>
                </View>
                <View style={styles.preview_item_body}>
                    <Text>{item.comment}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.preview_wrapper}>
            <View >
                <Text style={styles.title}>Bình luận</Text>
            </View>
            <CommentInput />
            <FlatList
                data={data}
                renderItem={renderItem}
            />
            <TouchableOpacity style={styles.see_all}>
                <Text style={{ color: '#7f8c8d' }}>See all review</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    preview_wrapper: {
        marginVertical: 20,

    },
    comment_input: {
        padding: 5,
        marginVertical: 10,
        borderColor: "#aaa"
      },
    title: {
        marginVertical: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    preview_item: {
        marginBottom: 10,
    },
    preview_item_head: {
        flexDirection: 'row',
    },
    preview_avatar: {
        width: 40,
        height: 40,
        borderRadius: 999,
    },
    preview_name_rate: {
        marginLeft: 10,
        flex: 1
    },
    preview_name: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    preview_item_body: {
        marginLeft: 50,

    },
    see_all: {
        alignItems: 'center'
    }
})

export default ReviewProduct