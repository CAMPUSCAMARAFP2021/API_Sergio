const getOffers = async (jwt) => {
    const headers = new Headers();
    headers.append("Authorization", jwt);
    return fetch("http://localhost:3000/offers", {headers})
    .then(res => res.json())
}

const createOffers = async (offer, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const body = JSON.stringify({offer});
    const requestOptions = {
        method: 'POST', headers, body,redirect: 'follow'
    };
    return fetch("http://localhost:3000/offers", requestOptions)
        .then(response => response.json());
}

const deleteOffers = async (offer, jwt) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", jwt);
    const requestOptions = {
        method: 'DELETE', headers, redirect: 'follow'
    };
    return fetch("http://localhost:3000/offers/" + offer._id, requestOptions)
        .then(response => response.text());
}

export {
    getOffers,
    createOffers,
    deleteOffers
}