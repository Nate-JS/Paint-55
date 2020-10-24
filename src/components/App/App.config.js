const DEFAULT_ACTIVE_ITEM_ID = 0;
const DEFAULT_ITEM_NAME = "pencil";
const DEFAULT_ACTIVE_COLOR = "#24fd15";

const config = {
  defaultItemName: DEFAULT_ITEM_NAME,

  activeItemId: DEFAULT_ACTIVE_ITEM_ID,
  activeColor: DEFAULT_ACTIVE_COLOR,

  items: {
    pencil: {
      id: 0,
      size: 7,
    },

    brush: {
      id: 1,
      size: 25,
    },

    eraser: {
      id: 2,
      size: 25,
    },

    line: {
      id: 3,
      size: 2,
    },

    rectangle: {
      id: 4,
      size: 2,
      fill: true,
    },

    circle: {
      id: 5,
      size: 2,
      fill: false,
    },
  },
};

export default config;
