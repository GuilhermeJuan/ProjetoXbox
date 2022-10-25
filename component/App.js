import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NavigationContainer } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )

<NavigationContainer> 
  <Stack.Navigatior>
    <Stack.Screen name="Tela inicial" component = { TelaInicio } />
    <Stack.Screen name="Tela console" component = { TelaConsole } />
    <Stack.Screen name="Tela jogos" component = { TelaJogos } />
    <Stack.Screen name="Tela nuvem" component = { TelaNuvem } />
  </Stack.Navigatior>
</NavigationContainer>



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
