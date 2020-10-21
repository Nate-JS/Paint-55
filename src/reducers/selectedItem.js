import config from '../App/App.config';

const initialState = {
    selectedItem: config.defaultSelectedItem
}

export default function selectedItem(state = initialState, action) {
    switch (action.type) {
        case "SET_SELECTED_ITEM": return action.id;

        default: {
            return state.selectedItem;
        }
    }
}