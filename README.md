# cucumber-shouty
Unleash the Power of BDD with Cucumber.


## Gherkin Introduction

```
Scenario: Listener is within range
  Given Lucy is located 15 metres from Sean
  When Sean shouts "free bagels at Sean's"
  Then Lucy hears Sean's message
```

**Scenario** just tells Cucumber we’re about to describe an example that it can execute. Scenario has these three ingredients: a context, an action, and one or more outcomes.

**Given** We’re putting the system into a specific state, ready for the scenario to unfold.

**When** is an action. Something that happens to the system that will cause something else to happen.

**Outcome** It’s the behaviour we expect from the system when this action happens in this context.

## Features
This is the conventional place to store your Gherkin specifications.

Run Test
```
yarn run test
```

When Cucumber runs a step, it looks for a step definition that matches the text in the step. If it finds one, then it executes the code in the step definition.

Undefined` means Cucumber doesn’t know what to do for any of the three steps we wrote in our Gherkin scenario. It needs us to provide some step definitions.

## Step Definitions
Step definitions (Given, When, Then) are the glue between features written in Gherkin and the actual tests implementation.

[Doc Link](https://github.com/cucumber/cucumber-js/blob/416a8e1b04cb265871dff0ea79e5021c56b47f38/docs/support_files/step_definitions.md)

## [Cucumber Expression](https://github.com/cucumber/cucumber-expressions#readme)
Cucumber Expressions look for a match of the whole step text EXCLUDING the Gherkin keyword ***(Given/When/Then/And/But)***. The match is case sensitive and matches whitespace as well.

Gherkin Expression
```
Given Lucy is located 15 metres from Sean
```
Step Defination
```
Given('Lucy is located 15 metres from Sean', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("matched!");
  return 'pending'
})

```

### Capturing Parameters

To capture interesting values from our step definitions, we can use a feature of Cucumber Expressions called parameters.

Gherkin Expression
```
Given Lucy is located 15 metres from Sean
```

For example, to capture the number of metres, we can use the {int} parameter: which is passed as an argument to our step definition:

```
steps.js

Given('Lucy is located {int} metres from Sean', function (distance) {
Now we’re capturing that value as an argument.
```
Cucumber has a bunch of built-in parameter types: {int}, {float}, {word} and {string}.

#### Optional

One common example is the problem of plurals. Suppose we want to place Lucy and Sean just 1 metre apart:

Gherkin Expression
```
Given Lucy is located 1 metre from Sean
```

```
step.js
Given('Lucy is located/standing {int} metre(s) from Sean', function (distance) {
```
In above example, We can just surround the s in parentheses to make it optional.

#### Alternates

Different ways of saying the same thing. For example, to accept this step:

Gherkin Expression
```
Given Lucy is standing 1 metre from Sean
```

we can use this Cucumber Expression:
```
Given('Lucy is located/standing {int} metre(s) from Sean', function (distance) {
```
Now we can use either 'standing' or 'located' in our scenarios, and both will match just fine. 

***Summary***
Any text surrounded by parentheses `()` is considered optional.
Any words separated by a slash `/` are considered to be alternates. 

