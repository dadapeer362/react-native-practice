import { StyleSheet, Text, View } from 'react-native';
import Maths from './components/maths';

export default function App() {
  return (
    <View style={styles.container}>
      <Maths></Maths>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
