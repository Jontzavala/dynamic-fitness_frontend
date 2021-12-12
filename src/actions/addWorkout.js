export const addWorkout = (workout, gymId, history) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/gyms/${gymId}/workouts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(workout)
        })
        .then(response => response.json())
        .then(gym => {
            dispatch({type: 'ADD_WORKOUT', payload: gym})
            history.push(`/gyms/${gym.data.id}`)
        })
        .catch(err => alert(err));
    }
}