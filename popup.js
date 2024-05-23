// Save Text
document.getElementById('save').addEventListener('click', function save() {
    const download = document.getElementById("hidden-link");
    const Text = document.getElementById('Text')
    download.href = "data:text/plain," + Text.value;
    download.click();
});

// Copy Text To Clipboard
document.getElementById('copy').addEventListener('click', function copy() {
    const copy = document.getElementById('Text');
    navigator.clipboard.writeText(copy.value)
});

// Clear
document.getElementById('clear').addEventListener('click', function () {
    const Text = document.getElementById('Text');
    Text.value = '';
});

// Save & Load
function saveData() {
    const Text = document.getElementById('Text');
    localStorage.setItem('TextValue', Text.value);

    loadData();
}

function loadData() {
    const TextValue = localStorage.getItem('TextValue');
    if (TextValue != '') {
        const Text = document.getElementById('Text');
        Text.value = TextValue;
    }
}

setInterval(saveData, 500);
window.onload = loadData;