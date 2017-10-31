var input;
var btn;
var value;
var ctr = 0;
window.onload = function () {
    input = document.getElementById('inp');
    btn = document.getElementById('btn');
    value = input.value;


    if(value != null)
    {
        btn.onclick = function () {
            ctr = ctr + 1;

            addTodo(value);
            var element = document.createElement("DIV");
            element.setAttribute('id', 'element');

            var element2 = document.createElement("DIV");
            element2.setAttribute('id', 'element2');
            // element.appendChild(element2);
            var txt = document.createTextNode(value);

            element.appendChild(txt);
            document.body.appendChild(element);
            document.body.appendChild(element2);



            var bttn1 = document.createElement("BUTTON");
            var t1 = document.createTextNode("Complete");
            bttn1.setAttribute('id', "id1");
            bttn1.appendChild(t1);
            element2.appendChild(bttn1);
            bttn1.onclick = function () {
                element.style.color = "green";
                completeTodo(value);

            }


            var bttn2 = document.createElement("BUTTON");
            var t2 = document.createTextNode("Delete");
            bttn2.setAttribute('id', "id2");
            bttn2.appendChild(t2);
            element2.appendChild(bttn2)
            bttn2.onclick = function () {
                var item = element;
                var item2= element2;
                item.parentNode.removeChild(item);

                item2.parentNode.removeChild(item2);
                deleteTodo(value);
                ctr = ctr - 1;


            }


            var bttn3 = document.createElement("BUTTON");
            var t3 = document.createTextNode("Edit");
            bttn3.setAttribute('id', "id3");
            bttn3.appendChild(t3);
            element2.appendChild(bttn3)
            bttn3.onclick = function () {
                var box = prompt("Please enter todo", "");
                editTodo(box);
                if (box != null) {
                    element.innerText=box;
                }

            }

        }
    }



}