# Factory Method

### Intent

- Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
- Defining a "virtual" constructor.
- The `new` operator considered harmful.

### When to use

- When you don't know ahead of time what class object you need
- When all of the potential classes are in the same subclasses hierarchy
- To centralize class selection code
- When you don't want the user to have to know every subclass
- To encapsulate object creation
