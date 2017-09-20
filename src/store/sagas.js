// https://github.com/diegohaz/arc/wiki/Sagas
import { all, fork } from 'redux-saga/effects'

// Add external sagas here
const sagas = [
]

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

req.keys().forEach((key) => {
  sagas.push(req(key).default)
})

export default function* (services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}
