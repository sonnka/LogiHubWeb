export class UpdateTruckRequest {
  width: number;
  height: number;
  length: number;
  weight: number;

  constructor(width: number, height: number, length: number, weight: number) {
    this.width = width;
    this.height = height;
    this.length = length;
    this.weight = weight;
  }
}
