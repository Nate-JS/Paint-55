import config from '../App/App.config';

const initialState = {
    selectedItem: config.defaultSelectedItem
}

function app(state = initialState, action) {
    switch (action.type) {
        case "SET_SELECTED_ITEM": return state.selectedItem = action.value;
        case "GET_SELECTED_ITEM": return state.selectedItem;

        default: {
            return state;
        }
    }
}

export default app;