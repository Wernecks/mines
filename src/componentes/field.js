import react from 'react'
import {view, stylesheet, Text, TouchableWithoutFeedback} from 'react-native'
import params from '../parance'
import mine from 'mime'
import Mine from './mine'
import flag from './flag'



export default prps =>{

    const { mined, opened, nearMines} = props

    const stylefield = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (styleField.lenght === 1) styleField.push(style.regular)

        let color = null
        if (nearMines > 0) {
            if (nearMines == 1) color = '#2A28D7'
            if (nearMines == 2) color = '#2B520F'
            if (nearMines > 2 && nearMines <6) color = '#F9060A'
            if (nearMines >= 6) color = '#F221A9'
        }

        return (
            <TouchableWithoutFeedback onPress={props.onOpen}
            onLongPress={props.onSelect}>
            <view style={styleDield}>
            {!mined && opened && nearMines > 0 ?
            <text style={[styles.label,{colorc: color}]}>
        {nearMines}</text>} : false 

            </view>
            </TouchableWithoutFeedback>
        )
}

const styles = stylesheet.create({
    Field: {
        height: params.blockSize,
        width: params.blocksize,
        borderWidth: params.borderSize,
    },
     regular: {
        backgroundcolor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: 'CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'

     },
     opened: {
        backgroundcolor: '#999',
        bordderColor: '#777',
        alingItems: 'center',
        justifyContent: 'center',
     },
     label : { 
        fontWeight: ' bold',
        fontSize: params.FontSize,
     }
})