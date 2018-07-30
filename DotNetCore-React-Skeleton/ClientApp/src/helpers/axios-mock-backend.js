import MockAdapter  from 'axios-mock-adapter'
// array in local storage for registered users
import axios from 'axios'

let users = JSON.parse(localStorage.getItem('users')) || [];

export function configureMockBackend() {
    let mock = new MockAdapter(axios, { delayResponse: 300 });   

    mock.onGet(/^api/).passThrough()
        .onAny().reply(config => {
        let { url, method } = config;
        console.log('config',config);
        // get users
        if (url.endsWith('/users') && method === 'get') {
            // check for fake auth token in header and return users if valid, this security is implemented server side in a real application

            if (config.headers && config.headers.Authorization === 'Bearer fake-jwt-token') {
                console.log('mock.users',users);
                return [200, users];
            } else {
                // return 401 not authorised if token is null or invalid
                return [401, {}];
            }
        }
        else if (url.endsWith('/users/authenticate') && method === 'post') {
            // get parameters from post request
            let params = JSON.parse(config.data);

            // find if any user matches login credentials
            let filteredUsers = users.filter(user => {
                return user.username === params.username && user.password === params.password;
            });

            if (filteredUsers.length) {
                // if login details are valid return user details and fake jwt token
                let user = filteredUsers[0];
                let responseJson = {
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'fake-jwt-token'
                };
                return [200, responseJson];
                //resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
            } else {
                // else return error
                return [401, 'Username or password is incorrect'];
            }
        }
        else if (url.match(/\/users\/\d+$/) && config.method === 'get') {
            // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
            if (config.headers && config.headers.Authorization === 'Bearer fake-jwt-token') {
                // find user by id in users array
                let urlParts = url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let matchedUsers = users.filter(user => { return user.id === id; });
                let user = matchedUsers.length ? matchedUsers[0] : null;

                // respond 200 OK with user
                return [200, user];
            } else {
                // return 401 not authorised if token is null or invalid
                return [401, 'Unauthorised'];
            }


        }

        // register user
        else if (url.endsWith('/users/register') && config.method === 'post') {
            // get new user object from post body
            let newUser = JSON.parse(config.data);

            // validation
            let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
            if (duplicateUser) {
                return ['400', 'Username "' + newUser.username + '" is already taken'];
            }

            // save new user
            newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            // respond 200 OK
            return [200, newUser];

        }

        // delete user
        else if (url.match(/\/users\/\d+$/) && config.method === 'delete') {
            // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
            let user;
            if (config.headers && config.headers.Authorization === 'Bearer fake-jwt-token') {
                // find user by id in users array
                let urlParts = url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < users.length; i++) {
                    user = users[i];
                    if (user.id === id) {
                        // delete user
                        users.splice(i, 1);
                        localStorage.setItem('users', JSON.stringify(users));
                        break;
                    }
                }

                // respond 200 OK
                return [200, { user }];
                // return 401 not authorised if token is null or invalid

            }
            else {

                return [401, {}]
            }

        }
        else {
            return [200, {}]
        }

    });

 }