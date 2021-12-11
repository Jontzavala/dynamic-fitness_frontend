export function fetchGyms() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/gyms')
        .then(response => response.json())
        .then(gyms => {
            if(gyms.error) {
                alert(gyms.error)
            }else{
                dispatch({type: 'FETCH_GYMS', payload: gyms.data})
            }
        })
        .catch(err => alert(err));
    }
}