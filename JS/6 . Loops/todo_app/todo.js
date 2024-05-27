todos = [];
let option = "none";
while (option != "quit") {
    option = prompt("What would you like to do?");
    if (option == "new") {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (option == "list") {
        console.clear();
        todos.forEach(function (todo, i) {
            console.log(`${i}: ${todo}`);
        });

        
    } else if (option == "delete") {
        let index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Todo removed");
    }
}
