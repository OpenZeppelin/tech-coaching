## Python Reference

### Overview

As part of the OpenZeppelin tech coaching we have been learning introductory python scripts.

This document simply tracks the topics we've covered so it can be used as a reference and self-study guide.

Always remember: programming is a team game - feel free to ask questions / clarifications at any time.

### The interpreter

Open this link: https://repl.it/languages/python3

You should be looking at a website with three columns. The one on the right is a **python interpreter**. It lets you talk to the website's computer through the programming language **python** with a series of **commands**.

Type the following line into the interpreter:
```python
1 + 1
```

It should respond with the number `2`. You can use the interpreter as a calculator.

---

Spend a few minutes trying different calculations. Note that:
* You can use addition (+), subtraction (-), multiplication (*) and division (/)
* You can use two asterisks (\*\*) to indicate exponentiation eg. 3 \*\* 2 means 3<sup>2</sup>
* It will obey the usual order-of-operations rules eg. 1 + 3 * 4 evaluates to 13
* You can add brackets to control the order of operations eg (1 + 3) * 4 evaluates to 16
* Spaces are ignored. Use them however you choose for convenience or aesthetics. 
* :warning: This fact is not always true in python. We will see cases where the spaces matter.

---

### Strings

It is tradition that the very first program you write in a new language simple writes the phrase "Hello world" to the screen. Try this:

```python
"Hello world"
```

