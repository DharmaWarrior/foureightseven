function showFeature(index) {
    const headings = document.querySelectorAll('.heading');
    const descriptions = document.querySelectorAll('.description');

    // Remove active class from all headings and descriptions
    headings.forEach(heading => heading.classList.remove('active'));
    descriptions.forEach(description => description.classList.remove('active'));

    // Add active class to the selected heading and description
    headings[index].classList.add('active');
    descriptions[index].classList.add('active');
}

function changeImage(newSrc) {
    const image = document.getElementById('currentImage');

    // Add the fade-out class
    image.classList.add('fade-out');

    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Change the src attribute
        

        // Remove the fade-out class and add the fade-in class
        image.classList.remove('fade-out');
        image.classList.add('fade-in');

        // Remove the fade-in class after the transition completes
        setTimeout(() => {
            image.classList.remove('fade-in');
        }, 100);
        image.src = newSrc; // This duration should match the transition duration in the CSS
    }, 100);
}
const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");
select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open")
})
options.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        options.forEach(option => {
            option.classList.remove("active")
        })
        option.classList.add("active")
    })
})




function showFeature(index) {
    const headings = document.querySelectorAll('.heading');
    const descriptions = document.querySelectorAll('.description');

    // Remove active class from all headings and descriptions
    headings.forEach(heading => heading.classList.remove('active'));
    descriptions.forEach(description => description.classList.remove('active'));

    // Add active class to the selected heading and description
    headings[index].classList.add('active');
    descriptions[index].classList.add('active');
}


