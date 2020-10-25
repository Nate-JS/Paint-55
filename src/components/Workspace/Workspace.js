import React, { Component } from "react";
import { Vector } from "./Workspace.extra";
import "./Workspace.css";
import config from "components/App/App.config";
import { connect } from "react-redux";

class Workspace extends Component {
  constructor(props) {
    // Calling parent`s constructor function
    super(props);

    // Declaring properties
    this.currentObjectState = 0;
    this.currentObjectFixedPosition = new Vector();
    this.isMouseDown = false;
    this.mousePosition = new Vector(null, null);

    // Creating refs
    this.canvasRef = React.createRef();
    this.layerRef = React.createRef();

    // Getting the pixet ratio
    this.PIXEL_RATIO = (function () {
      const ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1;

      return dpr / bsr;
    })();
  }

  update = () => {
    switch (this.props.activeItemId) {
      case config.items["pencil"].id:
        if (this.isMouseDown) {
          this.drawCircle(
            this.canvasContext,
            this.mousePosition,
            this.props.pencil.size,
            this.props.pencil.size,
            this.props.activeColor,
            this.props.activeColor,
            true
          );
        }
        break;

      case config.items["eraser"].id:
        if (this.isMouseDown) {
          this.drawCircle(
            this.canvasContext,
            this.mousePosition,
            this.props.eraser.size,
            this.props.eraser.size,
            "#ffffff",
            "#ffffff",
            true
          );
        }
        break;

      case config.items["brush"].id:
        if (this.isMouseDown) {
          this.drawRectangle(
            this.canvasContext,
            new Vector(
              this.mousePosition.x - this.props.brush.size / 2,
              this.mousePosition.y - this.props.brush.size / 2
            ),
            this.props.brush.size,
            this.props.brush.size,
            this.props.brush.size,
            this.props.activeColor,
            this.props.activeColor,
            true
          );
        }
        break;

      case config.items["line"].id:
        if (this.currentObjectState === 0) {
          if (this.isMouseDown) {
            this.currentObjectFixedPosition.newPosition(this.mousePosition.x, this.mousePosition.y);
            this.currentObjectState += 1;
          }
        } else if (this.currentObjectState === 1) {
          if (this.isMouseDown) {
            this.clear("layer");
            this.drawLine(
              this.layerContext,
              this.currentObjectFixedPosition,
              this.mousePosition,
              this.props.line.size,
              this.props.activeColor
            );
          } else {
            this.drawLine(
              this.canvasContext,
              this.currentObjectFixedPosition,
              this.mousePosition,
              this.props.line.size,
              this.props.activeColor
            );
            this.currentObjectState = 0;
          }
        }

        break;

      case config.items["circle"].id:
        if (this.currentObjectState === 0) {
          if (this.isMouseDown) {
            this.currentObjectFixedPosition.newPosition(this.mousePosition.x, this.mousePosition.y);
            this.currentObjectState += 1;
          }
        } else if (this.currentObjectState === 1) {
          if (this.isMouseDown) {
            this.clear("layer");
            const r = Math.abs(this.mousePosition.x - this.currentObjectFixedPosition.x);
            this.drawCircle(
              this.layerContext,
              this.currentObjectFixedPosition,
              r,
              this.props.circle.size,
              this.props.activeColor,
              this.props.activeColor,
              this.props.circle.fill
            );
          } else {
            this.clear("layer");
            const r = Math.abs(this.mousePosition.x - this.currentObjectFixedPosition.x);
            this.drawCircle(
              this.canvasContext,
              this.currentObjectFixedPosition,
              r,
              this.props.circle.size,
              this.props.activeColor,
              this.props.activeColor,
              this.props.circle.fill
            );
            this.currentObjectState = 0;
          }
        }

        break;

      case config.items["rectangle"].id:
        if (this.currentObjectState === 0) {
          if (this.isMouseDown) {
            this.currentObjectFixedPosition.newPosition(this.mousePosition.x, this.mousePosition.y);
            this.currentObjectState += 1;
          }
        } else if (this.currentObjectState === 1) {
          if (this.isMouseDown) {
            this.clear("layer");
            const length = this.mousePosition.x - this.currentObjectFixedPosition.x;
            const height = this.mousePosition.y - this.currentObjectFixedPosition.y;
            this.drawRectangle(
              this.layerContext,
              this.currentObjectFixedPosition,
              length,
              height,
              this.props.rectangle.size,
              this.props.activeColor,
              this.props.activeColor,
              this.props.rectangle.fill
            );
          } else {
            this.clear("layer");
            const length = this.mousePosition.x - this.currentObjectFixedPosition.x;
            const height = this.mousePosition.y - this.currentObjectFixedPosition.y;
            this.drawRectangle(
              this.canvasContext,
              this.currentObjectFixedPosition,
              length,
              height,
              this.props.rectangle.size,
              this.props.activeColor,
              this.props.activeColor,
              this.props.rectangle.fill
            );
            this.currentObjectState = 0;
          }
        }

        break;

      default: {
        return;
      }
    }

    requestAnimationFrame(this.update);
  };

