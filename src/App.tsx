import './App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { Suspense } from 'react';
import Loader from './components/loader/Loader';
import Posts from './components/posts/Posts';

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <Posts />
      </Provider>
    </Suspense>
  );
}

export default App;
