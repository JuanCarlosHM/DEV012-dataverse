import data from './data/dataset.js';
import {renderItems} from "./view.js";
import {filterData, getAllCategories, sortData, stats} from "./dataFunctions.js";

const searchBox = document.querySelector('#search-box');
const selectCategory = document.querySelector('#category-select');
const selectOrder = document.querySelector('#order-select');
const clearButton = document.querySelector('#button-clear');
const listContent = document.querySelector('#root');
const statsParagraph = document.querySelector('#stats p')

let dataset = data;

listContent.appendChild(renderItems(dataset));


const addOptionsToSelect = (dataSet) => {
  const categoryArr = getAllCategories(dataSet, 'category');
  for (let i = 0; i < categoryArr.length; i++) {
    const opt = document.createElement('option');
    opt.value = categoryArr[i];
    opt.innerHTML = categoryArr[i];
    selectCategory.appendChild(opt);
  }
}

selectCategory.addEventListener('change', (e) => {
  const selectedCategory = e.target.value;
  dataset = filterData(data, 'category', selectedCategory);

  listContent.innerHTML = '';
  listContent.appendChild(renderItems(dataset));

  statsParagraph.innerHTML = `Total results: ${stats(dataset, selectedCategory)}`;
})

searchBox.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  selectCategory.selectedIndex = 0;
  dataset = filterData(data, 'name', searchTerm);

  listContent.innerHTML = '';
  listContent.appendChild(renderItems(dataset));
  statsParagraph.innerHTML = `Total results: ${stats(dataset)}`;
})

selectOrder.addEventListener('change', (e) => {
  const order = e.target.value;
  dataset = sortData(dataset, 'name', order);
  listContent.innerHTML = '';
  listContent.appendChild(renderItems(dataset));
});


clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchBox.value = '';
  selectCategory.selectedIndex = 0;
  selectOrder.selectedIndex = 0;
  listContent.innerHTML = '';
  dataset = data;
  listContent.appendChild(renderItems(dataset));
  statsParagraph.innerHTML = `Total results: ${stats(dataset)}`;
});




statsParagraph.innerHTML = `Total results: ${stats(dataset)}`;
addOptionsToSelect(data);
