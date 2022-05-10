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
    cell.appendChild(document.createTextNode(ele));
    row.appendChild(cell);
  });

  tblBody.appendChild(row);
  tableInfo.tableContent.map(ele => {
    let row = document.createElement('tr');

    let cell_name = document.createElement('td');
    cell_name.appendChild(document.createTextNode(ele['Student Name']));
    row.appendChild(cell_name);
    let cell_age = document.createElement('td');
    cell_age.appendChild(document.createTextNode(ele.Age));
    row.appendChild(cell_age);
    let cell_phone = document.createElement('td');
    cell_phone.appendChild(document.createTextNode(ele.Phone));
    row.appendChild(cell_phone);
    let cell_address = document.createElement('td');
    cell_address.appendChild(document.createTextNode(ele.Address));
    row.appendChild(cell_address);

    /*
    for (let j = 0; j < tableInfo.tableHeader.length; j++) {
      let cell = document.createElement('td');
      if (j == 0) {
        cell.appendChild(document.createTextNode(ele['Student Name']));
      } else if (j == 1) {
        cell.appendChild(document.createTextNode(ele.Age));
      } else if (j == 2) {
        cell.appendChild(document.createTextNode(ele.Phone));
      } else if (j == 3) {
        cell.appendChild(document.createTextNode(ele.Address));
      }

      row.appendChild(cell);
    }
    */
    tblBody.appendChild(row);
  });

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
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
    ordered_list.appendChild(li);
  });
  body.appendChild(ordered_list);
}
generate_ordered_list();

function generate_unordered_list() {
  let body = document.getElementsByTagName('body')[0];
  let unordered_list = document.createElement('ul');
  list.map(ele => {
    let li = document.createElement('li');
    li.innerHTML = ele;
    unordered_list.appendChild(li);
  });
  body.appendChild(unordered_list);
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
    option.innerHTML = ele.content;
    select.appendChild(option);
  });
  body.appendChild(select);
}
generate_dropdown();
