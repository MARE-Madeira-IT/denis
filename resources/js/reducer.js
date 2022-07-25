import { combineReducers } from 'redux'

import auth from './redux/auth'
import debrisMaterial from './redux/debrisMaterial'
import debrisType from './redux/debrisType'
import debrisSize from './redux/debrisSize'
import debrisThickness from './redux/debrisThickness'
import debrisHabitat from './redux/debrisHabitat'
import debrisRugosity from './redux/debrisRugosity'
import debrisCategory from './redux/debrisCategory'
import debrisSubCategory from './redux/debrisSubCategory'

const reducer = combineReducers({
    auth,

    debrisMaterial,
    debrisType,
    debrisSize,
    debrisThickness,
    debrisHabitat,
    debrisRugosity,
    debrisCategory,
    debrisSubCategory
})

export default reducer