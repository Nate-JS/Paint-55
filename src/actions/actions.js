import * as actionTypes from "./actionTypes";

export const updateItem = (itemId, size, fill = null) => {
  return {
    type: actionTypes.UPDATE_ITEM,
    payload: {
      itemId,
      size,
      fill,
    },
  };
};

export const activateItem = itemId => {
  return {
    type: actionTypes.ACTIVATE_ITEM,
    payload: {
      itemId,
    },
  };
};

export const activateColor = color => {
  return {
    type: actionTypes.ACTIVATE_COLOR,
    payload: {
      color,
    },
  };
};
