import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// Ant-design css import
import 'antd/dist/antd.min.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import ReduxTunk from 'redux-thunk';
import Reducer from './_reducers';


// dispatch를 해당하는 action을 보낼때 기존에는 객체형식으로 보낼 수 있다.
// 개발을 진행할 시에, 함수형식과 promise형식으로도 보내게 될 경우가 있는데,
// 이를 위해 redux-promise, redux-thunk 라이브러리를 통해 이를 해결할 수 있다.
// 설정
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxTunk)(createStore);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider
    store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
