
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {id: 1, fullName: 'Anton K.', status: "Boss of this gym", location: {city: 'Belarus', country: "Minsk"}, subscribed: false},
        // {id: 1, fullName: 'Maxim S.', status: "I'm looking for job now...", location: {city: 'Moscow', country: "Russia"}, subscribed: true},
        // {id: 1, fullName: 'Chu J.', status: "Aliexpress sailor", location: {city: 'Beijing', country: "Chinese"}, subscribed: false},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                    {
                        return {...u, subscribed: true}
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
                        return {...u, subscribed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId:userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer;