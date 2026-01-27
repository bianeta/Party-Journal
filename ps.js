// Initialize popup behavior after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('open-dialog-button');
  const closeButton = document.getElementById('close-dialog-button');
  const partyDialog = document.getElementById('party-dialog');

  if (!partyDialog) {
    console.warn('Dialog element #party-dialog not found.');
    return;
  }

  // If the browser doesn't support <dialog>, provide a simple fallback
  const hasDialogSupport = typeof partyDialog.showModal === 'function';

  if (!hasDialogSupport) {
    // Fallback: toggle visibility via inline style
    if (openButton) {
      openButton.addEventListener('click', () => {
        partyDialog.style.display = 'block';
      });
    }
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        partyDialog.style.display = 'none';
      });
    }
    return;
  }

  // Use the dialog API when available
  if (openButton) {
    openButton.addEventListener('click', () => partyDialog.showModal());
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => partyDialog.close());
  }
});