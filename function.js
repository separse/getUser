var slct;
function save(btn) {
  

var fName = document.getElementById('fname').value;
var lName = document.getElementById('lname').value;

if (btn.value === 'Save') {
  var person = document.createElement('tr');
  person.onmouseover = function () {
    this.style.backgroundColor = 'pink';
  }
  person.onmouseout = function () {
    this.style.backgroundColor = 'white';
  }

  var chCell = document.createElement('td');
  chCell.innerHTML = '<input type="checkbox" onClick="checkOne(this)">';

  var fnCell = document.createElement('td');
  var fnNode = document.createTextNode(fName);
  fnCell.appendChild(fnNode);

  var lnCell = document.createElement('td');
  var lnNode = document.createTextNode(lName);
  lnCell.appendChild(lnNode);

  var delLink = document.createElement('a');
  delLink.innerHTML = 'Delete';
  delLink.href = '#';
  delLink.onclick = function () {
    document.getElementById('tbl').removeChild(person);
  }

    var edtLink = document.createElement('a');
    edtLink.innerHTML = 'Edit';
    edtLink.href = '#';
    edtLink.onclick = function () {
    person.style.backgroundColor = 'yellow';
    document.getElementById('btn').value = 'Modify';
    document.getElementById('fname').value = person.childNodes[1].innerHTML;
    document.getElementById('lname').value = person.childNodes[2].innerHTML;
    slct = person;
  }

    var sep = document.createTextNode(' | ');

    var opCell = document.createElement('td');
    opCell.appendChild(delLink);
    opCell.appendChild(sep);
    opCell.appendChild(edtLink);

    person.appendChild(chCell);
    person.appendChild(fnCell);
    person.appendChild(lnCell);
    person.appendChild(opCell);

    document.getElementById('tbl').appendChild(person);
} else {
    slct.childNodes[1].innerHTML = fName;
    slct.childNodes[2].innerHTML = lName;
    slct.style.backgroundColor = 'white';
    btn.value = 'Save';
}
}

function chAll(cb) {
  var table = document.getElementById('tbl');
  if(cb.checked){
    for (let i = 1; i < table.childNodes.length; i++) {
      table.childNodes[i].childNodes[0].childNodes[0].checked = 'checked'; 
    }} else {
      for (let i = 1; i < table.childNodes.length; i++) {
        table.childNodes[i].childNodes[0].childNodes[0].checked = ''; 
      }}}

function checkOne(chbo) {
  var table = document.getElementById('tbl');
  var box = table.getElementsByTagName('input');
  if(!chbo.checked){
    document.getElementById('chAll').checked = '';}
  else {
    for (var i = 1; i < box.length; ++i) 
    if(box[i].checked)
        continue;
      else
        break;
}
  if (i == box.length){
        document.getElementById('chAll').checked = 'checked'; }
    }
    
    function del(){
      var table = document.getElementById('tbl');
      var box = table.getElementsByTagName('input');
    
        for (let i = 0; i < box.length;) {
          if (box[i].checked) {
            table.removeChild(box[i].parentNode.parentNode)    
    }else{
      ++i;
    }}}