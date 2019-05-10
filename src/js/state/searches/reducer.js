/* @flow */

import type {
  SEARCHES_CLEAR,
  SEARCH_REGISTER,
  SEARCH_RESULTS,
  SEARCH_RESULTS_CLEAR,
  SEARCH_STATS,
  SEARCH_STATUS,
  SearchesState
} from "./types"
import {deleteIf} from "../../stdlib/object"
import mergeResults from "./mergeResults"

type Action =
  | SEARCH_REGISTER
  | SEARCH_STATS
  | SEARCH_STATUS
  | SEARCHES_CLEAR
  | SEARCH_RESULTS
  | SEARCH_RESULTS_CLEAR

const init = {}

export default function(
  state: SearchesState = init,
  action: Action
): SearchesState {
  switch (action.type) {
    case "SEARCH_REGISTER":
      return {
        ...state,
        [action.search.name]: action.search
      }
    case "SEARCH_STATS":
      if (!state[action.name]) throwUpdateError(action.name)
      return {
        ...state,
        [action.name]: {...state[action.name], stats: action.stats}
      }
    case "SEARCH_STATUS":
      if (!state[action.name]) throwUpdateError(action.name)
      return {
        ...state,
        [action.name]: {...state[action.name], status: action.status}
      }
    case "SEARCH_RESULTS":
      var {name, results} = action
      var search = state[action.name]
      if (!search) throwUpdateError(action.name)

      return {
        ...state,
        [name]: {...search, results: mergeResults(search.results, results)}
      }
    case "SEARCH_RESULTS_CLEAR":
      if (!state[action.name]) throwUpdateError(action.name)
      var cleared = {tuples: {}, descriptor: {}}
      return {
        ...state,
        [action.name]: {...state[action.name], ...{results: cleared}}
      }
    case "SEARCHES_CLEAR":
      var tag = action.tag
      if (!tag) return {...init}
      return deleteIf(state, (search) => search.tag === tag)
    default:
      return state
  }
}

const throwUpdateError = (name) => {
  throw new Error(`Trying to update search that does not exist: ${name}`)
}