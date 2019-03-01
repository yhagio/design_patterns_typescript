# Builder

- Used to create objects made from a bunch of other objects
  - When you want to build an object made up from other objects
  - When you want the creation of these parts to be independent of the main object
  - Hide the creation of the parts from the client so both aren't dependent
  - The builder knows the specifics and nobody else does

### Intent

- It separates the construction of a complex object from its representation so that the same construction process can create different representations.
- It parses a complex representation, create one of several targets.

## Reference

- https://sourcemaking.com/design_patterns/builder
