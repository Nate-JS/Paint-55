import config from "../App/App.config";

const storage = {
  activeItem: "indicatorIconButton-" + config.default.activeItem,
  activeColor: config.default.activeColor,

  pencil: {
    width: config.default.pencil.width,
  },

  brush: {
    width: config.default.brush.width,
  },

  eraser: { width: config.default.eraser.width },

  line: { width: config.default.line.width },

  rectangle: {
    width: 2,
    fill: config.default.rectangle.fill,
  },

  circle: {
    width: config.default.circle.width,
    fill: config.default.circle.fill,
  },
};

function reducer(state = storage, action) {
  switch (action.type) {
    case "SET_ACTIVE_ITEM":
      return {
        activeItem: action.item,
        activeColor: state.activeColor,

        pencil: state.pencil,
        brush: state.brush,
        eraser: state.eraser,
        line: state.line,
        rectangle: state.rectangle,
        circle: state.circle,
      };

    case "SET_ACTIVE_COLOR":
      return {
        activeItem: state.activeItem,
        activeColor: action.color,

        pencil: storage.pencil,
        brush: storage.brush,
        eraser: storage.eraser,
        line: storage.line,
        rectangle: storage.rectangle,
        circle: storage.circle,
      };

    case "SET_PENCIL":
      return {
        activeItem: state.activeItem,
        activeColor: state.activeColor,

        pencil: { width: action.width },
        brush: state.brush,
        eraser: state.eraser,
        line: state.line,
        rectangle: state.rectangle,
        circle: state.circle,
      };

    case "SET_BRUSH":
      return {
        activeItem: state.activeItem,
        activeColor: state.activeColor,

        pencil: state.pencil,
        brush: { width: action.width },
        eraser: state.eraser,
        line: state.line,
        rectangle: state.rectangle,
        circle: state.circle,
      };

    case "SET_ERASER":
      return {
        activeItem: state.activeItem,
        activeColor: state.activeColor,

        pencil: state.pencil,
        brush: state.brush,
        eraser: { width: action.width },
        line: state.line,
        rectangle: state.rectangle,
        circle: state.circle,
      };

    case "SET_LINE":
      return {
        activeItem: state.activeItem,
        activeColor: state.activeColor,

        pencil: state.pencil,
        brush: state.brush,
        eraser: state.eraser,
        line: { width: action.width },
        rectangle: state.rectangle,
        circle: state.circle,
      };

    case "SET_RECTANGLE":
      return {
        activeItem: state.activeItem,
        activeColor: state.activeColor,

        pencil: state.pencil,
        brush: state.brush,
        eraser: state.eraser,
        line: state.line,
        rectangle: { width: action.width, fill: action.fill },
        circle: state.circle,
      };

    case "SET_CIRCLE":
      return {
        activeItem: state.activeItem,
        activeColor: state.activeColor,

        pencil: state.pencil,
        brush: state.brush,
        eraser: state.eraser,
        line: state.line,
        rectangle: state.rectangle,
        circle: { width: action.width, fill: action.fill },
      };

    default: {
      return state;
    }
  }
}

export default reducer;
