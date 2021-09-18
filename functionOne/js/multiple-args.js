

const PI = 3.1415
/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

function getArea(width, length, unit){
  const area = width * length;
  return `${area} ${unit}`;
}

//const getArea = (width, length, unit) => {
 // const area = width * length;
 // return `${area} ${unit}`;
//};

//alert(getArea(30,70,"sqft"));
console.log(getArea(30,70,"sqft"));
/**
 * 
 * @param {number} radius - The radius of an area cone.
 * @param {number} length - The lenth of an area cone.
 * @param {string} unit - The unit of measurement.
 * @returns {String} - 
 */

const getAreaCone = (radius, length, unit) => {
  const areaCone = radius * length * PI ;
  return `${areaCone} ${unit}`;
};

console.log(getAreaCone(6, 6,"Cm"));
