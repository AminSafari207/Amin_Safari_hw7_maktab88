// Exercise #1

const intendedItems = ["position", "city"];

const updateArrayData = (index, array, object) => {
  const combinedObject = { ...array[index], ...object };
  array.splice(index, 1, combinedObject);
};

const transferAdditionalData = (entryArray) => {
  if (
    Array.isArray(entryArray) &&
    entryArray.every((e) => typeof e === "string")
  ) {
    entryArray.forEach((itemElement) => {
      if (_.findIndex(additionalPersonData, itemElement) === -1) {
        console.log(
          `The additional data doesn't contains ( ${itemElement} ) and it has been ignored!`
        );
      } else {
        additionalPersonData.forEach((additionalElement) => {
          const elementIndex = _.findIndex(personData, [
            "uid",
            additionalElement["uid"],
          ]);
          if (elementIndex === -1) {
            console.log(
              `******************\nThere is no match for object bellow in personData for ( ${itemElement} ) \nuid: ${additionalElement["uid"]}\nposition: ${additionalElement["position"]}\ncity: ${additionalElement["city"]}\n******************`
            );
          } else {
            updateArrayData(elementIndex, personData, additionalElement);
          }
        });
      }
    });
  } else {
    console.log(
      "Please enter array with string elements for the entry of function!"
    );
  }

  console.log("Result of exercise #1 : \n", personData);
};

// transferAdditionalData(intendedItems);

// Exercise #2

const read = (entryArray) => {
  console.log("******************");
  entryArray.forEach((itemElement) => {
    const elementObject = Object.keys(itemElement);
    elementObject.forEach((n) => {
      console.log(`${n}: ${itemElement[n]}`);
    });
    console.log("******************");
  });
};

const create = (entryArray, entryObject) => {
  if (_.findIndex(entryArray, ["uid", entryObject["uid"]]) !== -1) {
    console.log(
      `Create failed!\nThere is already an object with same uid ( ${entryObject["uid"]} )`
    );
  } else {
    entryArray.push(entryObject);
    entryArray = _.sortBy(entryArray, "uid");
    console.log("Create successful!\n", entryArray);
  }
};

const update = (entryArray, entryObject) => {
  const index = _.findIndex(entryArray, ["uid", entryObject["uid"]]);
  if (index === -1) {
    console.log(`Update failed!\nNo match for uid : ( ${entryObject["uid"]} )`);
  } else {
    updateArrayData(index, entryArray, entryObject);
    console.log("Update successful!\n", entryArray);
  }
};

const remove = (entryArray, entryUID) => {
  const index = _.findIndex(entryArray, ["uid", entryUID]);
  if (_.findIndex(entryArray, ["uid", index]) === -1) {
    console.log(`Remove failed!\nNo match for uid : ( ${entryUID} ) )`);
  } else {
    entryArray.splice(index, 1);
    console.log("Remove successful!\n", entryArray);
  }
};

// read(personData);
// create(personData, { uid: 9, firstName: "Kiumars", job: "Tailor" });
// update(personData, { uid: 2, firstName: "Kiumars", job: "Tailor" });
// remove(personData, 4)
