// 1. Select the section with an id of container without using querySelector.
document.getElementById('container')

// 2. Select the section with an id of container using querySelector
document.querySelector('#container')

// 3. Select all of the list items with a class of "second"
document.querySelectorAll('.second')

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelectorAll('ol .third');

// 5. Give the section with an id of container the text "Hello!".
let section = document.querySelector('#container');
section.innerText = "Hello!";

// 6. Add the class main to the div with a class of footer.
let div = document.querySelector('.footer')
div.classList.add('main');

// 7. Remove the class main on the div with a class of footer.
div.classList.remove('footer');

// 8. Create a new li element.
let li = document.createElement('li');

// 9. Give the li the text "four".
li.innerText = "four"

// 10. Append the li to the ul element
let ul = document.querySelector('ul');
ul.append(li);

// 11. Loop over all of the lis inside the ol tag and give them a background color of "green"
let li = document.querySelectorAll('ol li');
for (let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'green';
}
// 12. Remove the div with a class of footer.
let footer = document.querySelector('.footer');
footer.remove();
