export interface Car {
  id?: string;
  brand: string;
  model: string;
  pricePerDay: number;
  pricePerKm: number;
  availability: {
    maxDuration: number;
    maxDistance: number;
  }
}