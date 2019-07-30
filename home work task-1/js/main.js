
'use stict';



let students = [];
let inputs = document.getElementsByClassName("form-control");


function Students (name, surname, email, birthday){
this.name = name;
this.surname = surname;
this.email = email;
this.birthday = birthday;
this.score = [];
this.getAverageScore = function(){
    
}
}
function addStudent(){
    if(inputs[0].value != "" &&inputs[1].value != "" &&  inputs[2].value != "" &&  inputs[3].value != "" ){
      let s = new Students(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value);
      students.push(s);
      reset();
      showStudents();
    }else{
        alert("Fill all inputs");
    }
}

function reset(){
    for(let i = 0; i < inputs.length;i++){
        inputs[i].value = "";
    }

}

function showStudents(){
    let rows = ""; 

    for(let i = 0; i < students.length; i++){
        rows+=`<tr>
        <th scope="row">${i+1}</th>
        <td>${students[i].name}</td>
        <td>${students[i].surname}</td>
        <td>${students[i].email}</td>
        <td>${students[i].birthday}</td>
         </tr>`
    }
    document.getElementById("table-body").innerHTML = rows;
}