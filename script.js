/** @format */
const result = document.getElementById('results');
const filter = document.getElementById('filter');
const listItems = [];
const url = 'https://randomuser.me/api/?results=100';

filter.addEventListener('input', (e) => filterData(e.target.value));

const getData = async () => {
  const res = await fetch(url);
  const { results } = await res.json();

  results.forEach((user) => {
    const li = document.createElement('li');

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}" />
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} ,${user.location.state}</p>
          </div>
    `;
    console.log(li);
    result.appendChild(li);
  });
};

getData();

const filterData = (searchTerm) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
};
