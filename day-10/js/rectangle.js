var topLeft = new Point(50, 50);
var rectSize = new Size(200, 100);

var rect = new Rectangle(topLeft, rectSize);

var path = new Path.Rectangle(rect, 4);


path.fillColor = 'beige';




console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
console.log(rect.point); // { x: 10, y: 20 }
console.log(rect.size); // { width: 200, height: 100 }
rect.strokeColor = 'red';