const { Given, When, Then } = require("@cucumber/cucumber");
const Person = require('./../../src/shouty.js');
const { assertThat, is } = require("hamjest");

Given("Lucy is located {int} metres from Sean", function (distance) {
  this.lucy = new Person();
  this.sean = new Person();
  this.lucy.moveTo(distance);
  // Given('Lucy is located {float} metres from Sean', function (float) {
  // Write code here that turns the phrase above into concrete actions
});

When("Sean shouts {string}", function (message) {
  console.log(message);
  this.sean.shout(message);
  this.message = message
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
});

Then("Lucy hears Sean's message", function () {
  assertThat(this.lucy.messageHeard(), is([this.message]))
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
});
