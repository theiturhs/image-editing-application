function displayImage() {
    const input = document.getElementById('image_input');
    const container = document.getElementById('image');
    
    // Ensure a file is selected
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;

            // Clear previous content
            container.innerHTML = '';

            // Append the new image
            container.appendChild(img);
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(input.files[0]);
    }
}