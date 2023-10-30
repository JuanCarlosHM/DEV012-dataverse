export const renderItems = (data) => {

  const list = document.createElement('ul');
  list.classList.add("container");

  for(let i = 0; i < data.length; i++) {

    const itemList = document.createElement('li');
    itemList.classList.add('container');
    const itemContainer = document.createElement('dl');

    itemContainer.innerHTML = `
    <img src=${data[i].imageUrl} alt=${data[i].name} />
    <dt>Name:</dt><dd itemprop="name">  ${data[i].name} </dd>
    <dt>Description:</dt><dd itemprop="description"> ${data[i].shortDescription} </dd>
    <dt>Year:</dt><dd itemprop="yearOfBirth"> ${data[i].year} </dd>
    <dt> Author:</dt><dd itemprop="placeOfBirth"> ${data[i].author} </dd>
    <dt> Category:</dt><dd itemprop="category"> ${data[i].category} </dd>
    `
    itemContainer.classList.add("container");
    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "sci-fi-Books");
    itemList.setAttribute("itemtype", "sci-fi-Books");
    itemList.setAttribute("itemscope", "");

    itemList.appendChild(itemContainer);
    list.appendChild(itemList);
  }

  return list;
};

