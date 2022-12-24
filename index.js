const intendedItems = ["position", "city"];

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
        additionalPersonData.forEach((e) => {
          if (_.findIndex(personData, ["uid", e["uid"]]) === -1) {
            console.log(
              `******************\nThere is no match for object bellow in personData for ( ${itemElement} ) \nuid: ${e["uid"]}\nposition: ${e["position"]}\ncity: ${e["city"]}\n******************`
            );
          } else {
            
          }
        });
      }
    });
  } else {
    console.log(
      "Please enter array with string elements for the entry of function!"
    );
  }
};

transferAdditionalData(intendedItems);
