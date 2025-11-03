

document.getElementById("formToDo").addEventListener("submit", toDoList);
function toDoList(event) {

    var work = document.getElementById("workes").value;
    var result = document.getElementById("result");
    if (work == "") {
        alert("Enter Value");
        event.preventDefault();
    } else {
       var myLi = document.createElement("li");
        myLi.innerHTML = work;
        myLi.className = "d-flex myLi p-1 mb-2";
        result.append(myLi);

        var button = document.createElement("button");
        button.innerHTML = "&times";
        button.className = "btn btn-danger btn-sm ml-auto p-1 button";
        myLi.append(button);

        button.addEventListener("click", function () {
            myLi.remove();
        })
        
        document.getElementById("workes").value = "";

        event.preventDefault();
    }

}
