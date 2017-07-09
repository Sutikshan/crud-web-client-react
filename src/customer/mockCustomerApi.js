import delay from "../delay";
const uuidv4 = require("uuid/v4");

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    id: uuidv4(),
    name: "Cory"
  },
  {
    id: uuidv4(),
    name: "Scott"
  },
  {
    id: uuidv4(),
    name: "Wahlin"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = author => {
  return uuidv4();
};

class CustomerApi {
  static getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCustomer(customer) {
    customer = Object.assign({}, customer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (customer.name.length < minAuthorNameLength) {
          reject(`Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (customer.id) {
          const existingCustomerIndex = customers.findIndex(
            a => a.id === customer.id
          );
          customers.splice(existingCustomerIndex, 1, customer);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new customers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          customer.id = generateId(customer);
          console.log("------------------", customer, customers);
          customers.push(customer);
        }

        resolve(customer);
      }, delay);
    });
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCustomerToDelete = customers.findIndex(
          customer => customer.id === authorId
        );
        customers.splice(indexOfCustomerToDelete, 1);
        return resolve();
      }, delay);
    });
  }
}

export default CustomerApi;
