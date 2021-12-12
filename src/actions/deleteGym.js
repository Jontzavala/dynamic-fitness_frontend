export const deleteGym = (gymId, history) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/gyms/${gymId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(gymId => {
            dispatch({type: 'DELETE_GYM', payload: gymId})
            history.push('/gyms')
        })
        .catch(err => alert(err));
    }
}