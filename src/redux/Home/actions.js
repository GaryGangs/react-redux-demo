import * as types from "./actionTypes"

export function getRegisteredUsers(data) {
  return {
    type: types.REG_USERS,
    payload: data
  }
}
export function getRegisteredUsersSuccess(data) {
  return {
    type: types.REG_USERS_SUCCESS,
    payload: data
  }
}
export function getRegisteredUsersFailure(data) {
  return {
    type: types.REG_USERS_FAILURE,
    payload: data
  }
}

export function getProjects(data) {
  return {
    type: types.REG_PROJ,
    payload: data
  }
}
export function getProjectsSuccess(data) {
  return {
    type: types.REG_PROJ_SUCCESS,
    payload: data
  }
}
export function getProjectsFailure(data) {
  return {
    type: types.REG_PROJ_FAILURE,
    payload: data
  }
}
