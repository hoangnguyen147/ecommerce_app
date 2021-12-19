import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import FeaturesText from './component/FeaturesText'
import FeaturesProduct from './component/FeaturesProduct'
const Features = ({ name, feature }) => {

    return (
        <View style={{ marginHorizontal: 10 }}>
            <FeaturesText name={name} content={feature} />
            <FeaturesProduct />

        </View>
    )
}
export default Features