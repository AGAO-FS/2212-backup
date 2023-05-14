// Your code here
const table = document.getElementsByTagName('table')[0]
const button = document.querySelector('button');
const selector = document.querySelector('select');
console.log(selector);

function makeRow () {
  const row = document.createElement('tr')
  for (let i = 0; i < 20; i++) {
    const td = document.createElement('td')
    row.appendChild(td)
  }
  table.appendChild(row)
}
makeRow() //makes one row
makeRow() //makes another row

button.addEventListener('click', makeRow);

table.addEventListener('click', (ev)=> {
  if(ev.target.tagName === 'TD'){
    ev.target.className = selector.value === ev.target.className ? '': selector.value;
  }
});
