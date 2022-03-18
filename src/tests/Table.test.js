import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Table from '../components/table/Table';
import { Provider } from 'react-redux';
import filesReducer from '../redux/slices/files';
import { configureStore } from '@reduxjs/toolkit';

const renderWithRedux = (
  component,
  { initialState, store = configureStore({ reducer: filesReducer }) } = {
    list: [],
    files: [],
    isFetching: false
  }
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

afterEach(cleanup);

describe('Table Component', () => {
  const { asFragment } = renderWithRedux(<Table />)
  test('should match snapshot and styles', () => {
    expect(asFragment(<Table />)).toMatchSnapshot();
  });
});