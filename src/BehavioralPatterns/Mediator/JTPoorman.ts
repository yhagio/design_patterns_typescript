import Colleague from './Colleague';
import IMediator from './Mediator';

export default class JPPoorman extends Colleague {
  constructor(newMediator: IMediator) {
    super(newMediator);
  }
}
