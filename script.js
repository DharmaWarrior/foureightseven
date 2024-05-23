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