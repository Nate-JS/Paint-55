import * as actionTypes from "actions/actionTypes";
import config from "components/App/App.config";

const initialState = {
  activeItemId: config.activeItemId,
  activeColor: config.activeColor,

  items: {
    pencil: { id: config.items.pencil.id, size: config.items.pencil.size },
    brush: { id: config.items.brush.id, size: config.items.brush.size },
    eraser: { id: config.items.eraser.id, size: config.items.eraser.size },
    line: { id: config.items.line.id, size: config.items.line.size },
    rectangle: { id: config.items.rectangle.id, size: config.items.rectangle.size, fill: config.items.rectangle.fill },
    circle: { id: config.items.circle.id, size: config.items.circle.size, fill: config.items.circle.fill },
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_ITEM:
      switch (action.payload.itemId) {
        case config.items.pencil.id:
          return {
            activeItemId: state.activeItemId,
            activeColor: state.activeColor,
            items: { ...state.items, pencil: { id: action.payload.itemId, size: action.payload.size } },
          };

        case config.items.brush.id:
          return {
            activeItemId: state.activeItemId,
            activeColor: state.activeColor,
            items: { ...state.items, brush: { id: action.payload.itemId, size: action.payload.size } },
          };

        case config.items.eraser.id:
          return {
            activeItemId: state.activeItemId,
            activeColor: state.activeColor,
            items: { ...state.items, eraser: { id: action.payload.itemId, size: action.payload.size } },
          };

        case config.items.line.id:
          return {
            activeItemId: state.activeItemId,
            activeColor: state.activeColor,
            items: { ...state.items, line: { id: action.payload.itemId, size: action.payload.size } },
          };

        case config.items.rectangle.id:
          return {
            activeItemId: state.activeItemId,
            activeColor: state.activeColor,
            items: {
              ...state.items,
              rectangle: { id: action.payload.itemId, size: action.payload.size, fill: action.payload.fill },
            },
          };

        case config.items.circle.id:
          return {
            activeItemId: state.activeItemId,
            activeColor: state.activeColor,
            items: {
              ...state.items,
              circle: { id: action.payload.itemId, size: action.payload.size, fill: action.payload.fill },
            },
          };

        default: {
          return;
        }
      }

    case actionTypes.ACTIVATE_ITEM:
      return {
        activeItemId: action.payload.itemId,
        activeColor: state.activeColor,
        items: state.items,
      };

    case actionTypes.ACTIVATE_COLOR:
      return {
        activeItemId: state.activeItemId,
        activeColor: action.payload.color,
        items: state.items,
      };

    default:
      return state;
  }
}
