const windows = [];
let listener = null;

const onEscapePress = ({ key }) => {
  if (key === 'Escape') {

    const index = windows.length - 1;
    if (windows[index].conditions && !windows[index].conditions()) {
      return;
    }
    windows[index].closeModal();
    windows.length -= 1;
    if (!windows.length) {
      listener = null;
      listener = document.removeEventListener('keydown', onEscapePress);
    }
  }
};

export const setEscapeControl = (closeModal, conditions = null) => {
  windows.push({
    closeModal,
    conditions
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onEscapePress);
  }
};

export const removeEscapeControl = () => {
  windows.length -= 1;
  if (!windows.length) {
    listener = null;
    listener = document.removeEventListener('keydown', onEscapePress);
  }
};
