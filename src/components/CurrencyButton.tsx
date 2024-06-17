import React from 'react'
import type { PropsWithChildren } from 'react'
import {View, Text, StyleSheet} from 'react-native'

type CurrencyButtonsProps = PropsWithChildren<{
    name:string;
    flag:string;
}>

const CurrencyButton = (props:CurrencyButtonsProps):JSX.Element=>{
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignContent:'center',
    },
    flag:{
        fontSize:28,
        color:"#FFFFFF",
        marginBottom:4,
    },
    country:{
        fontSize:14,
        color:"#2d3436",
    }
})

export default CurrencyButton