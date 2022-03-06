const getOffers = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/offer", {headers})
    .then(res => res.json())
}

const createOffers = async (offer, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("authorization", jwt);
    const body = JSON.stringify({offer});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/offer", requestOptions)
        .then(response => response.json());
}

const deleteOffers = async (offer, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/offer/" + offer._id, requestOptions)
        .then(response => response.text());
}

export {
    getOffers,
    createOffers,
    deleteOffers,
}