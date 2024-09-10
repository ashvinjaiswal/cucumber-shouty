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