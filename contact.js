const scriptURL = 'https://script.google.com/macros/s/AKfycbz9R81FxlG-ZtVzllIdXvR9v3Jp4vBOeENBBGHMMsKqIoKHRbBTCuch0GAXJnulbYYyyw/exec'
    const form = document.forms['contact']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })
