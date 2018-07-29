import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert';
import { history } from '../helpers';
import axios from 'axios';

export const actionCreators = {
    login: (username, password) => (dispatch, state) => {
        console.log('login.state', state);
        dispatch(request({ username }));
        //must assign the dispatch to local var to fix reference issue.
        console.log('login.action.username', username);
        userService.login(username, password)
            .then(user => {

                localStorage.setItem('user', JSON.stringify(user));
                dispatch(success(user));
                history.push('/');

            })
            .catch(function (error) {

                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            });

        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
        function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    },
    logout: () => (dispatch, state) => {
        userService.logout();
        return { type: userConstants.LOGOUT };
    },
    register: (user) => (dispatch, state) => {
        dispatch(request(user));
        userService.register(user)
            .then(user => {
                dispatch(success());
                history.push('/login');
                dispatch(alertActions.success('Registration successful'));
            })
            .catch(error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            });

        function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
        function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
        function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
    },

    getAll: () => (dispatch, state) => {
        dispatch(request());

        userService.getAll()
            .then(users => {
                console.log('users', users);
                dispatch(success(users));
            })
            .catch(error =>
                dispatch(failure(error.toString()))
            );

        function request() { return { type: userConstants.GETALL_REQUEST } }
        function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
        function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
    },

    delete: (id) => (dispatch, state) => {
        return dispatch => {
            dispatch(request(id));

            userService.delete(id)
                .then(user =>
                    dispatch(success(id))
                )
                .catch(error =>
                    dispatch(failure(id, error.toString()))
                );
        };

        function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
        function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
        function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
    }
};



export const reducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}