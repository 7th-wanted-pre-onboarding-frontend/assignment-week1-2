import React from 'react';

const IssuesContext = React.createContext(null);

export const issueListState = {
  isLoading: true,
  isError: false,
  data: null,
  error: null
};

export function reducer(_, payload) {
  switch (payload.type) {
    case 'LOADING':
      return {
        isLoading: true,
        isError: false,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        isError: false,
        data: payload.data,
        error: null
      };
    default:
      return {
        isLoading: false,
        isError: true,
        data: null,
        error: payload.data
      };
  }
}

export default IssuesContext;
