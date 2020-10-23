export function setActiveItem(item) {
  return {
    type: "SET_ACTIVE_ITEM",
    item,
  };
}

export function setActiveColor(color) {
  return {
    type: "SET_ACTIVE_COLOR",
    color,
  };
}

export function setPencil(width) {
  return {
    type: "SET_PENCIL",
    width,
  };
}

export function setBrush(width) {
  return {
    type: "SET_BRUSH",
    width,
  };
}

export function setEraser(width) {
  return {
    type: "SET_ERASER",
    width,
  };
}

export function setLine(width) {
  return {
    type: "SET_LINE",
    width,
  };
}

export function setRectangle(width, fill) {
  return {
    type: "SET_RECTANGLE",
    width,
    fill,
  };
}

export function setCircle(width, fill) {
  return {
    type: "SET_CIRCLE",
    width,
    fill,
  };
}
