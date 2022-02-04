import { combineEpics } from "redux-observable"

import { homeEpics } from "./Home"

const allEpics = Object.values({
  ...homeEpics
})

export default combineEpics(...allEpics)
