import React from 'react'
import { FlatList, Image, StyleSheet, Text, View} from 'react-native'



const data=[{
    image:require('../../../../../../../assets/images/headphone.png')
},
{
    image:require('../../../../../../../assets/images/headphone.png')
},
{
    image:require('../../../../../../../assets/images/headphone.png')
}]
const OverviewImage=()=>{
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
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal={true}
            />

        </View>
    )
}
const styles=StyleSheet.create({
    overview:{
        marginTop:20,
    },
    overview_image_wrapper:{
        backgroundColor:'#ecf0f1',
        borderRadius:20,
        marginHorizontal:10,
    },
    overview_image:{
        width:300,
        height:300,

    }
})

export default OverviewImage