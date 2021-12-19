import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'
import OverviewImage from './component/OverviewImage'
import ReviewProduct from './component/ReviewProduct'
import AnotherProduct from './component/AnotherProduct'
const Overview = ({ images }) => {
    const imageData = [images, images, images, images]
    return (
        <View style={styles.overview_wrapper}>
            <OverviewImage data={imageData} />
            <ReviewProduct />
            <AnotherProduct />


        </View>
    )
}

const styles = StyleSheet.create({
    overview_wrapper: {
        marginHorizontal: 10,
    },
    add_card: {
        backgroundColor: '#2ecc71',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    }
})
export default Overview