const arguments = process.argv.slice(2);

class Circle {
    constructor(radius)
    {
        this.radius = radius;
        this.area = Math.PI * (radius**2);
    }
}

let circle = new Circle(arguments[0]*1);

console.log(
    `Yarıçapı ${circle.radius} olan dairenin alanı: ${circle.area}`
)

