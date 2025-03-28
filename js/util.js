const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const showErrorMessage = () => {
  const messageTag = dataErrorTemplate.cloneNode(true);
  body.append(messageTag);
  setTimeout(() => {
    messageTag.remove();
  }, 5000);
};
