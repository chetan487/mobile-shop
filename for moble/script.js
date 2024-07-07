// Add event listener to "Add to Cart" buttons
document.querySelectorAll('.products button').forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart logic here
        console.log('Product added to cart!');
    });
});