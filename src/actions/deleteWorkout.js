export const deleteWorkout = (workoutId, gymId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/gyms/${gymId}/workouts/${workoutId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(gym => {
            if (gym.error) {
                alert(gym.error)
            }else {
                dispatch({type: 'DELETE_WORKOUT', payload: gym})
            }
        })
        .catch(err => alert(err))
    }
}