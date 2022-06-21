# Builder pattern

## What is Builder Pattern

Builder pattern is a creational design pattern that let's you construct
complex objects step-by-step.

Builder pattern can be defined as a designed pattern that seprates the construction of complex object
from it's representation.

### What is Construction and Representation of an Object?

**Representation**: This step consist of how our product looks like at the end when it's ready. In this step we
combine already
constructed parts.
  <details>
  <summary>example</summary>
     * For instance first there is a bread,then patty on top,followed by some veggies on top, then some sauces in the end ,finished with final 
  layer of bread.
   </details>

**Construction**: whereas, this step means how the parts of the products are actually made. This
may include multiple steps.
   <details>
<summary>example</summary>
* For example baking a bread ,making a burger patty, making different sauces, cutting of 
vegetables and others.
</details>

## When to use Builder Pattern

* Builder pattern should be used whenever a complex constructor is involved.
* When object needs to be made in steps.
* When we need to create an ```immutable``` class.
* When we have to create an object which has multiple optional parameters.

## Builder Design pattern implementation/ How to solve?

The Builder design pattern describes how to solve such problems:

* A class delegate Object creation to a builder object instead of creating the object directly.
* Encapsulates creating and assembling the parts of a complex object in a seprate Builder object.

A builder class can create different representation of complex object.

## How does builder pattern works?

1. **Product** : This is the part of the code is the actual object that we are trying to build. In our case it would
   be ``` the burger```.
2. **Build** : It will contain the general methods needed to build the product.
3. **Executor**: This is the important part which actually calls the builder methods to create the product. This in our
   case would be the ```Employee``` who prepares the burger for us. He/She will invoke appropriate method for
   the ```BurgerBuilder```.

## Implementation of Builder Pattern