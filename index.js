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

  console.log(personData);
};

transferAdditionalData(intendedItems);
