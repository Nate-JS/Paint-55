const DEFAULT_ACTIVE_ITEM = "pencil";
const DEFAULT_ACTIVE_COLOR = "#24fd15";

const config = {
  default: {
    activeItem: DEFAULT_ACTIVE_ITEM /*  (pensil, brush, eraser, line, rectangle, circle)  */,
    activeColor: DEFAULT_ACTIVE_COLOR,

    pencil: { width: 7 },

    brush: { width: 25 },

    eraser: { width: 25 },

    line: { width: 2 },

    rectangle: { width: 2, fill: false },

    circle: { width: 2, fill: false },
  },
};

export default config;
