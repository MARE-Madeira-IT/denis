import { combineReducers } from 'redux'

import auth from './redux/auth'
import user from './redux/user'

import debrisMaterial from './redux/debrisMaterial'
import debrisType from './redux/debrisType'
import debrisSize from './redux/debrisSize'
import debrisThickness from './redux/debrisThickness'
import debrisHabitat from './redux/debrisHabitat'
import debrisRugosity from './redux/debrisRugosity'
import debrisCategory from './redux/debrisCategory'
import debrisSubCategory from './redux/debrisSubCategory'

import taxaLevel from './redux/taxaLevel'
import taxaSpeciesStatus from './redux/taxaSpeciesStatus'
import taxaPopulationStatus from './redux/taxaPopulationStatus'
import taxaAbundance from './redux/taxaAbundance'
import taxaViability from './redux/taxaViability'
import taxaMaturity from './redux/taxaMaturity'
import taxaNativeRegion from './redux/taxaNativeRegion'

import report from './redux/report'

const reducer = combineReducers({
    auth,
    user,

    debrisMaterial,
    debrisType,
    debrisSize,
    debrisThickness,
    debrisHabitat,
    debrisRugosity,
    debrisCategory,
    debrisSubCategory,

    taxaLevel,
    taxaSpeciesStatus,
    taxaPopulationStatus,
    taxaAbundance,
    taxaViability,
    taxaMaturity,
    taxaNativeRegion,

    report
})

export default reducer