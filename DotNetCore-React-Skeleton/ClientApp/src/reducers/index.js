import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { reducer as counter } from './counter.reducer'
import { reducer as weatherForecasts } from './weatherForecasts.reducer'

const rootReducers = {
    authentication,
    registration,
    users,
    alert,
    counter,
    weatherForecasts,
};

export default rootReducers;