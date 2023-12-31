import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

const allActions = {};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
