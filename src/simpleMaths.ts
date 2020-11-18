export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}
export function calcRads(degrees:number): number {
    return (degrees / 360) * Math.PI*2
}




