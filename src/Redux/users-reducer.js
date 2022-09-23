
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_FETCHING = 'IS-FETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                    {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                    {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS : {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USERS_COUNT : {
            return {...state, totalUsersCount: action.totalCount}
        }
        case IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId:userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleFetching = (isFetching) => ({type: IS_FETCHING, isFetching})

export default usersReducer;