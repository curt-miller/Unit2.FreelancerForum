// define a list of freelancers with an array of objects
const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Carol", price: 70, occupation: "programmer" },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// references the DOM element where average price is displayed
const averagePrice = document.querySelector("#average-price");

// initalizing a blank array to track of new prices to averaged
const averagePriceArr = [];

// references the DOM element where the table of freelancers is displayed
const freelancerList = document.querySelector("#freelancer-list");

// reders the first two freelancers on the list
render(freelancers[0]);
render(freelancers[1]);

// the render function for the rest of the freelancers
function render(freelancer) {
  const tableRow = document.createElement("tr"); // makes a table row

  const tdName = document.createElement("td"); // makes a cell in that row
  tdName.textContent = `${freelancer.name}`; // puts the name in it
  tableRow.appendChild(tdName);

  const tdOccupation = document.createElement("td"); // occupation cell
  tdOccupation.textContent = `${capitalizeFirstLetter(freelancer.occupation)}`;
  tableRow.appendChild(tdOccupation);

  const tdPrice = document.createElement("td"); //price cell
  tdPrice.textContent = `${freelancer.price}`;
  tableRow.appendChild(tdPrice);

  freelancerList.appendChild(tableRow); //appends the whole row to the freelancers table
}

// adds priced of the first two freelancers to the averaging array
averagePriceArr.push(freelancers[0].price);
averagePriceArr.push(freelancers[1].price);

// initalizing the display for average price
let index = 2;
averagePrice.textContent = ((freelancers[0].price + freelancers[1].price) / 2).toFixed(2)


// a funciton that adds the next freelancer to the list and pushed to the price array
function renderNext() {
  if (index < freelancers.length) {
    render(freelancers[index]); // renders the current index

    //and pushed that index's price to the averaging array
    averagePriceArr.push(freelancers[index].price); 
    let averagePriceSum = averagePriceArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    // calculates the average price based on the array of prices divided by its length
    const averagePriceValue = averagePriceSum / averagePriceArr.length;

    index++; //moves to the next freelancer

    averagePrice.textContent = averagePriceValue.toFixed(2); //updates the displayed average

  } else { //stops the loop when its gone through the whole list
    clearInterval(interval);
  }
}

// calls the render funciton every 3 seconds
const interval = setInterval(renderNext, 3000); 

// and finally a function that just capitalizes the firts letter of each occupation because i was too lazy to do it manually
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
