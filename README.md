# CLEAN CODE ARCHITECTURE (Written in Typescript)

This repository is for documentation of clean code architecture

## AUTHOR

Marvin Petate

## PURPOSE

This gives us well understanding of applying the object oriented design that written in typescript, the examples are based from the understanding of different articles, such as [Geeks For Geek] and [Clean Code Architecture]

## EXAMPLES

- Relationships

  - Aggregation

    - Aggregation is a relationship that comes under object-oriented programming, classifying an instance of a class as `has-a`. It’s a form of association with weaker relationship strength, whereby the lifetime of the contained object (part) is not controlled based on the lifetime of the container object (whole).
    - Source: [aggregation.ts]

  - Association

    - Definition: Association is the cardinal concept in object-oriented programming that describes the relationship between two independent classes. Association can be viewed as describing a `uses-a` relationship where an object uses, or in any way interacts with another object.
    - Source: [association.ts]

  - Composition

    - Composition is a core concept in object-oriented programming that refers to the relationship `part-of` between classes. It is a stronger form of association in which the contained objects’ lifecycle is strongly associated with the container object’s lifecycle.
    - Source: [composition.ts]

  - Dependency

    - Dependencies has a client and supplier entities, where the supplier gives information to client, like information, methods or business logics. whatever changes from the supplier might affect the client.
    - Source: [dependency.ts]

  - Inheritance/Generationlization

    - A inheritance or generalization relationship can exist between a specific element and a more general element of the same kind. The specific element inherits the attributes, relationships, and other characteristics from the general element. Types, undifferentiated classes, implementation classes, and interfaces can all make use of generalized relationships.
    - Source: [inheritance.ts]

- SOLID Principle
  - (soon to update)

[Clean Code Architecture]: https://github.com/GunterMueller/Books-3/blob/master/Clean%20Architecture%20A%20Craftsman%20Guide%20to%20Software%20Structure%20and%20Design.pdf
[Geeks For Geek]: https://www.geeksforgeeks.org/association-composition-aggregation-java/
[association.ts]: ./relationships/association.ts
[aggregation.ts]: ./relationships/aggregation.ts
[dependency.ts]: ./relationships/dependency.ts
[composition.ts]: ./relationships/composition.ts
[inheritance.ts]: ./relationships/inheritance.ts
