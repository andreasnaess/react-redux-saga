import { User } from "../sagas/usersSaga"

type UsersState = {
    users: User[];
    loading: boolean;
    error?: string
}

const initialState: UsersState = {
    users: [],
    loading: false
};

const usersReducer = (state = initialState, action: any): UsersState => {
    switch(action.type) {
        case "GET_USERS_REQUESTED":
            return {...state,  loading: true }
        case "GET_USERS_SUCCESS":
            return {...state, loading: false, error: undefined, users: action.users}
        case "GET_USERS_FAILED":
            return {...state, loading: false, error: action.error, users: []}
        default:
            return state

    }
}

export default usersReducer;