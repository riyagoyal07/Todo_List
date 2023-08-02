let input = document.getElementById('taskarea');
let addtask = document.getElementById('tasklist');
let btn = document.getElementById('btn');
input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        additem();
    }
})
function additem() {
    if (input.value == "") {
        alert("please write your task!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        addtask.appendChild(li);

        let editbtn = document.createElement("button");
        editbtn.innerHTML = "Edit";
        editbtn.classList = "editcss";
        li.appendChild(editbtn);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    input.value = "";
}

tasklist.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
    if (e.target.innerHTML == "\u00d7") {
        var del = confirm("Are you sure you want to delete the task??");
        if (del)
            e.target.parentElement.remove();
    }
    if (e.target.tagName == "BUTTON") {
        console.log(e.li.innerHTML);

    }
})