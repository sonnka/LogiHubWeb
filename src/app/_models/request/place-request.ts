export class PlaceRequest {
  placeNumber: string;
  address: string;
  minWidth: number;
  minHeight: number;
  minLength: number;
  minWeight: number;
  maxWidth: number;
  maxHeight: number;
  maxLength: number;
  maxWeight: number;
  hourlyPay: number;

  constructor(placeNumber: string, address: string, minWidth: number, minHeight: number,
              minLength: number, minWeight: number, maxWidth: number, maxHeight: number,
              maxLength: number, maxWeight: number, hourlyPay: number) {
    this.placeNumber = placeNumber;
    this.address = address;
    this.minWidth = minWidth;
    this.minHeight = minHeight;
    this.minLength = minLength;
    this.minWeight = minWeight;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.maxLength = maxLength;
    this.maxWeight = maxWeight;
    this.hourlyPay = hourlyPay;
  }
}
