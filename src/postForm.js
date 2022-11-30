/* eslint-disable import/prefer-default-export */
const URL = '/form/send';

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  return await res.json();
};

export function postForm() {
  const forms = document.querySelectorAll('#form');

  for (let i = 0; i < form.length; i++) {
    const form = forms[i];

    const inputs = form.querySelectorAll('input');
    const button = form.querySelector('button');

    function checkValid() {
      let isError = inputs.length;

      inputs.forEach((i) => {
        if (i.validity.valid) {
          isError--;
        }
      });
      isError ? button.classList.add('disabled') : button.classList.remove('disabled');
    }

    inputs.forEach((i) => {
      i.addEventListener('change', checkValid);
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData(URL, json)
        .then((data) => {
          console.log(data);
          form.innerHTML = `
        <div class="succes__content">
            <h2 class="succes__title">Заявка отправлена</h2>
            <p class="succes__text">${createName(
              formData,
            )}, ваш запрос успешно отправлен. Наш менеджер свяжется с вами в ближайшее время.</p>
        </div>
      `;
        })
        .catch(() => {
          form.innerHTML = `
        <div class="succes__content">
            <h2 class="succes__title">Что-то пошло не так…</h2>
        </div>
      `;
        })
        .finally(() => {
          form.reset();
        });
    });
  }
}

function createName(data) {
  return `${data.get('name')} `;
}
