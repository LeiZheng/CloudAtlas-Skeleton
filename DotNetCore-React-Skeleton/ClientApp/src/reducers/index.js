import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { reducer as counter } from './counter.reducer'
import { reducer as weatherForcasts } from './weatherForecasts.reducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    counter,
    weatherForcasts,
});

export default rootReducer;