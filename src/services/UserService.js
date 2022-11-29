export async function getAllUsers() {
    const response = await fetch('http://localhost:3080/api/users', {
        method: 'GET', // The method
        mode: 'no-cors',
        headers:{
            'Content-Type': 'application/json',
        }
        }).then(response => response.json());
    return await response;
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}