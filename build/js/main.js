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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKXtcclxuICB2YXIgZm9vZEFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vZGFwcFwiKTtcclxuXHJcbiAgZm9vZEFwcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09IFwic3VibWl0XCIpIHtcclxuICAgICAgYWRkTmV3RWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBhZGROZXdFbGVtZW50KGJ0bil7XHJcbiAgICB2YXIgZm9vZEFwcEJsb2NrID0gZmluZFBhcmVudChidG4pO1xyXG5cclxuICAgIHZhciBkaXNoID0gZm9vZEFwcEJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdkaXNoJ11cIik7XHJcbiAgICB2YXIgc2l6ZSA9IGZvb2RBcHBCbG9jay5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nc2l6ZSddXCIpO1xyXG4gICAgdmFyIGxpc3QgPSBmb29kQXBwQmxvY2suZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvbFwiKTtcclxuXHJcbiAgICBpZihkaXNoLnZhbHVlID09IFwiXCIgfHwgc2l6ZS52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwi0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9GPIVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBsaXN0WzBdLmFwcGVuZENoaWxkKGNyZWF0ZU5ld0VsZW1lbnQoZGlzaC52YWx1ZSwgc2l6ZS52YWx1ZSkpO1xyXG4gICAgICBkaXNoLnZhbHVlID0gXCJcIjtcclxuICAgICAgc2l6ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZmluZFBhcmVudChub2RlKSB7XHJcbiAgICB3aGlsZSAoIW5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9vZGFwcC1ibG9ja1wiKSkge1xyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTmV3RWxlbWVudChkaXNoLCBzaXplKSB7XHJcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS50ZXh0Q29udGVudCA9IGRpc2ggKyBcIiAtIFwiICsgc2l6ZSArIFwiINCz0YDQsNC80LxcIjtcclxuXHJcbiAgICByZXR1cm4gbGk7XHJcbiAgfTtcclxufSkoKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
