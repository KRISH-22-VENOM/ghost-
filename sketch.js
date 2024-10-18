function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  
  // Array of circle diameters
  let diameters = [350, 300, 250, 200, 150, 100, 50];
  
  // Array of corresponding fill colors (shades of pink)
  let colors = [
    [139, 21, 80],     // Dark Pink
    [199, 21, 133],    // Medium Dark Pink
    [255, 20, 147],    // Medium Pink
    [255, 105, 180],   // Light Pink
    [255, 182, 193],   // Lighter Pink
    [255, 192, 203],   // Very Light Pink
    [255, 209, 220]    // Soft Pink
  ];
  
  noStroke();
  
  for (let i = 0; i < diameters.length; i++) {
    fill(colors[i][0], colors[i][1], colors[i][2]);
    circle(200, 200, diameters[i]);
  }
}
