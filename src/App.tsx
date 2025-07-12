import { StatusBar, StyleSheet, View } from 'react-native'

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121014'
  }
})

export default App
