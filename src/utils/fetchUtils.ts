export const checkStatus = response => {
    if(response.ok) {
        return response.json()
    } else throw 'Error!!'
}