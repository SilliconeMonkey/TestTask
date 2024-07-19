function updateInput() {
    const dropdown = document.getElementById('dropdown');
    const inputField = document.getElementById('inputField');
    inputField.value = dropdown.value;
}

function saveText() {
    const dropdown = document.getElementById('dropdown');
    const inputField = document.getElementById('inputField');
    const selectedIndex = dropdown.selectedIndex;

    if (selectedIndex >= 0) {
        dropdown.options[selectedIndex].text = inputField.value;
        dropdown.options[selectedIndex].value = inputField.value;
    }
}