import * as React from "react"
import { State, Dispatch, Action } from "./AuthType"
import Cookie from "js-cookie"

const AuthStateContext = React.createContext<State | undefined>(undefined)
const AuthDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const initialState: State = {
  user: null,
  status: "EMPTY",
  isLoggedIn: false,
  token: null,
  editUser: null,
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      Cookie.set("token", action.payload)
      return {
        ...state,
        isLoggedIn: true,
      }
    case "SET_AUTH_TOKEN":
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      }
    case "MESSAGE_HANDLER":
      return {
        ...state,
        status: action.payload,
      }
    case "SET_USER":
      return {
        ...state,
        editUser: action.payload,
      }
    case "CLEAR_SET_USER":
      return {
        ...state,
        editUser: null,
      }
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      }
    case "USER_LOADED":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }

    case "LOGOUT_USER":
    case "DELETE_USER":
      Cookie.remove("token")
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }

    default: {
      throw new Error(`Unable to resolve action type `)
    }
  }
}

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = () => {
  const ctx = React.useContext(AuthStateContext)
  if (!ctx) {
    throw new Error(
      "useAuthState need to be wrapped in AuthStateContext Provider "
    )
  }
  return ctx
}

export const useAuthDispatch = () => {
  const ctx = React.useContext(AuthDispatchContext)
  if (!ctx) {
    throw new Error(
      "useAuthDispatch need to be wrapped in AuthDispatchContext Provider "
    )
  }
  return ctx
}

export default AuthProvider
