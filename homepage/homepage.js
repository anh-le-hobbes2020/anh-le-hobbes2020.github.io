

const openDropdown = document.getElementById('menu');

function dropdownMenu() {
    //access class dropdown-menu of menu
    console.log(openDropdown);
            //openDropdown.classList.remove('none');
            openDropdown.style.display="block";
}

document.getElementById('dropdown-button').addEventListener('click', dropdownMenu);


document.querySelector('#close').addEventListener("click", function() {
  document.querySelector('#menu').style.display="none";
})