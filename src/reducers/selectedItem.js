import config from '../App/App.config';

const initialState = {
    selectedItemId: config.defaultSelectedItem
}
export default function selectedItem(state = initialState, action) {
    switch (action.type) {
        case "SET_SELECTED_ITEM": return action.value;

        default: {
            return state;
        }
    }
}