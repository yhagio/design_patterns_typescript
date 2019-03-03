import Colleague from './Colleague';
import IMediator from './Mediator';

export default class GormanSlacks extends Colleague {
  constructor(newMediator: IMediator) {
    super(newMediator);
  }
}
