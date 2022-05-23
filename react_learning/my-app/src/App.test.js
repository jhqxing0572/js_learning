import { render, getByPlaceholderText, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-mock-store';
import { initTodo } from './actions';

describe('With react testing library and redux mock store', () => {
  const initState = [];
  const mockStore = configureStore();
  let store;
  initTodo('App is rendered ok', () => {
    store = mockStore(initState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByPlaceholderText('placeholderee')).toBeInTheDocument();
  });
  /*
  initTodo("todo has been rendered", ()=>{
    store = mockStore([{content:"watch some movie", isCompleted: false}]);
  })*/
});

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