  componentDidMount() {
    // Setting up the canvas and layer
    this.setCanvas();
    this.setLayer();

    this.setCanvasContext();
    this.setLayerContext();

    // Settings up events listeners
    this.setEventListeners();

    this.update();
  }

  componentDidUpdate() {
    this.setCanvasContext();
  }

  setCanvas() {
    // Creating canvas
    this.canvas = this.canvasRef.current;

    // Getting the width and height of the parent element
    const parentHTMLElement = this.canvas.parentElement;
    const parentHTMLElementStyles = getComputedStyle(parentHTMLElement);

    // Creating width and height variables, based on the parent element's properties
    const w = parseInt(parentHTMLElementStyles.getPropertyValue("width"), 10);
    const h = parseInt(parentHTMLElementStyles.getPropertyValue("height"), 10);

    // Setting up the canvas' height and width
    this.canvas.width = w * this.PIXEL_RATIO;
    this.canvas.height = h * this.PIXEL_RATIO;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.canvas.getContext("2d").setTransform(this.PIXEL_RATIO, 0, 0, this.PIXEL_RATIO, 0, 0);
  }

  setLayer() {
    // Creating layer
    this.layer = this.layerRef.current;

    // Getting the width and height of the parent element
    const parentHTMLElement = this.layer.parentElement;
    const parentHTMLElementStyles = getComputedStyle(parentHTMLElement);

    // Creating width and height variables, based on the parent element's properties
    const w = parseInt(parentHTMLElementStyles.getPropertyValue("width"), 10);
    const h = parseInt(parentHTMLElementStyles.getPropertyValue("height"), 10);

    // Setting up the layer's height and width
    this.layer.width = w * this.PIXEL_RATIO;
    this.layer.height = h * this.PIXEL_RATIO;
    this.layer.style.width = `${w}px`;
    this.layer.style.height = `${h}px`;
    this.layer.getContext("2d").setTransform(this.PIXEL_RATIO, 0, 0, this.PIXEL_RATIO, 0, 0);
  }

  setCanvasContext() {
    // Creating canvas context
    this.canvasContext = this.canvas.getContext("2d");
  }

  setLayerContext() {
    // Creating layer context
    this.layerContext = this.layer.getContext("2d");
  }

  setEventListeners() {
    // Event listeners for mouse movement
    this.canvas.addEventListener("mousedown", () => (this.isMouseDown = true));
    this.canvas.addEventListener("mouseup", () => (this.isMouseDown = false));
    this.canvas.addEventListener("mousemove", event => this.mouseMovmentHandler(event));
  }

  mouseMovmentHandler(event) {
    // Updating the current mouse position
    this.updateMousePosition(event);
  }

  updateMousePosition({ offsetX, offsetY }) {
    this.mousePosition.newPosition(offsetX, offsetY);
  }

  setWidth(context, width) {
    context.lineWidth = width;
  }

  setColor(context, fillColor, strokeColor) {
    context.fillStyle = fillColor;
    context.strokeStyle = strokeColor;
  }

  drawLine(context, vector1, vector2, width, color) {
    context.beginPath();
    this.setWidth(context, width);
    this.setColor(context, color, color);
    context.moveTo(vector1.x, vector1.y);
    context.lineTo(vector2.x, vector2.y);
    context.stroke();
    context.closePath();
  }

  drawCircle(context, vector, radius, width, fillColor, strokeColor, fill = false) {
    context.beginPath();
    this.setWidth(context, width);
    this.setColor(context, fillColor, strokeColor);
    context.arc(vector.x, vector.y, radius, 0, Math.PI * 2);

    if (fill) context.fill();
    else context.stroke();

    context.closePath();
  }

  drawRectangle(context, vector, length, height, width, fillColor, strokeColor, fill = false) {
    context.beginPath();
    this.setWidth(context, width);
    this.setColor(context, fillColor, strokeColor);
    context.rect(vector.x, vector.y, length, height);

    if (fill) context.fill();
    else context.stroke();

    context.closePath();
  }

  drawText(context, vector, text, font, size, fillColor, strokeColor, fill = true) {
    context.beginPath();
    this.setColor(context, fillColor, strokeColor);
    context.font = `${size}px ${font}`;

    if (fill) context.fillText(text, vector.x, vector.y);
    else context.strokeText(text, vector.x, vector.y);

    context.closePath();
  }

  clear(type) {
    type === "canvas"
      ? this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
      : this.layerContext.clearRect(0, 0, this.layer.width, this.layer.height);
  }

  render() {
    return (
      <div className="workspace">
        <canvas className="canvas" ref={this.canvasRef}></canvas>
        <canvas className="layer" ref={this.layerRef}></canvas>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeItemId: state.activeItemId,
    activeColor: state.activeColor,

    pencil: state.items.pencil,
    brush: state.items.brush,
    eraser: state.items.eraser,
    line: state.items.line,
    rectangle: state.items.rectangle,
    circle: state.items.circle,
  };
};

export default connect(mapStateToProps)(Workspace);
