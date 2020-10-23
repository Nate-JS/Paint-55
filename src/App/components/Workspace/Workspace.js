import React, { Component } from 'react';
import './Workspace.css';
import Vector from './utils/Vector';

import { connect } from 'react-redux';

// The Workspace component is resposiable for drawing defferent elements on the screen
// It uses canvas API to draw elements and the stuff like that

class Workspace extends Component {
    constructor(props) {
        // Greeting ;)
        console.log('%c THE WORKSPACE IS PERFECT!', 'font-size: 3rem; color: blue');

        // Calling parent`s constructor function
        super(props);

        // Declaring properties
        this.objects = [];
        this.isMouseDown = false;
        this.mousePosition = new Vector(null, null);

        // Getting current item, color, and size
        this.updateDrawingProperties();

        // Creating refs
        this.canvasRef = React.createRef();

        // Getting the pixet ratio
        this.PIXEL_RATIO = (function () {
            const ctx = document.createElement("canvas").getContext("2d"),
                dpr = window.devicePixelRatio || 1,
                bsr = ctx.webkitBackingStorePixelRatio ||
                    ctx.mozBackingStorePixelRatio ||
                    ctx.msBackingStorePixelRatio ||
                    ctx.oBackingStorePixelRatio ||
                    ctx.backingStorePixelRatio || 1;

            return dpr / bsr;
        })();


    }

    updateDrawingProperties() {
        this.selectedItem = this.props.selectedItem;
        this.selectedColor = this.props.selectedColor;
        this.selectedWidth = this.props.selectedWidth;
    }

    draw() {
        // Drawing the first element
        this.drawCircle(this.mousePosition, 20, 7, "red", "black", false);

    }

    componentDidMount() {
        // Setting up the canvas
        this.setCanvas();
        this.setContext();

        // Settings up events listeners
        this.setEventListeners()

    }

    componentDidUpdate() {
        this.setContext();
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

    setContext() {
        // Creating context
        this.context = this.canvas.getContext('2d');
    }

    setEventListeners() {
        // Event listeners for mouse movement
        this.canvas.addEventListener('mousedown', () => this.isMouseDown = true);
        this.canvas.addEventListener('mouseup', () => this.isMouseDown = false);
        this.canvas.addEventListener('mousemove', (event) => this.mouseMovmentHandler(event))
    }

    mouseMovmentHandler(event) {
        // Updating the current mouse position
        this.updateMousePosition(event);

        // update
        this.updateDrawingProperties()

        // Draw
        this.draw()
    }

    updateMousePosition({ offsetX, offsetY }) {
        this.mousePosition.newPosition(offsetX, offsetY);
    }

    setWidth(width) {
        this.context.lineWidth = width;
    }

    setColor(fillColor, strokeColor) {
        this.context.fillStyle = fillColor;
        this.context.strokeStyle = strokeColor;
    }

    drawLine(vector1, vector2, width, color) {
        this.context.beginPath()
        this.setWidth(width)
        this.setColor(color)
        this.context.moveTo(vector1.x, vector1.y)
        this.context.lineTo(vector2.x, vector2.y)
        this.context.stroke()
        this.context.closePath()
    }

    drawCircle(vector, radius, width, fillColor, strokeColor, fill = false) {
        this.context.beginPath()
        this.setWidth(width)
        this.setColor(fillColor, strokeColor)
        this.context.arc(vector.x, vector.y, radius, 0, Math.PI * 2)

        if (fill)
            this.context.fill()
        else
            this.context.stroke()

        this.context.closePath()
    }

    drawRectangle(vector, length, height, width, fillColor, strokeColor, fill = false) {
        this.context.beginPath()
        this.setWidth(width)
        this.setColor(fillColor, strokeColor)
        this.context.rect(vector.x, vector.y, length, height)

        if (fill)
            this.context.fill()
        else
            this.context.stroke()

        this.context.closePath()
    }

    drawText(vector, text, font, size, fillColor, strokeColor, fill = true) {
        this.context.beginPath()
        this.setColor(fillColor, strokeColor)
        this.context.font = `${size}px ${font}`;

        if (fill)
            this.context.fillText(text, vector.x, vector.y)
        else
            this.context.strokeText(text, vector.x, vector.y)

        this.context.closePath()
    }

    clear() {
        this.context.clearRect(0, 0, this.w, this.h)
    }

    render() {
        return (
            <div className="workspace">
                <canvas className="canvas" ref={this.canvasRef}></canvas>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem,
        selectedColor: state.selectedColor,
        selectedWidth: state.selectedWidth
    }
}


export default connect(mapStateToProps)(Workspace);




