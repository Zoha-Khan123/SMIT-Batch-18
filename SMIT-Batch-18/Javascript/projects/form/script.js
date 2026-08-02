var storeData = localStorage.getItem('Users')
storeData = JSON.parse(storeData) || []
var editId = null
var editMode = false


function formSubmit(e) {
    e.preventDefault()

    var myName = document.getElementById("user_name").value

    var email = document.getElementById("user_email").value

    var gender = document.querySelector("input[name='gender']:checked")

    var skills = document.querySelectorAll("input[name='skills']:checked")

    if (!myName || !email || !gender || !skills.length > 0) {
        alert("ALL FIELDS ARE REQUIRED")
        return
    }

    // Skills Array
    var skillsArray = []
    for (var i = 0; i < skills.length; i++) {
        skillsArray.push(skills[i].value)
    }

    if(editMode){
        for(var i =0; i<storeData.length; i++){
            if(storeData[i].id== editId){
                storeData[i].myName = myName
                storeData[i].email = email
                storeData[i].gender = gender.value
                storeData[i].skills = skillsArray
            }
        }
        editMode = false
        editId = null
    }else{
        var id = Date.now()
    
        var obj = {
            id: id,
            myName: myName,
            email: email,
            gender: gender.value,
            skills: skillsArray
    
        }
        storeData.push(obj)

    }
    localStorage.setItem("Users", JSON.stringify(storeData))
    tableCreate()
    e.target.reset()
    document.querySelector("input[type = 'submit']").value = "submit";

}

function tableCreate() {
    var tableBody = document.getElementById("table_body")
    tableBody.innerHTML = ""

    for (var i = 0; i < storeData.length; i++) {
        var tableRow = document.createElement("tr")

        for (key in storeData[i]) {
            var tableData = document.createElement("td")

            tableData.innerText = storeData[i][key]
            tableRow.append(tableData)
        }

        var editBtn = document.createElement("button")
        editBtn.innerText = "Edit"
        editBtn.setAttribute("onclick", "editData(" + storeData[i].id + ")")
        var deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute("onclick", "deleteData(" + storeData[i].id + ")")
        var td = document.createElement("td")
        td.append(editBtn, deleteBtn)
        tableRow.append(td)
        tableBody.append(tableRow)
    }


}

function editData(userId) {
    var selectedUser;
    for (var i = 0; i < storeData.length; i++) {
        if (storeData[i].id == userId) {
            selectedUser = storeData[i]

        }
    }
  
    document.getElementById("user_name").value = selectedUser.myName
    document.getElementById("user_email").value = selectedUser.email
   var genderRadios=  document.querySelectorAll("input[name='gender']")
   for(var i =0 ; i < genderRadios.length; i++){
    if(genderRadios[i].value == selectedUser.gender){
        genderRadios[i].checked = true
    }
   }
   var skillsCheckBox = document.querySelectorAll("input[name='skills']")
   for(var i = 0; i < skillsCheckBox.length; i++){
    console.log(skillsCheckBox[i].checked = false);
    for(var j =0; j <selectedUser.skills.length ; j++){
        if(skillsCheckBox[i].value == selectedUser.skills[j]){
            skillsCheckBox[i].checked = true
        }
    }
   }
 
   document.querySelector("input[type = 'submit']").value = "update";
  editId = userId
   editMode= true
}

function deleteData(userId){
    for(var i =0; i < storeData.length; i++){
        if(storeData[i].id === userId){
            storeData.splice(i,1)
            localStorage.setItem("Users", JSON.stringify(storeData))
            tableCreate()
        }
    }
}
tableCreate()


// =================== Extra ===============
// var gender = document.getElementsByName("gender")
// for(var i =0; i < gender.length; i++){
//     if(gender[i].checked)
//     console.log("gender" , gender[i].value);

// }

// var arr = ["zoha","ayesha"]
// localStorage.setItem("studentNames",JSON.stringify(arr))
// console.log(localStorage.getItem("studentNames"));