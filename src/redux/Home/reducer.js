import * as types from "./actionTypes"

const initialState = {
  regUsers: [],
  regProjects: []
}

export default function registeredUserReducer(state = initialState, action) {
  switch (action.type) {
    case types.REG_USERS_SUCCESS:
      return {
        ...state,
        regUsers: action.payload
      }
    case types.REG_PROJ_SUCCESS:
      return {
        ...state,
        regProjects: action.payload
      }
    default:
      return state
  }
}
