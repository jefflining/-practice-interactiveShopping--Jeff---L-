                    
           // window.addEventListener("load", () => {

                const addButton = document.getElementById("add");
                const removeButton = document.getElementById("remove");
                const editButton = document.getElementById ("edit");        
            
            
                addButton.addEventListener("click", function() {
                    const list = document.createElement("li");
                    const item = document.getElementById("item").value;
                    const itemText = document.createTextNode(item);
                    const removeButton = document.createElement("button");
                    const editButton = document.createElement("button");
                    editButton.innerText = "Edit";
                    removeButton.innerText = "Remove";
                    list.appendChild(itemText);
                    list.appendChild(editButton);
                    list.appendChild(removeButton);
                    document.getElementById("list").appendChild(list);

                    removeButton.addEventListener("click", function() {
                        document.getElementById(`list`).removeChild(list);
                    });
                    
                    editButton.addEventListener("click", function() {
                        editButton.innerText = "Save"
                    });
                    editButton.addEventListener("click", function() {
                        const newItem = document.getElementById("item").value;
                        list.textContent = newItem;
                        list.appendChild(removeButton);
                        list.appendChild(editButton);
                    });

                    });
                
                
           // })