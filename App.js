import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!!</Text>
      <Text style={styles.text}>數位二甲 </Text>
      <Text style={styles.text}>110919022</Text>
      <Text style={styles.text}>林昱德</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  text:{
    color:"yellow",
    fontSize:30,
  }
});
