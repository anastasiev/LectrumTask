// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';



import { saga } from '../sagas';


// Instruments
import reducer from '../reducers/index';

let isDev = true;

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005'
    }
});
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);

const middleware = [routerMiddleware, sagaMiddleware];
if(isDev){
    middleware.push(logger)
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(saga);

export { history };
export default store;
