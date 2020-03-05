let Circle = function (radius) {
    this.radius = radius;

    this.getRadius = function () {
        return this.radius;
    };

    this.getArea = function () {
        return Math.PI * radius * radius;
    };

    this.setRadius = function (new_radius) {
        this.radius = new_radius;
    }
};

let circle = new Circle(2);
let radius1 = circle.getRadius();
let area1 = circle.getArea();

alert('radius :' + radius1 + '; area :' + area1);

circle.setRadius(9);
console.log(circle.getArea());