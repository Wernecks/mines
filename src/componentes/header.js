import react from 'react'
import {View, StyleSheet, Text, touchableOpacity} from 'react-native'
import flag from '.flag.js'

export default props =>{
    return{
        <View style={styles.container}>
        <view style={styles.flagContainer}>
        <touchableOpacity onPress={props.onFlagPress}
        style={styles.falgButton}>
        <flag bigger />
        </touchableOpacity>
        <Text styles={styles.flagsLeft>={props.flagsLeft}</Text>
        </view>
        <touchableOpacity style={styles.button}
        onPress={props.onNewgame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
        </touchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        fladirection:'row',
        backgroundColor: '#EEE',
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop: 20,
        paddingHorizontal:20,
    },
    flagContainer:{
        fladirection:'row'
    },
    falgButton:{
        marginTop: 10,
        minWidth: 30
    },
    flagsLeftfont:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft:20,
    },
    button:{
        backgroundColor:'#999',
        padding: 5,
    },
    buttonLabel:{
        fontSize: 20,
        color:'#DDD',
        fontWeight:'bold'
    }
})