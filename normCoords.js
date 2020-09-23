/*
normalizes browser window coordinates into Cartesian coordinates.
parameters:
    arg: an object with these key/value pairs:
        coords: an array of arrays of [x,y] coordinate pairs,
        height: the pixel height of the User-drawn graph area,
        coordQuant: the quantity of coordinate pairs,
        yMin: the smallest possible y value,
        yMax: the largest possible y value.
Returns an object, newCoords, which consists of
    coordinate pairs, formatted thusly: {x: y, x: y, x: y, ...}
*/
function normCoords(arg)
{
    let newCoords = {};
    let x, y, rawY, scaleFactor, yRatio;
    /*
    Iterate over all coords, pushing appropriately scaled
    coordinates into newCoords.
    */
    for (let i = 0; i < arg.coordQuant; i++)
    {
        // AI algo is expecting x to be an index.
        x = i;
        // Upside down y coord in an HTML element in a browser window.
        rawY = arg.coords[i][1];
        // (Percent of max height on chart) divided by 100.
        yRatio = 1 - (rawY / arg.height);
        // Difference between the largest and smallest [possible?] y values.
        scaleFactor = arg.yMax - arg.yMin;
        // The actual y value chosen by the User at one coordinate.
        y = yRatio * scaleFactor + arg.yMin;
        // x and y belong together.
        newCoords[x] = y;
    }
    return(newCoords);
}



