// Section 1   Add Event Listener For this section you will need to bind an event handler to the 'Alert Me!' button when clicked to get the text out of the text input and use a browser alert to show the provided text. 
//Please make sure you check for an empty text input and if that is detected please alert with the follwoing message, "No alert text has been entered!". When you successfully alert some text the user input make sure to clear out the input text box.
document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("sec1-btn1").addEventListener("click", function() {

        const enteredText = document.getElementById('sec1-input').value;

        if(enteredText != "") {

            alert(enteredText);

        } else {
            alert('No alert text has been entered!');
        }
});
    // Section 2 use document.getElementById to change the HTML and CSS
    document.getElementById('sec2-btn1').addEventListener("click", function (){
        document.getElementById('sec2-contentarea').children[0].innerText = 'Nvenkatesan';
        document.getElementById("sec2-box").style.cssText = "background: #888888; width: 100%; height: 20px";
        document.getElementById('sec2-contentarea').children[2].style.cssText = "font-style: italic; font-weight: bold;font-size: 12px";
        document.getElementById('sec2-contentarea').children[3].src = 'img/hamburger_color_icon.png';
        document.getElementById('sec2-contentarea').children[3].alt = 'Color Hamburger Icon';
        document.getElementById('sec2-contentarea').children[3].style.width = '100px';
        document.getElementById('sec2-contentarea').children[5].href = 'https://www.iit.edu';
        document.getElementById('sec2-contentarea').children[5].target = '_blank';
        document.getElementById('sec2-contentarea').children[5].innerText = 'Illinois Tech Website';
        document.getElementById('sec2-contentarea').children[5].style.cssText ="color:#cc0000; text-decoration: underline"
    });
    //Section 3 Implement a degress Celsius to degress Fahrenheit converter.Bind two event handlers to the click event on the two buttons.When they click convert button your code should convert the value to fahrenheit and display the results in the results area to the right. Your results should say "xx degress celsius is equal to xx degress fahrenheit" and be in a p tag. Make sure you clear out the text input on a successful conversion. When the user clicks the clear results button you should clear out the results area.
                //Make sure you test the input for an empty value and alert "No value has been entered!" if the value is empty. Also test for a non-numeric value and alert "A non-numeric value was entered!" if a non-numeric value was provided.
    document.getElementById("sec3-btn1").addEventListener("click", function() {
        const enteredCelsius = document.getElementById('sec3-input').value;
        if(enteredCelsius != "" && !isNaN(enteredCelsius)) {
            const cTemp = enteredCelsius;
            const cToFahr = cTemp * 9 / 5 + 32;
            const node = document.createElement("p");
            const textnode = document.createTextNode(cTemp + " degrees celsius is equal to " + cToFahr+ " degrees fahrenheit");
            node.appendChild(textnode);
            document.getElementById('sec3-contentarea').appendChild(node);
            document.getElementById('sec3-input').value = "";
        } else if(isNaN(enteredCelsius)) {
            alert('A non-numeric value was entered!')
            document.getElementById('sec3-input').value = "";
        }
        else {
            alert('No value has been entered!');
        }
    });
    document.getElementById('sec3-btn2').addEventListener( "click", function () {
        document.getElementById('sec3-contentarea').innerHTML = '';
    });
    //Section 4 <p>In this section you will create a user supplied number of small boxes of a specific color to the results area. The user enters a quantity and chooses a color and you insert that many boxes of that color in the results area. If the user runs it again it will add the the new quantity of colored boxes to the results area. When the user clicks the 'Clear Results' button all the boxes should be removed from the results area.</p>
    //Make sure you test the quantity input for an empty value and alert "No value has been entered!" if the value is empty. Also test for a non-numeric value and alert "A non-numeric value was entered!" if a non-numeric value was provided.
 //The boxes should be made from div elements. Each box should have the background color set to the color the user selected. The boxes should use the inline-block css display option so they flow like text instead of one per line like a block element would. Each block should be 60px square and have a 5px margin on all sides.
    document.getElementById('sec4-btn1').addEventListener( "click", function () {
        const boxQuantity = document.getElementById('sec4-input1').value;
        const selectedColor = document.getElementById('sec4-select1').value;
        if(boxQuantity == '' && !isNaN(boxQuantity)) {
            alert('No value has been entered!');
        } else if(isNaN(boxQuantity)) {
            alert('A non-numeric value was entered!');
            document.getElementById('sec4-input1').value = '';
        }else {
            for (let i = 1; i <= boxQuantity; i++) {
                const node = document.createElement("div");
                node.id = 'colorbox' + i;
                node.style.cssText = "border: 1px black; width: 60px; height: 60px;display: inline-block;" + "background-color:" + selectedColor + ";margin:5px;cursor: pointer";
                node.addEventListener("click", function(){
                    node.remove();
                })
                document.getElementById('sec4-contentarea').appendChild(node);
            }
        }

    });
    document.getElementById('sec4-btn2').addEventListener('click', function () {
        document.getElementById('sec4-contentarea').innerHTML = '';
        document.getElementById('sec4-input1').value = '';
    });
    //Section 5 Keyboard Events. For this section we want the user to be able to type any key in the input box below and show the key that was pressed in the results area.
            //You will need to bind an event listener to the text input to listen for the correct keyboard event and then using the event object passed to the event handler determine which key was pressed.
            //Display the pressed key in the results area using a 'span' element with a font size of 60px and bold.There should only be one key displayed in the results area at any time and it should be the last one pressed.The last key pressed should remain in the results area until another is pressed
    document.getElementById('sec5-input').addEventListener('keypress', function(e){
        document.getElementById('sec5-contentarea').innerHTML = '';
        const node = document.createElement("span");
        node.style.cssText = "font-size:60px;font-weight:bold";
        node.innerText = e.key;
        document.getElementById('sec5-contentarea').appendChild(node);
        document.getElementById('sec5-input').value='';
    });
    //Section 6 Use either of the native AJAX methods discussed in class to do a simple get request for a list of users from the sample API provided. You may use XMLHttpRequest or Fetch API here.
            //Use the API to retrieve a list of users via AJAX. When the user clicks the 'Get Data' button you should send an AJAX request to the correct API endpoint, see documentation, and process the return data to display in the results area to the right. Create a unordered list that includes each users name and email address. Each list item text should be "name, email". After the successful request loads disable the 'Get Data' button.
            //Bind an event handler to the 'Clear Results' button so that it will remove the user list from the results window and enable the 'Get Data' button again.
    document.getElementById('sec6-btn1').addEventListener('click', function () {
        // GET Request.
        fetch('https://jsonplaceholder.typicode.com/users')
            // Handle success
            .then(response => response.json())  // convert to json
            .then(json => showData(json))
            .catch(err => console.log('Request Failed', err)); // Catch errors

    });
    function showData(res) {
            const listDiv = document.getElementById('sec6-contentarea');
            const ul = document.createElement('ul');
            for(let i = 0; i < res.length; ++i) {
                const li = document.createElement('li');
                li.appendChild(document. createTextNode(res[i].name + ',' + res[i].email));
                ul.appendChild(li);
            }
            listDiv.appendChild(ul);
            document.getElementById('sec6-btn1').style.cssText="cursor: not-allowed;pointer-events: none;color: #c0c0c0;background-color: #ffffff;outline:none;border:none"
            console.log(res);
        }
    document.getElementById('sec6-btn2').addEventListener('click', function () {
        document.getElementById('sec6-btn1').style.cssText = '';
        document.getElementById('sec6-contentarea').innerHTML = '';
    });
//Section 7 Use the native AJAX method that you didn't use in section 6 to do a simple get request for a list of users from the sample API provided.
    document.getElementById('sec7-btn1').addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.onload = function() {
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.response);
                const listDiv = document.getElementById('sec7-contentarea');
                const ul = document.createElement('ul');
                for (let i = 0; i < res.length; ++i) {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(res[i].name + ',' + res[i].email));
                    ul.appendChild(li);
                }
                listDiv.appendChild(ul);
                document.getElementById('sec7-btn1').style.cssText = "cursor: not-allowed;pointer-events: none;color: #c0c0c0;background-color: #ffffff;outline:none;border:none"
                console.log(res);
            }
            else {
                alert('Request failed.  Returned status of ' + xhr.status);
            }
        };
        xhr.send();
    });
    document.getElementById('sec7-btn2').addEventListener('click', function () {
        document.getElementById('sec7-btn1').style.cssText = '';
        document.getElementById('sec7-contentarea').innerHTML = '';
    });
});