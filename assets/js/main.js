document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.sidenav').sidenav();
});
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "PI38ULXyHLhiD3skz",
  });
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_uqdxjtr', 'contact_form', this)
          .then(() => {
              console.log('SUCCESS!');
          }, (error) => {
              console.log('FAILED...', error);
          });
  });
}


