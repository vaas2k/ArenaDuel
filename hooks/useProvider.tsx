import React from 'react';
import { Provider } from 'react-redux';
import store from '../storeRedux/store';

const ReduxProvider = ({ Component, pageProps }: any) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default ReduxProvider;
  