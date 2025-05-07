                const addButton = document.getElementById("add");
                const removeButton = document.getElementById("remove");
                const editButton = document.getElementById ("edit");        
            
            
                addButton.addEventListener("click", function() {
                    const list = document.createElement("li");
                    const item = document.getElementById("item").value;
                    const itemNode = document.createTextNode(item);
                    const editButton = document.createElement("button");
                    const removeButton = document.createElement("button");
                    removeButton.innerText = "Remove";
                    editButton.innerText = "Edit";
                    list.appendChild(itemNode);
                    list.appendChild(removeButton);
                    list.appendChild(editButton);
                    document.getElementById("list").appendChild(list);

                    removeButton.addEventListener("click", function() {
                        document.getElementById("list").removeChild(list);
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
                
                
      