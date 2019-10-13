import { createStore, applyMiddleware} from 'redux';
import reducers from "./reducers";
import AllSagas from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(AllSagas);

export {store}

