import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 4,
    borderColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    width: '90%',
    height: '90%'
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    width: 40,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff'
  },
  button: {
    backgroundColor: '#000000'
  }
})

const Maths = () => {
  const [randomNum1, setRandomNum1] = useState(0)
  const [randomNum2, setRandomNum2] = useState(0)
  const [operator, setOperator] = useState('+')
  const [resultNum, setResultNum] = useState('')

  useEffect(() => {
    randomNumbers()
  }, [])

  const randomNumbers = () => {
    let value1 = generateRandomNumber()
    let value2 = generateRandomNumber()
    setRandomNum1(value1)
    setRandomNum2(value2)
  }

  const generateRandomNumber = () => {
    const min = 1; 
    const max = 100; 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
    return randomNumber
  }

  const handleButtonSubmit = () => {
    let result = 0
    switch (operator) {
      case '+':
        result = randomNum1 + randomNum2
        break;
      case '-':
        result = randomNum1 - randomNum2
        break;
      case '*':
        result = randomNum1 * randomNum2
        break;
      case '/':
        result = randomNum1 / randomNum2
        break;
      case '%':
        result = randomNum1 % randomNum2
        break;
      default:
        console.log('Invalid operator');
        break;
    }
    if (result == resultNum) {
      randomNumbers()
      setResultNum('')
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Maths Games</Text>
      <View style={[styles.row]}>
        <Text style={styles.text}>{randomNum1}</Text>
        <Text style={styles.text}>{operator}</Text>
        <Text style={styles.text}>{randomNum2}</Text>
        <Text style={styles.text}>=</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={setResultNum}
          value={resultNum}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={handleButtonSubmit}
        />
      </View>
    </View>
  )
}

export default Maths