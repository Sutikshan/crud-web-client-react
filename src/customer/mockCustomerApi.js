import delay from "../delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
// TODO use localStorage to cache data.
const customers = [
  {
    id: "1",
    name: "Cory"
  },
  {
    id: "2",
    name: "Scott"
  },
  {
    id: "3",
    name: "Wahlin"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return (customers.length + 1).toString();
};

class CustomerApi {
  static getAllCustomers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static getCustomerDetail(id) {
    return new Promise(resolve => {
      // simulating a server call.
      const customer = customers.find(c => c.id === id);
      setTimeout(() => {
        resolve(Object.assign({}, customer));
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
          customers.push(customer);
        }

        resolve(customer);
      }, delay);
    });
  }

  static deleteCustomer(authorId) {
    return new Promise(resolve => {
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
