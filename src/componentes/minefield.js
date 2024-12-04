import React from "react";
import {View, stylesheet} from 'react-native'
import field from "./field";

export default props =>{
    const rows = props.board.map((row, r) =>{
        const columns = row.map((field, c)=>{
            return <Field {...field} key={c} 
            onOpen={()=> props.onOpenField(r,c)}
            onSelect={e => props.onSelectField(r, c)}/>
        })
        return <View key={r}
        style={{flexDirection:'row'}}>{columns}</View>
    })
     return <View style={stylesheet.container}>{rows}</View>
     
     const style= StyleSheet.create({
        container:{
            flexdirection:'row',
            bacckgroundcolor: '#EEE',
        }
     }}