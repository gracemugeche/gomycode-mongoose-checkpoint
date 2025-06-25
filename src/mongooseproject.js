const connectDB = require("./db/connect");
const Person = require("./models/PersonModel");

// Connect to MongoDB
connectDB();

// 1. Create and Save One Person
const createAndSavePerson = async () => {
  try {
    const person = new Person({
      name: "Grace",
      age: 25,
      favoriteFoods: ["Chapati", "Mandazi"],
    });
    const savedPerson = await person.save();
    console.log("Saved one person:", savedPerson);
  } catch (err) {
    console.error("Error:", err);
  }
};

// 2. Create Many People
const createManyPeople = async () => {
  const arrayOfPeople = [
    { name: "John", age: 30, favoriteFoods: ["Burger", "Fries"] },
    { name: "Mary", age: 22, favoriteFoods: ["Pasta"] },
    { name: "Mike", age: 28, favoriteFoods: ["Burrito"] },
  ];

  try {
    const people = await Person.create(arrayOfPeople);
    console.log(" Created multiple people:", people);
  } catch (err) {
    console.error("Error:", err);
  }
};

// 3. Find People by Name
const findPeopleByName = async (name) => {
  try {
    const people = await Person.find({ name });
    console.log(` Found people named ${name}:`, people);
  } catch (err) {
    console.error(" Error:", err);
  }
};

// 4. Find One by Favorite Food
const findOneByFood = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log(`Found one person who likes ${food}:`, person);
  } catch (err) {
    console.error("Error:", err);
  }
};

// 5. Find Person by ID
const findPersonById = async (id) => {
  try {
    const person = await Person.findById(id);
    console.log(" Found person by ID:", person);
  } catch (err) {
    console.error("Error:", err);
  }
};

// 6. Find, Edit, then Save
const findEditThenSave = async (id) => {
  try {
    const person = await Person.findById(id);
    person.favoriteFoods.push("hamburger");
    const updated = await person.save();
    console.log(" Updated favoriteFoods:", updated);
  } catch (err) {
    console.error("Error:", err);
  }
};

// 7. Find One and Update
const findAndUpdate = async (name) => {
  try {
    const updated = await Person.findOneAndUpdate(
      { name },
      { age: 20 },
      { new: true }
    );
    console.log("Updated age:", updated);
  } catch (err) {
    console.error("Error:", err);
  }
};

// 8. Delete by ID
const deleteById = async (id) => {
  try {
    const deleted = await Person.findByIdAndRemove(id);
    console.log("Deleted person:", deleted);
  } catch (err) {
    console.error(" Error:", err);
  }
};

// 9. Delete Many
const deleteManyPeople = async () => {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    console.log("Deleted all Marys:", result);
  } catch (err) {
    console.error("Error:", err);
  }
};

// 10. Chain Search Query Helpers
const queryChain = async () => {
  try {
    const results = await Person.find({ favoriteFoods: "Burrito" })
      .sort("name")
      .limit(2)
      .select("-age");
    console.log("Chained query result:", results);
  } catch (err) {
    console.error(" Error:", err);
  }
};

//  Calling the function for testing below:
// createAndSavePerson();
// createManyPeople();
// findPeopleByName('John');
// findOneByFood('Pasta');
// findPersonById('PASTE_ID_HERE');
// findEditThenSave('PASTE_ID_HERE');
// findAndUpdate('John');
// deleteById('PASTE_ID_HERE');
// deleteManyPeople();
// queryChain();
