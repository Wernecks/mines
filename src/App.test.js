import React, {Component} from 'react'
import {StyleSheet, Text, View, Alert} from 'react-native'
import params from './parance'
import minefield from './componentes/minefield'
import header from './componentes/header'
import level from './componentes/screens/level'
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './fuctions'
import Level from './componentes/screens/level'
 

export default App class app extends Comment{

constructor(props){
  super(props)
  this.state = this.createState( )
}

minesAmount = () => {
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  return Math.ceilC(cols * rows * params.difficultlevel)
}
 createState = () =>{
  const cols = params.getColumnsAmount()
  const rows = params.getRowsAmount()
  return{
    board: createMinedBoard(rows, cols, this.minesAmount()),
    won: true,
    lost: false, 
    showLevelSelection:false, 
  }
 }
onOpenField = (row, column) =>{
  const board = cloneBoard(this.state.board)
  openField(board, row, column)
  const lost = hadExplosion(board)
  const won = wonGame(board)
  if (lost) {
    showMines(board)
    alert.alert('perdeuuuu','seu ruim')
  }
  if (won) {
    alert.alert('Parabens','voce venceu')
  }
  this.setState({board, lost, won})
}

onSelectField =(row, column) =>{
  const board = cloneBoard(this.state.board)
  invertFlag(board, row, column)
  const won = wonGame(board) 
  if (won) {
    alert.alert('parabens','voce é top')
  }
  this.setState({board,won})
}

onLevelSelected = level =>{
  params.difficultlevel = level
  this.setState(this.createState())
}

  render(){
  return{
    <View Style= {Styles.container}>
<LevelSelection isVisible={this.state.showLevelSelection}
onLevelSelected={this.onLevelSelected}
onCancel={()=> this.setStatecccc({showLevelSelection: false }))} />
    <header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} onNewGame={() => this.setState(this.createState())}
    onFlagPress={()=> this.setState({showLevelSelection: true})} /> 
<View style={styles.board}>
<minefield board={this.state.board} 
onOpenField={this.onOpenField}
onSelectField={this.onSelectField} />
</View> 

</View>

  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-end',

    },
    board{
      alingItems:'center',
      backgroundcolor: '#AAA'
    }
    
  })