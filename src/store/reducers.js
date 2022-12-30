import { combineReducers } from 'redux'
import customer from '../features/reducers'

const rootReducer = combineReducers({
    customer,
})

export default rootReducer