// Write your solution in this file!
// Started
/**
 * Represents the name of a customer.
 * @type {string}
 */
var customerName = "bob";
const leastFavoriteCustomer = "try this";
/**
 * Converts the customerName variable to uppercase if it is a string.
 * @returns None
 */
function upperCaseCustomerName() {
  if (typeof customerName === "string") {
    customerName = customerName.toUpperCase();
  }
}
/**
 * Sets the value of the global variable `bestCustomer` to "not bob".
 * @returns None
 */
function setBestCustomer() {
  bestCustomer = "not bob";
}

/**
 * Overwrites the value of the global variable `bestCustomer` with the string "maybe bob".
 * @returns None
 */
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
/**
 * Changes the value of the leastFavoriteCustomer variable to "try that".
 * @returns None
 */
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "try that";
}
