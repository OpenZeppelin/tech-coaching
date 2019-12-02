## Python Reference

### Overview

As part of the OpenZeppelin tech coaching we have been learning introductory python scripts.

This document simply tracks the topics we've covered so it can be used as a reference and self-study guide.

### The interpreter

Open this link: https://repl.it/languages/python3

You should be looking at a website with three columns. The one on the right is a **python interpreter**. It lets you talk to computers through the programming language **python** with a series of **commands**.

Type the following line into the interpreter:
> 1 + 1

It should respond with the number `2`. So you can use the interpreter as a calculator.

---
Spend a few minutes trying different calculations. Note that:
* You can use addition (+), subtraction (-), multiplication (*) and division (/)
* You can use two asterisks (**) to indicate exponentiation eg. 3 ** 2 means "3 squared" 
* It will obey the usual order-of-operations rules eg. 1 + 3 * 4 evaluates to 13
* You can add brackets to control the order of operations eg (1 + 3) * 4 evaluates to 16
* Spaces are ignored. Use them however you choose for convenience or aesthetics. :warning: This fact is not always true in python. We will see cases where the spaces matter.
---

### Strings

It is tradition that the very first program you write in a new language simple writes the phrase "Hello world" to the screen. Try this:

> "Hello world"

You need to include the quotation marks, but it doesn't matter if you use single quotes (') or double quotes ("). The quotes indicate that you are creating a **string**, which is just a sequence of text characters. This tells the python interpreter: "this is not an instruction. I'm just writing text".

---
Compare the difference between the following commands:
> 20 / 0

> "20 / 0"

> 20 - * 3

> "20 - * 3"
---

You can "add" two strings together, and the interpreter will just concatenate them. Try:

> "Hello " + "world"

You can't add a string to a number:

> "Hello " + 4

But you can convert a number to a string, which lets you add them:

> str(4)

> "Hello " + str(4)

Notice that last command contains an embedded command. Specifically:
* the python interpreter sees the command `"Hello " + str(4)`
* it evaluates the expression `str(4)` and then replaces it with the result: `"4"`
* it now sees the command `"Hello " + "4"`
* it concatenates the two values and displays the result: `"Hello 4"`

You can embed as many commands as you want (which could, in turn, have embedded commands) inside the final expression and the interpreter will keep performing this evaluate-and-replace move until it is left with a single indivisible expression.

Try:
> "Hello " + str(4 * 5) + str(7 * 3 - 2) + " World"
