import { StyleSheet } from 'react-native'

const stylesFn = () => StyleSheet.create({
  form: {
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#63458A',
    borderRadius: 4,
    padding: 15,
    minWidth: 300,
    margin: 10,
    backgroundColor: '#e4b7e5',
    color: '#63458A'
  },
  button: {
    backgroundColor: '#63458A',
    padding: 16,
    margin: 10,
    borderRadius: 5,
    minWidth: 200
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    // fontWeight: 500
  }
});

export default stylesFn
