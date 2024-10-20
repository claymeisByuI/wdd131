const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

window.onload = function () {
    const productSelect = document.getElementById('productSelect');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    const lastModified = document.lastModified;
    const currentYear = (new Date()).getFullYear();

    const yearElement = document.getElementById("current-year");
    yearElement.innerText = currentYear;

    const lastModifiedElements = document.getElementsByClassName("last-modified");
    if (lastModifiedElements && lastModifiedElements.length > 0) {
        lastModifiedElements[0].innerText = lastModified;
    }

    // Check if the counter exists in localStorage
    if (!localStorage.getItem('reviewCounter')) {
        localStorage.setItem('reviewCounter', '0');
    }

    // Display the current counter
    const reviewCounterElement = document.getElementById('reviewCounter');
    reviewCounterElement.textContent = `Reviews submitted: ${localStorage.getItem('reviewCounter')}`;

    // Handle form submission
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        let counter = parseInt(localStorage.getItem('reviewCounter'), 10);
        counter += 1;
        localStorage.setItem('reviewCounter', counter.toString());

        reviewCounterElement.textContent = `Reviews submitted: ${counter}`;
        alert('Form submitted successfully!');

        form.reset();
    });
};