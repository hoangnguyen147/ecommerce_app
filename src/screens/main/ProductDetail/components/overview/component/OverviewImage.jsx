import React from 'react'
import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'




const OverviewImage = ({ data }) => {
    const { width, height } = useWindowDimensions();
    const renderItem = ({ item }) => {
        return (
            <View style={styles.overview_image_wrapper}>
                <Image
                    style={{ width: width * 5 / 6, height: width * 5 / 6 }}
                    source={{ uri: item }}
                />
            </View>
        )
    }
    return (
        <View style={styles.overview}>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    overview: {
        marginTop: 20,
    },
    overview_image_wrapper: {
        backgroundColor: '#ecf0f1',
        borderRadius: 20,
        marginHorizontal: 10,
    },
    overview_image: {
        width: 300,
        height: 300,

    }
})

export default OverviewImage