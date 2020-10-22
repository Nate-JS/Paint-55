class Vector {
    constructor(x = null, y = null) {
        this.x = x;
        this.y = y;
        this.magnitude = Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    newPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    subtract(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    }

    scale(number) {
        this.x *= number;
        this.y *= number;
    }

}

export default Vector;