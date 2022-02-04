import { from, of } from "rxjs"
import { ofType } from "redux-observable"
import { switchMap, flatMap } from "rxjs/operators"
import { getRegisteredUsersSuccess, getProjectsSuccess } from "./actions"
import * as types from "./actionTypes"

import homeApi from "../../api/home-api"

export function getRegisteredUsersList(action$) {
  return action$.pipe(
    ofType(types.REG_USERS),
    switchMap(action =>
      from(homeApi.fetchRegisteredUsers()).pipe(
        flatMap(data => of(getRegisteredUsersSuccess(data)))
      )
    )
  )
}

export function getProjectMemberships(action$) {
  return action$.pipe(
    ofType(types.REG_PROJ),
    switchMap(action =>
      from(homeApi.fetchProjects()).pipe(
        flatMap(data => of(getProjectsSuccess(data)))
      )
    )
  )
}
