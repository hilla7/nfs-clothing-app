import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loggerMiddleware from './middleware/logger.middleware';
import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isProd = process.env.NODE_ENV === 'production';
const middlewares = [!isProd && loggerMiddleware].filter(Boolean);
const composeEnhancer = (!isProd && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store); 
