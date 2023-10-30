// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  value = value.trim().toLocaleLowerCase();

  /* Another approach */
  // return data.filter((element) => {
  //   return element[filterBy].toLocaleLowerCase().includes(value);
  // })

  const dataFiltered = []

  data.forEach((element) => {
    if(element[filterBy].toLocaleLowerCase().includes(value)){
      dataFiltered.push(element);
    }
  })
  return dataFiltered;
};

export const getAllCategories = (data, categoryName) => {

  // A better approach for students:
  /*
   const categoryArr = []
  data.forEach((element) => {
    if(!categoryArr.includes(element[categoryName])) {
      categoryArr.push(element[categoryName]);
    }
  })

  return categoryArr;
  */

  return data.map((element) => element[categoryName])
    .filter((value, index, currentValue) => currentValue.indexOf(value) === index);
}

export const sortData = (data, sortBy, sortOrder) =>
{
  if(sortOrder === 'asc'){
    return data.sort((a, b) => {
      const conditionA = a[sortBy].toUpperCase();
      const conditionB = b[sortBy].toUpperCase();

      if (conditionA < conditionB) {
        return -1;
      }
      if (conditionA > conditionB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  } else {
    return data.sort((a, b) => {
      const conditionA = a[sortBy].toUpperCase();
      const conditionB = b[sortBy].toUpperCase();

      if (conditionA < conditionB) {
        return 1;
      }
      if (conditionA > conditionB) {
        return -1;
      }
      // names must be equal
      return 0;
    });
  }
};

export const stats = (data, selectedCategory = "") => {

  if(!selectedCategory) {
    return data.length;
  }

  const result = data.reduce((accumulator, currentValue) => {
    if (currentValue.category === selectedCategory) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0)

  return parseInt(result);
}

