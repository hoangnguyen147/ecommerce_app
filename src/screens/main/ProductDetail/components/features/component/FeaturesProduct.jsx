import React from 'react'
import { FlatList, Image, StyleSheet, Text, View} from 'react-native'

const data=[
    {
        image:require('../../../../../../../assets/images/headphone.png'),
        name:'APTX HD WIRELESS AUDIO',
        detail:'The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better than CD quality.'
    },
    {
        image:require('../../../../../../../assets/images/headphone.png'),
        name:'APTX HD WIRELESS AUDIO',
        detail:'The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better than CD quality.'
    },
    {
        image:require('../../../../../../../assets/images/headphone.png'),
        name:'APTX HD WIRELESS AUDIO',
        detail:'The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better than CD quality.'
    }
]
const FeaturesProduct=()=>{
    const renderItem=({item})=>{
        return(
            <View style={styles.features_product_wrapper}>
                <Image
                    style={styles.features_product_image}
                    source={item.image}
                />
                <View style={{marginLeft:10,marginTop:10}}>
                    <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                    <Text>{item.detail}</Text>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.overview}>

            <FlatList
                data={data}
                renderItem={renderItem}
                
            />
        </View>
    )
}
const styles=StyleSheet.create({
    features_product_wrapper:{
        flexDirection:'row',

    },
    features_product_image:{
        backgroundColor:'#7f8c8d',
        borderRadius:10,
        marginBottom:30,
        
    }
})

export default FeaturesProduct