/*Background
These example problems are similar to what we run into where we get car data from a wide variety of sources, and need to normalize the data. 
Many times users will have typos or use shorthand in a given field.


Instructions
Please complete the `normalize_data` function below to make the examples pass.
 Feel free to add classes or helper methods as needed. Also, complete the `areEquals` 
 function that is used in the tests to check the equality of two objets.



Things to consider
- “trim” refers to different features or packages for the same model of vehicle

- Valid years are from 1900 until 2 years in the future from today

- A value that can’t be normalized should be returned as is

- Sometimes the trim of a vehicle will be provided in the “model” field, and will need to be extracted to the “trim” field

- The word “blank” should be returned as nil
*/
### Code


// Vehicles
const examples = [
  [
    {year: '2018', make: 'fo', model: 'focus', trim: 'blank' },
    {year: 2018, make: 'Ford', model: 'Focus', trim: null },
  ],
  [
    {year: '200', make: 'blah', model: 'foo', trim: 'bar' },
    {year: '200', make: 'blah', model: 'foo', trim: 'bar' },
  ],
  [
    {year: '1999', make: 'Chev', model: 'IMPALA', trim: 'st' },
    {year: 1999, make: 'Chevrolet', model: 'Impala', trim: 'ST' },
  ], 
  [
    {year: '2000', make: 'ford', model: 'focus se', trim: '' },
    {year: 2000, make: 'Ford', model: 'Focus', trim: 'SE' },
  ],
];

function normalizeData(input) {
  // Year Validation
  if(input.year >=1900 && input.year <= (new Date()).getFullYear()+2){
    console.log("Valid Date");
  } else{console.log("Not Valid Date")}

  //Validating if Trim is in model
  let checkTrim = input.model.split(2, " ");
  console.log("Trim", checkTrim);
}

function areEquals(first, second) {
  console.log("In areEquals 1", first);
  console.log("In areEquals 2", second);
  console.log(first == second);
}

examples.forEach(({'0': input, '1': expected_output}, index) => {
  areEquals(normalizeData(input), expected_output)
    ? console.log(`Example ${index} passed!`)
    : console.log(`Example ${index} failed! Expected ${input} but got ${expected_output}`);
});
