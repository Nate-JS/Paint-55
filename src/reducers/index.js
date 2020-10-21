import { combineReducers } from 'redux';
import selectedItem from './selectedItem';
import age from './age';

export default combineReducers({
    selectedItem: selectedItem,
    age
});