const login = async (name, passwd) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify({name, passwd});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/user/login", requestOptions)
        .then(response => response.json());
}

export {
    login
};