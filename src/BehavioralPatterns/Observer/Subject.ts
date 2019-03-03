import { IObserver } from './Observer';

export interface ISubject {
  register(observer: IObserver): void;
  unregister(observer: IObserver): void;
  notifyObserver(): void;
}
