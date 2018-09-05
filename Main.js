import firebase from 'react-native-firebase'
import React from 'react'
import { TouchableOpacity, StyleSheet, Platform, Image, Text, View } from 'react-native'
export default class Main extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
render() {
    const { currentUser } = this.state
    const handlePress = false
return (
      <View style={styles.container}>
        <Text>
          Displaying current time for: {currentUser && currentUser.email}
        </Text>
        <TouchableOpacity>
            <Text style = {styles.text}>
               Touch me
            </Text>
         </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
