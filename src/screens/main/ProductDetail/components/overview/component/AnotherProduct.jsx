import React from 'react'
import { FlatList, Image, StyleSheet, Text, View} from 'react-native'

const data=[
{
    image:require('../../../../../../../assets/images/headphone.png')
},
{
    image:require('../../../../../../../assets/images/headphone.png')
},
{
    image:require('../../../../../../../assets/images/headphone.png')
}
    ]


const AnotherProduct=()=>{
    const renderItem=({item})=>{
        return(
            <View style={styles.overview_image_wrapper}>
                <Image
                    style={styles.overview_image}
                    source={item.image}
                />
            </View>
        )
    }
    return(
        <View style={styles.overview}>
            <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,marginBottom:20}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>
                    Another Product
                </Text>
                <Text style={{color:'#7f8c8d'}}>See all</Text>
            </View>
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
const styles=StyleSheet.create({
    overview:{
        marginVertical:20,
    },
    overview_image_wrapper:{
        backgroundColor:'#ecf0f1',
        borderRadius:20,
        marginHorizontal:10,
    },
    overview_image:{
        width:150,
        height:150,

    }
})

export default AnotherProduct