You need to include the quotation marks, but it doesn't matter if you use single quotes (') or double quotes ("). The quotes indicate that you are creating a **string**, which is just a sequence of text characters. This tells the python interpreter: "this is not an instruction. I'm just writing text".

---
Compare the difference between the following commands:
```python
20 / 0
"20 / 0"
20 - * 3
"20 - * 3"
```
---

You can "add" two strings together, and the interpreter will just concatenate them. Try:

```python
"Hello " + "world"
```

You _can't_ add a string to a number:

```python
"Hello " + 4
```

But you can first convert the number to a string

```python
str(4)
```

This lets you add it to other strings:

```python
"Hello " + str(4)
```

Notice that last command contains an embedded command. Specifically:
* the python interpreter sees the command `"Hello " + str(4)`
* it evaluates the expression `str(4)` and then replaces it with the result: `"4"`
* it now sees the command `"Hello " + "4"`
* it concatenates the two values and displays the result: `"Hello 4"`

You can embed as many commands as you want (which could, in turn, have embedded commands) inside the final expression and the interpreter will keep performing this evaluate-and-replace move until it is left with a single indivisible expression.

Try:
```python
"Hello " + str(4 * 5) + str(7 * 3 - 2) + " World"
```
---

### Variables

What if you wanted to calculate the number of seconds in 50 days? You could write:

```python
50 * 24 * 60 * 60
```

This is better than the calculator app since you can see the whole calculation and you can easily go back and change a value if you made a mistake, but if you saw that in isolation it would be hard to figure out what's going on. Instead, we can assign each of the numbers to a **variable** that has a nice descriptive name.

```python
secondsPerMinute = 60
minutesPerHour = 60
hoursPerDay = 24
secondsInFiftyDays = 50 * hoursPerDay * minutesPerHour * secondsPerMinute
```

These commands are executed in order. After the first one, whenever the interpreter sees the variable `secondsPerMinute`, it will replace it with the number 60. Isn't that much clearer?


If you prefer, you could complete part of the calculation at each step:

```python
secondsPerMinute = 60
secondsPerHour = 60 * secondsPerMinute
secondsPerDay = 24 * secondsPerHour
secondsInFiftyDays = 50 * secondsPerDay
```

There are usually lots of ways to achieve the same result. The strategy I recommend is to pick the simplest way that comes to mind. You can always refine it later to make it more elegant. 

---

### Writing scripts

You may notice that your interpreter is now filled with junk. If you've followed along so far, you now have a large number of variables that you no longer care about.

Before going any further, let's just take the last set of instructions and copy them to the middle column of the screen. This is the `main.py` file. It should look like:

```python
secondsPerMinute = 60
secondsPerHour = 60 * secondsPerMinute
secondsPerDay = 24 * secondsPerHour
secondsInFiftyDays = 50 * secondsPerDay
```

Now when you press the green "run" button, it will clear the interpreter and then run the script. This simply executes each line one at a time, as if you had typed them directly into the interpreter. A script is like a recipe - you write down the steps that you want the computer to follow, and then it will do them all without any further guidance. It may not be obvious yet, but this is very powerful. If you want to change anything in the script, just edit the `main.py` file and press the "run" button again.

You have probably noticed that you didn't get any feedback. That's a good thing - if the interpreter informed you about every line it would get annoying very quickly. You can confirm that it did indeed run the script by typing `secondsInFiftyDays` into the interpreter -  it should display the result.

In order to display the value automatically, add the following line to your script:
```python
print(secondsInFiftyDays)
```

When the interpreter reaches that line, it will display the value of the variable. Note that the term `print` in this context means "write to the screen" - that's a historical accident that programmers just get used to. We will see later that you can also "print to a file", "print to a memory location" and (rarely) even "print to a printer".

#### Achievement Unlocked: write a script

---

**Challenge:** Instead of just printing the final result, print a string that explains what the number represents. For example the output could look like:

>There are 4320000 seconds in 50 days

---

### Overwriting variables

Let's go back to the interpreter (run the script first). Notice that all the variables from the script are still defined (just write a variable name on the interpreter and you should get its value).

Now here's an interesting question: what happens to the variables if you change one of them? For example, write the command into the interpreter:
```python
secondsPerMinute = 100
```

It probably won't surprise you to find the variable now has a new value. It might surprise you to find the other ones are still the same. For example, `secondsPerHour` is still 3600. This is because the order of the steps matter. When we defined `secondsPerHour` in terms of `secondsPerMinute`, the interpreter did not create a lasting relationship between the two variables. Instead, it simply replaced `secondsPerMinute` with its last value (which was 60 at the time). Let's go through the steps that the interpreter took one at a time:
```python
1. secondsPerMinute = 60
2. secondsPerHour = 60 * secondsPerMinute
   -  secondsPerHour = 60 * 60
   -  secondsPerHour = 3600
... later ...
n. secondsPerMinute = 100
```

---

In the `main.py` file, try every possible combination of the following 3 lines (there are 6 different orders) and re-run the script:
```python
x = 10
y = x + 20
x = 7
```

Make sure you understand what is happening at each step.

---

### Functions

So how do you set up a relationship between variables? You actually can't with **variables** but instead you can use **functions**. A function is just a pre-defined segment of code. The interpreter will remember the code but won't run it until you say so. Replace your script with the following :warning: this is a poor coding style but I want to start with it so you can clearly see what is going on.

```python
def printVariables():
  y = x + 10
  print(x)
  print(y)

x = 5
printVariables()

x = x + 1
printVariables()
```

Note that the whitespace matters here. Lines 2-4 should be indented so they are clearly inside the `printVariables` function.

Let's walk through the code to see what's going on. I encourage you to take the time to really make sure you can see what each step does, and how the computer is just mindlessly following the rules.
* the first four lines define a function. This is code that will be run whenever we write the command `printVariables()`
* if it ran immediately, the interpreter would complain that `x` is not defined. Since it hasn't run yet, it doesn't matter.
* In line 6 we create the variable `x` with the value 5
* Line 7 runs the function. That means the interpreter goes back and runs line 2-4 in order:
   * set `y` to `x + 10` (15)
   * print `x` (5)
   * print `y` (10)
* After running the function, we go back to where we were in the script (line 8)
* Lines 9 looks a little weird but it's the same evaluate-and-replace rule. It evaluates `x + 1` (6) and then sets `x` to that value. It's the same as writing `x = 6`
* Line 10 runs the function again. The interpreter goes back and runs line 2-4 in order, but this time `x` is 6:
   * set `y` to `x + 10` (16)
   * print `x` (6)
   * print `y` (16)

#### Achievement Unlocked: think like a computer

---

Before we move on, I'd like to address the poor code style. When reading/writing code, we want each function to be completely predictable. Lines 7 and 10 both call `printVariables()`, and they look like they're doing the same thing, but their behavior is very different. That's because the function depends on the value of `x`, which can change.

Wherever possible, it's preferable to explicitly declare the inputs and outputs of the function. Consider the following script:

```python
def coffeesPerWeek( coffeesPerDay ):
  return coffeesPerDay * 7

print( coffeesPerWeek(1) )
print( coffeesPerWeek(2) )
print( coffeesPerWeek(3) )
print( coffeesPerWeek(4) )
```

There are a few things going on, so let's consider them individually:
- In the `coffeesPerWeek` function, `coffeesPerDay` is an input variable. It does not exist outside the function (try printing it at the bottom of the script). We call this an **argument** or a **parameter**.
- Each time we call the function, we have to specify the value of the `coffeesPerDay` argument that the function will use  (inside the brackets). In this case, we called the function four times, each with a different value.
- Instead of printing anything, the `coffeesPerWeek` function returns a value. This is the output of the function. We can add to it, assign it to a variable or print it out, just like any other value. In other words, the statement `coffeesPerWeek(2)` can be used exactly like the number `14` - it's the same evaluate-and-replace trick that we've been using this whole time.
- Note that we have now succeeded in creating a permanent relationship between two different values - if we know how many coffees we drink in a day, we can easily retrieve the corresponding number of coffees per week.

### Bonus

In our last session we ended up creating the following script. It's very complex for a beginner's course, but if you're feeling brave, I'd encourage you to try to figure out how it works. 

I haven't told you everything you need to know. Try splitting it into smaller pieces to understand what each part of each line does. Google (or the `#tech-coaching` channel) is your friend.

```python
import time

def progress(activity):
  print('{}...'.format(activity), end='', flush=True)
  time.sleep(3)
  print('\rFinished {}'.format(activity.lower()), flush=True)
  time.sleep(0.5)

progress("Ionizing crystals")
progress("Entering mainframe")
progress("Relaxing")
progress("Deflecting asteroid")
```

### Stdin (Standard Input)

When we have to write a program that needs to do something with text, it can be useful to use `stdin`, also known as "standard input". `stdin` is a special file that we can read from within the Python program. What's special about it is how it allows us to send data to the program in the terminal. If we have a program `main.py` that reads from `stdin`, we can use it in two different and both very useful ways:

```
python main.py < input.txt
echo "my input" | python main.py
```

In order to read from `stdin` from Python, we have to import the `sys` module. Modules are bundles of functionality that we can use for various things. Before using them, we have to import them. In this case, the `sys` module provides functionality for interacting with the system, and readin from the `stdin` file is one such interaction with the system.

```python
import sys
input_lines = sys.stdin.readlines()
```

Using `sys.stdin.readlines()` we get a list of all of the lines sent to `stdin`. We can also use `sys.stdin.read()` to get a single string with the entire input.
