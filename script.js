var array = [];
// var error = false;
//  var id=1;
// $(document).ready(function () {
//     $('.check').click(function () {
//         $('.check').not(this).prop('checked', false);
//     })
// });

let table;
let n = 0;
let res = false;
let  object= {
  id:'0',
  num1:0,
  num2:0,
  add:"",
  sub:"",
  divi:"",
  mul:"",
  per:"",
  squ:"",

}
let obj;
$(document).ready(function () {
    table = $('#records').DataTable({
        data: array,
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },

            { data: 'num1' },
            { data: 'num2' },
            { data: 'add' },
            { data: 'sub' },
            { data: 'divi' },
            {data: 'mul'},
            { data: 'per' },
            { data: 'squ' },
            {
                data: null,
                "mRender": function (o) {
                    return `<button type="button" class="btn btn-outline-secondary cbn"
                    id="ebtn$(`+ o.id + `)" onclick="edit(` + o.id + `)" data-toggle="modal"
                    data-target="#exampleModalCenter">edit</button>`;

                }
            }, {
                data: null,
                className: 'deleteButton',
                "mRender": function (o) {
                    return ` <button type="button" class="btn btn-outline-secondary cbn"
                    id="debtn$(`+ o.id + `)" onclick="delete(` + o.id + `)">delete</button>`
                }
            }

        ],
        order: [[1, 'asc']],
    });

});


function submit() {
  var temp = 0;
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2")
  var add = document.getElementById("add");
  var sub = document.getElementById("sub")
  var divi = document.getElementById("divi");
  var mul = document.getElementById("mul");
  var per = document.getElementById("perc");
  var squ = document.getElementById("squ");
  var val1 = document.getElementById("val1");
  var val2 = document.getElementById("val2");

  obj={
    id:'0',
    num1:0,
    num2:0,
    add:"",
    sub:"",
    divi:"",
    mul:"",
    per:"",
    squ:"",
  }
  if (num1.value == 0) {
    val1.innerHTML = 'enter the value';
    temp++
}
else {
    val1.innerHTML = ' ';
}
if (num2.value == 0) {
    val2.innerHTML = 'enter the value';
    temp++
} else {
    val2.innerHTML = ' ';
}

if (add.checked == false && sub.checked == false && divi.checked == false &&
    per.checked == false && squ.checked == false && mul.checked == false) {
    alert("Atleast one operation sholud be performed...");
    temp++;
}

num1 = Number(num1.value);
num2 = Number(num2.value);

if (add.checked == true) {
    obj.add = (num1 + num2).toString();
}
else {
    obj.add = "null";
}


if (sub.checked == true) {
    obj.sub = (num1 - num2).toString();
}
else {
    obj.sub = "null";
}
if (mul.checked == true) {
    obj.mul = (num1 * num2).toString();
}
else {
    obj.mul = "null";
}
if (divi.checked == true) {
    obj.divi = (num1 / num2).toString();
}
else {
    obj.divi = "null";
}
if (per.checked == true) {
    obj.per = ((num1 / num2) * 100).toString();
}
else {
    obj.per = "null";
}
if (squ.checked == true) {
    obj.squ = ((num1 * num1 + num2 * num2 + 2 * num1 * num2)).toString();
}
else {
    obj.squ = "null";
}
up=document.getElementById("update");
obj.num1 = num1;
obj.num2 = num2;

if (temp == 0 && res == false && up.style.display == "none") {
    console.log("Error")
    obj.id = n;


    array.push(obj);
    n++;
    table.row.add(obj).draw();


    console.log(array);
} else if (temp == 0 && res == true) {
    console.log(obj)
    object = obj;

}
}
// document.getElementById('addbtn').addEventListener('click', function () {
// document.getElementById('add').value = null;
// document.getElementById('sub').value = null;
// document.getElementById('mul').value = null;
// document.getElementById('divi').value = null;
// document.getElementById('perc').value = null;
// document.getElementById('squ').value = null;
// document.getElementById('add').checked = false;
// document.getElementById('sub').checked = false;
// document.getElementById('mul').checked = false;
// document.getElementById('divi').checked = false;
// document.getElementById('perc').checked = false;
// document.getElementById('squ').checked = false;

// });

function edit(id) {
document.getElementById('num1').value = array[id].num1;
document.getElementById('num2').value = array[id].num2;
document.getElementById("update").style.display = "block";
document.getElementById("submit").style.display =" none";
ver = true;


console.log(id);

document.getElementById("update").addEventListener("click", function(){

  submit();
    object.id = id
    object.num1=obj.num1;
    object.num2=obj.num2;
    object.add=obj.add;
    object.sub=obj.sub;
    object.divi=obj.divi;
    object.mul=obj.mul;
    object.per=obj.per;
    object.squ=obj.squ;
    array[id] =object
    console.log(object)
    $('#records').DataTable().clear().rows.add(array).draw();

})

}
$('#records').on('click', 'td.deleteButton', function () {
table.row(this).remove().draw(false);
});
document.getElementById("addbtn").addEventListener("click", () => {
  ver = false;
document.getElementById("update").style.display = "none";
document.getElementById("submit").style.display =" block";
})