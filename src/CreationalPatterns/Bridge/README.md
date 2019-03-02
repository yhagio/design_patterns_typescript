# Bridge

## Intent

- Decouple an abstraction from its implementation so that the two can vary independently.
- Publish interface in an inheritance hierarchy, and bury implementation in its own inheritance hierarchy.
- Beyond encapsulation, to insulation
- Progressively adding functionality while separating out major differences using abstract classes

## When to use

- When you want to be able to change both the abstractions (abstract classes) and concreate classes independently
- When you want the first abstract class to define rules (Abstract TV)
- The concrete class adds additional rules (Concrete TV)
- An abstract class has a reference to the device and it defines abstract methods that will be defined (Abstract Remote)
- The Concrete Remote defines the abstract methods required

### Ref

- https://sourcemaking.com/design_patterns/bridge
- https://www.youtube.com/watch?v=9jIgSsIfh_8
