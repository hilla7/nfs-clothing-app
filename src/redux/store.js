import { createStore, compose, applyMiddleware } from 'redux';
import loggerMiddleware from '../utils/middlewares/logger.middleware';

import { rootReducer } from './root-reducer';

const middlewares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
