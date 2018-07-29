import { reducer as authentication } from './authentication';
import { reducer as registration } from './registration';
import { reducer as users } from './users';
import { reducer as alert } from './alert';
import { reducer as counter } from './counter'
import { reducer as weatherForecasts } from './weatherForecasts'
import { reducer as homelayout } from './homelayout'

const rootReducers = {
    authentication,
    registration,
    users,
    alert,
    counter,
    weatherForecasts,
    homelayout
};

export default rootReducers;