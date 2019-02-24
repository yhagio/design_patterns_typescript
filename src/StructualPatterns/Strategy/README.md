# Strategy

### Intent

- Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.
- Capture the abstraction in an interface, bury implementation details in derived classes.

### When to use

When you want to define a class that will have one behaviour that is similar to
the other behaviours in a list.

I want the class object to be able to choose from:

- Cant fly
- Fly

When you need to use one of several behaviours dynamically
