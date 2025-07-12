import { StatusBar, StyleSheet, View, Text } from 'react-native'

import { Button } from '#/components/button'

export function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={{ paddingHorizontal: 12 }}>
        <Button onPress={() => {}}>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 }}>
            Aaa
          </Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18141b'
  }
})
