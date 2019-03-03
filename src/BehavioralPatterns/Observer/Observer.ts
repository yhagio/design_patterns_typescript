export interface IObserver {
  update(ibmPrice: number, applePrice: number, googlePrice: number): void;
}
