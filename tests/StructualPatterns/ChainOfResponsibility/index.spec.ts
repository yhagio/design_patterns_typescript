import AddNumbers from '../../../src/StructualPatterns/ChainOfResponsibility/AddNumbers';
import SubtractNumbers from '../../../src/StructualPatterns/ChainOfResponsibility/SubtractNumbers';
import MultNumbers from '../../../src/StructualPatterns/ChainOfResponsibility/MultiplyNumbers';
import DivideNumbers from '../../../src/StructualPatterns/ChainOfResponsibility/DivideNumbers';
import Numbers from '../../../src/StructualPatterns/ChainOfResponsibility/Numbers';

describe('Chain Of Responsibility', () => {
  test('Test calculation', () => {
    // Here I define all of the objects in the chain
    const chain1 = new AddNumbers();
    const chain2 = new SubtractNumbers();
    const chain3 = new MultNumbers();
    const chain4 = new DivideNumbers();

    // Here I tell each object where to forward the
    // data if it can't process the request
    chain1.setNextChain(chain2);
    chain2.setNextChain(chain3);
    chain3.setNextChain(chain4);

    // Define the data in the Numbers Object
    // and send it to the first Object in the chain
    const request = new Numbers(4, 2, 'add');
    expect(chain1.calculate(request)).toEqual('4 + 2 = 6');

    const request2 = new Numbers(4, 2, 'sub');
    expect(chain1.calculate(request2)).toEqual('4 - 2 = 2');

    const request3 = new Numbers(4, 2, 'mult');
    expect(chain1.calculate(request3)).toEqual('4 * 2 = 8');

    const request4 = new Numbers(4, 2, 'div');
    expect(chain1.calculate(request4)).toEqual('4 / 2 = 2');
  });
});
