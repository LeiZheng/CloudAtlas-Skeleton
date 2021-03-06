import { config } from '../config';
import { authHeader } from '../helpers';
import axios from 'axios'
//default to login if 401 error.
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        logout();
        window.location.reload(true);
    }
    return error;
});


export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

//default to login if 401 error.
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        logout();
        window.location.reload(true);
    }
    return error;
});

function login(username, password) {
    console.log('log.username', username);
    console.log('log.password', password);
    return axios.post(`${config.apiUrl}/users/authenticate`, { username, password }).then(resp => resp.data);
    /*
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
    */
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return axios.get(`${config.apiUrl}/users`, requestOptions).then(resp => resp.data);
    //return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return axios.get(`${config.apiUrl}/users/${id}`, requestOptions).then(resp => resp.data);
    //return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return axios.post(`${config.apiUrl}/users/register`, user, requestOptions).then(resp =>  resp.data);
    //return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return axios.put(`${config.apiUrl}/users/${user.id}`, user, requestOptions);

   // return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return axios.delete(`${config.apiUrl}/users/${id}`, requestOptions);
    //return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}