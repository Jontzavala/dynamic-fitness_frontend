export default function gymsReducer(state = {gyms: []}, action) {
    switch (action.type) {
        case 'FETCH_GYMS':
            return {gyms: action.payload}
        
        case 'ADD_GYM':
            return {...state, gyms: [...state.gyms, action.payload]}

        case 'DELETE_GYM':
            let postDeleteGyms = state.gyms.filter(gym => gym.id !== action.payload.toString())
            return {...state, gyms: postDeleteGyms}

        default:
            return state;
    }
}