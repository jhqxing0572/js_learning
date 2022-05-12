const tableInfo = {
  tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
  tableContent: [
    { 'Student Name': 'John', Age: 19, Phone: '455 - 983 - 0903', Address: '123 Ave, San Francisco, CA, 94011' },
    { 'Student Name': 'Alex', Age: 21, Phone: '455 - 983 - 0912', Address: '456 Rd, San Francisco, CA, 94012' },
    { 'Student Name': 'Josh', Age: 22, Phone: '455 - 345 - 0912', Address: '789 Dr, Newark, CA, 94016' },
    { 'Student Name': 'Matt', Age: 23, Phone: '321 - 345 - 0912', Address: '223 Dr, Sunnyvale, CA, 94016' },
  ],
};

function generate_table() {
  let body = document.getElementsByTagName('body')[0];
  let tbl = document.createElement('table');
  let tblBody = document.createElement('tbody');
  let row = document.createElement('tr');
  row.id = 'myHeader';

  tableInfo.tableHeader.map(ele => {
    let cell = document.createElement('th');
    cell.append(document.createTextNode(ele));
    row.append(cell);
  });

  tblBody.append(row);

  tableInfo.tableContent.map(ele => {
    let row = document.createElement('tr');
    tableInfo.tableHeader.map(head => {
      let cell = document.createElement('td');
      cell.append(document.createTextNode(ele[head]));
      row.append(cell);
    });
    tblBody.appendChild(row);
  });

  tbl.append(tblBody);
  body.append(tbl);
  tbl.setAttribute('border', '2');
}
generate_table();

const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];
function generate_ordered_list() {
  let body = document.getElementsByTagName('body')[0];
  let ordered_list = document.createElement('ol');
  list.map(ele => {
    let li = document.createElement('li');
    li.innerHTML = ele;
    ordered_list.append(li);
  });
  body.append(ordered_list);
}
generate_ordered_list();

function generate_unordered_list() {
  let body = document.getElementsByTagName('body')[0];
  let unordered_list = document.createElement('ul');
  list.map(ele => {
    let li = document.createElement('li');
    li.innerHTML = ele;
    unordered_list.append(li);
  });
  body.append(unordered_list);
}
generate_unordered_list();

const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
];
function generate_dropdown() {
  let body = document.getElementsByTagName('body')[0];
  let select = document.createElement('select');
  select.id = 'city';
  dropDownList.map(ele => {
    let option = document.createElement('option');
    option.value = ele.value;
    option.textContent = ele.content;
    select.append(option);
  });
  body.append(select);
}
generate_dropdown();
