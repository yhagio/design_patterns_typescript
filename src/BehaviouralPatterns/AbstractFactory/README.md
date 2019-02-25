# Abstract Factory

### Intent

- Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
- A hierarchy that encapsulates: many possible "platforms", and the construction of a suite of "products".
- The `new` operator considered harmful.

### What is it

- It provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### What can you do with it

- Allows you to create families of related objects without specifying a concrete class
- Use when you have many objects that can be added, or changed dynamically during runtime.
- You can model anything you can think of and have those objects interact through common interface.

But, can be very complicated, so watch out!

## Reference

- https://sourcemaking.com/design_patterns/abstract_factory
- https://www.youtube.com/watch?v=xbjAsdAK4xQ&t=658s
