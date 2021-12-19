import React from 'react'
import {View,Text} from 'react-native'

const FeaturesText=({name, content})=>{

    return(
        <View>
            <Text style={{fontSize:15,fontWeight:'bold',marginBottom:20}}>{name}</Text>
            <Text style={{marginBottom:20}}>{content}</Text>
        </View>
    )
}

export default FeaturesText