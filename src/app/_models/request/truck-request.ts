export class TruckRequest {
  number: string;
  width: number;
  height: number;
  length: number;
  weight: number;

  constructor(number: string, width: number, height: number, length: number, weight: number) {
    this.number = number;
    this.width = width;
    this.height = height;
    this.length = length;
    this.weight = weight;
  }
}
