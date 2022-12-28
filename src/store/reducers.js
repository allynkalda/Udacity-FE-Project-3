import { combineReducers } from 'redux'
import customer from '../features/customers/reducers'

const rootReducer = combineReducers({
    customer,
})

export default rootReducer