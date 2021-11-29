function todoList(){   
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){

    if(this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText);
        //console.log(response);
        var output = "";

        response.forEach((element) => {
            if(element.completed===true){
                output += `<pre><input type='checkbox' id='${element.id}' checked disabled><span style='text-decoration-line:line-through; margin-right:-40%;'> &nbsp${element.id}. ${element.title}</span></pre> <br><hr>`
            }
            else {
                output += `<pre><input type='checkbox' id='${element.id}'><span style='margin-right:-40%;'> &nbsp${element.id}. ${element.title}</pre> <br><hr>`;
              }
            
        });
       
        var n;
        var b=0;
        var countChecked = function(){
            n = $("input:checked").length;
            n = n - 90;
            if(n%5==0 && b-n<0){
                alert("Congrats. 5 Tasks have been Successfully Completed");
            }
        }
        countChecked();
        console.log(n);

        document.getElementById("myList").innerHTML = output;
    }    
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
}

function redirect(){
    location.href = "login.html";
}