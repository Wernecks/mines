import React from "react";
import { View, StyleSheet } from 'react-native';

export default props => {
    return (
        <View stylr={StyleSheet.container}>
        <View style={[Styles.flagpole, props.bigger ? styles.fagpoleBigger : null]} />
        <View style={[Styles.Flag, props.bigger ? styles.flagBigger : null]} />
        <View style={[Styles.base1, props.bigger ? styles.base1Bigger : null]} />
        <View style={[Styles.base2, props.bigger ? styles.base2Bigger : null ] } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin:2,
    },
    flagpole:{
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    Flag:{
        position:'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3,
    },
    base1:{
        position:'absolute',
        height: 2,
        width:6,
        backgroundColor: "#222",
        marginLeft: 7,
        marginTop: 10,
    },
    base2:{
        position:'absolute',
        height: 2,
        width:10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flagBigger:{
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    flagpoleBigger:{
        height: 20,
        width: 4,
        marginLeft: 16,
    },
    base1Bigger:{
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop:20,
    },
    base2Bigger:{
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop:24,
    },

})