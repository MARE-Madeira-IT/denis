import { combineReducers } from 'redux'

import auth from './redux/auth'
import debrisMaterial from './redux/debrisMaterial'

const reducer = combineReducers({
    auth,
    debrisMaterial
})

export default reducer