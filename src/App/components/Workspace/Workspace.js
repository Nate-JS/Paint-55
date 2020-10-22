import React, { Component } from 'react';
import './Workspace.css';
import Vector from './utils/Vector';

// Workspace component is resposiable for drawing defferent elements on the screen
// It uses canvas API to draw elements and the stuff like that
export default class Workspace extends Component {
    constructor(props) {
        // Calling parent`s constructor function
        super(props);

        // All objects that will be drawn
        this.objects = [];

        // Creating refs
        this.canvasRef = React.createRef();

    }

    draw() {
        // Drawing the first element
        this.drawCircle(new Vector(500, 500), 50, 5, "lightblue", "black", false);
    }

    componentDidMount() {
        // Setting up the canvas
        this.setCanvas()
    }

    setCanvas() {
        // Creating canvas
        this.canvas = this.canvasRef.current;

        // Creating context
        this.context = this.canvas.getContext('2d');

        // Getting the width and height of the parent element
        const parentHTMLElement = this.canvas.parentElement;
        const parentHTMLElementStyles = getComputedStyle(parentHTMLElement);

        // Creating width and height variables, based on the parent element's properties
        const w = parseInt(parentHTMLElementStyles.getPropertyValue("width"), 10);
        const h = parseInt(parentHTMLElementStyles.getPropertyValue("height"), 10);

        // Setting up the canvas' height and width
        this.canvas.width = w
        this.canvas.height = h
        this.canvas.style.width = `${w}px`;
        this.canvas.style.height = `${h}px`;
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








