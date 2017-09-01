;(function(){
  var foodApp = document.getElementById("foodapp");

  foodApp.addEventListener("click", function(event){
    event.preventDefault();
    if(event.target.getAttribute("type") == "submit") {
      addNewElement(event.target);
    }
  });

  function addNewElement(btn){
    var foodAppBlock = findParent(btn);

    var dish = foodAppBlock.querySelector("input[name='dish']");
    var size = foodAppBlock.querySelector("input[name='size']");
    var list = foodAppBlock.getElementsByTagName("ol");

    if(dish.value == "" || size.value == "") {
      alert("Заполните поля!");
    }
    else {
      list[0].appendChild(createNewElement(dish.value, size.value));
      dish.value = "";
      size.value = "";
    }
  };

  function findParent(node) {
    while (!node.classList.contains("foodapp-block")) {
      node = node.parentNode;
    }

    return node;
  }

  function createNewElement(dish, size) {
    var li = document.createElement("li");
    li.textContent = dish + " - " + size + " грамм";

    return li;
  };
})();
