function extractNameAndStreet(person) {
  const { name, address: { street } } = person;
  return { name, street };
}

// Example usage:
const person = {
  name: "Arslan",
  address: {
    street: "street no.12",
    city: "Exampleville",
  },
};

const extractedData = extractNameAndStreet(person);

console.log(extractedData);
