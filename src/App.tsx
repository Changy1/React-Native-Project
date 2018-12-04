import React, { Component } from 'react'
import MainContainer from './pages/main/MainContainer'
import { createStackNavigator} from 'react-navigation'

class App extends Component {
  render () {
    return (
        <MainContainer name = '1'></MainContainer>
    )
  }
}

const AppNavigator  = createStackNavigator({
  Home: {
    screen: MainContainer
  },

})


export default App