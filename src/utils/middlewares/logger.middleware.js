const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) return next(action);

    console.log(`[STORE] ${action.type}:`, action.payload);
    console.log('[STORE] current state: ', store.getState());

    next(action);

    console.log('[STORE] next state: ', store.getState());
}

export default loggerMiddleware;
