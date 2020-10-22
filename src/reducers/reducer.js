import config from '../App/App.config'

const initialState = {
    selectedItem: config.defaultSelectedItem,
    selectedColor: config.defaultSelectedColor,
    selectedWidth: config.defaultSelectedWidth
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_SELECTED_ITEM": return {
            selectedItem: action.item,
            selectedColor: state.selectedColor,
            selectedWidth: state.selectedWidth,
        };

        case "SET_SELECTED_COLOR": return {
            selectedItem: state.selectedItem,
            selectedColor: action.color,
            selectedWidth: state.selectedWidth,
        };

        case "SET_SELECTED_WIDTH": return {
            selectedItem: state.selectedItem,
            selectedColor: state.selectedColor,
            selectedWidth: action.width,
        };


        default: {
            return state;
        }

    }
}

export default reducer;