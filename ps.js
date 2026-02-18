
const dialog = document.getElementById('my-dialog');
const openButton = document.getElementById('open-dialog-btn');
const closeButton = document.getElementById('close-dialog-btn');

// Open the dialog
openButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the dialog
closeButton.addEventListener('click', () => {
  dialog.close();
});