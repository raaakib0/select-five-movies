


document.getElementById('button-1').addEventListener('click', function () {
    const innerTextValue = document.getElementById('inner-text1').innerText;

    const createLi = document.createElement('li');
    createLi.appendChild(document.createTextNode(innerTextValue));
    const orderedList = document.getElementById('add-element').appendChild(createLi);

})


