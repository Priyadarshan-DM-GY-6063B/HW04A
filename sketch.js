function setup() {
  createCanvas(550, 550);
  noFill();
  noStroke();
  
  let gridSize = 40;    // Size of each grid cell
  let offset = 10;      // Space between grid cells
  let minShapeSize = 20; // Minimum size for shapes
  let maxShapeSize = 40; // Maximum size for shapes
  
  // Define a palette of unique colors for each grid section
  let uniqueColors = [
    '#FF5733', '#33FF57', '#3357FF', '#F5FF33', '#9C27B0', '#FFC107', 
    '#8E44AD', '#3498DB', '#1ABC9C', '#E74C3C', '#16A085', '#F39C12',
    '#D35400', '#BDC3C7', '#2980B9', '#8E44AD', '#2C3E50', '#7F8C8D',
    '#9B59B6', '#FF6347', '#2ECC71', '#1F77B4', '#F1C40F', '#9B59B6'
  ];
  
  let gridSizeWithOffset = gridSize + offset;
  
  let startX = width / 2 - (gridSizeWithOffset * 4);  // Starting point for the grid (centered)
  let startY = height / 2 - (gridSizeWithOffset * 4); // Same for the y-axis
  
  // Loop to create rows in the grid (10 rows)
  for (let y = 0; y < 10; y++) {
    // Loop to create columns in the grid (10 columns)
    for (let x = 0; x < 10; x++) {
      let colorIndex = (x + y) % uniqueColors.length;  // Cycle through unique colors
      
      // Randomize shape size within a range
      let shapeSize = random(minShapeSize, maxShapeSize);
      
      // Randomize position within cell
      let offsetX = random(-gridSize * 0.2, gridSize * 0.2);
      let offsetY = random(-gridSize * 0.2, gridSize * 0.2);
      
      // Randomize color (pick from a predefined palette)
      let fillColor = random(uniqueColors);
      
      // Randomly rotate shapes
      let rotationAngle = random(TWO_PI); 
      
      // Push for transformation
      push();
      translate(startX + x * gridSizeWithOffset + offsetX, startY + y * gridSizeWithOffset + offsetY);
      rotate(rotationAngle);
      drawShape(shapeSize, fillColor);
      pop();
    }
  }
}

function drawShape(size, color) {
  fill(color);
  let shapeType = int(random(3)); // Randomly choose a shape (circle, rect, or triangle)
  
  if (shapeType === 0) {
    ellipse(0, 0, size, size); // Draw circle
  } else if (shapeType === 1) {
    rectMode(CENTER);
    rect(0, 0, size, size); // Draw square
  } else {
    triangle(-size/2, size/2, 0, -size/2, size/2, size/2); // Draw triangle
  }
}
