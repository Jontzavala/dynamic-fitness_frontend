export const addGym = (formData, history) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/gyms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(gym => {
            dispatch({type: 'ADD_GYM', payload: gym.data})
            history.push(`/gyms/${gym.data.id}`)
        })
        .catch(err => alert(err));
    }
}