import { StyleSheet } from 'react-native'

const stylesFn = () => StyleSheet.create({
  customer: {
    flex: 1,
    padding: 20,
  },
  textTitle: {
    // fontWeight: 500,
    fontSize: 18,
    textAlign: 'center',
    padding: 16
  },
  text: {
    paddingLeft: 30,
    paddingTop: 10,
    fontSize: 16,
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
  },
  dataBox: {
    margin: 24
  }
});

export default stylesFn
