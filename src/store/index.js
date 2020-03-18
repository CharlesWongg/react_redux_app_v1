import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';

// const composedCreateStore = compose(
//   applyMiddleware(thunk),
//   // 只支持 chrome 插件的方式,不引入其它代码
//   devToolsEnhancer()
// )(createStore);

// function configureStore(initialStore = {}) {
//   const store = composedCreateStore(reducers, initialStore);
  
//   return store;
// }

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;