# closure

Closure is form a lexical scope to preserve a reference of variable from the outer scope of function to inner scope of the function. Closure is the function bind with the lexical environment return to the invoked function. 


example

```
function x(){
        a = 9
        function y(){
            console.log(a)
        }
        a= 100
        return y;
    }
```

function is returned with lexical scope the point to the reference variable. so we can get a a var value. and it is not the same value as 9. it get update to 100. because we pass the reference to closure. so, a has 100 when y function invoked.


### Uses of closures:

- module design pattern
- currying
- functions like once
- memoize
- maintaining state in async world
- setTimouts
- iterators
- and many mores..


## Advantages of closures

- attach var to execution context
- provide data encapsulation
- closure can help you maintain the state that you can ue later.
- remove redundant code
- maintain modular code.

## disadvantage of closures

- the variable declared inside a closure is not garbage collected.
- so to many closure slow down your application. this is actually caused by duplication of code in memory.