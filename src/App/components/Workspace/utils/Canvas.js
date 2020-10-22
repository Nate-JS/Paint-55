const PARENT_ELEMENT_ID = "workspace"

class Canvas {
    constructor() {
        this.setSizes();
        this.creatHTMLElement();
        this.setContext();
    }

    creatHTMLElement() {
        // Creating the canvas element
        this.HTMLElement = document.createElement('canvas');
        this.HTMLElement.id = 'canvas';
        this.HTMLElement.width = this.w;
        this.HTMLElement.height = this.h;

        // Pushing the canvas element to the parent element
        this.parentHTMLElement.appendChild(this.HTMLElement);
    }

    setSizes() {
        // Getting the width and height of the parent element
        this.parentHTMLElement = document.getElementById(PARENT_ELEMENT_ID);
        this.parentHTMLElementStyles = getComputedStyle(this.parentHTMLElement);

        // Creating width and height variables, based on the parent element's properties
        this.w = parseInt(this.parentHTMLElementStyles.getPropertyValue("width"), 10);
        this.h = parseInt(this.parentHTMLElementStyles.getPropertyValue("height"), 10);
    }

    setContext() {
        this.context = this.HTMLElement.getContext('2d');
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
}

export default Canvas;