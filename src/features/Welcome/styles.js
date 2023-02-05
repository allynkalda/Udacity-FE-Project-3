import { StyleSheet } from 'react-native'

const stylesFn = () => StyleSheet.create({
  welcome: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    padding: 20,
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
