(function(EmailsInput, random) {
  'use strict'

  document.addEventListener('DOMContentLoaded', function() {
    const inputContainerNode = document.querySelector('#emails-input')
    const emailsInput = EmailsInput(inputContainerNode)

   
    window.emailsInput = emailsInput

    document.querySelector('[data-action="get-emails-count"]')
      .addEventListener('click', function() {
        const emails = emailsInput.getValue()
        alert('there are ' + emails.length + ' valid email(s)')
      })
  })

}(window.lib.EmailsInput, window.lib.utils.random))
