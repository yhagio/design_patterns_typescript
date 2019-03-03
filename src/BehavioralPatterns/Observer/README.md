# Observer

An object (subject) maintains a list of its dependents (observers) and
notifies them automatically of any state changes, usually by calling one of their methods.

### When to use

When you need many other objects to receive an update when another
object changes.

- Stock market with thousands of stocks needs to send updates to objects
  representing individual stocks

- The Subject (publisher) sends many stocks to the Observers

- The Observers (subscribers) takes the ones they want and use them

### Pros

Loose coupling

- The Subject doesn't need to know anything about the Observers

### Cons

The Subject may send updates that don't matter to the Observer
