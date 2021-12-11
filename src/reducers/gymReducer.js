export default function gymsReducer(state = {gyms: []}, action) {
    switch (action.type) {
        case 'FETCH_GYMS':
            return {gyms: action.payload}
        default:
            return state;
    }
}