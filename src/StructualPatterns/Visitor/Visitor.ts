import Visitable from './Visitable';

// The visitor pattern is used when you have to perform
// the same action on many objects of different types

export default interface IVisitor {
  // Created to automatically use the right
  // code based on the Object sent
  // Method Overloading

  visit(visitable: Visitable): number;
}
