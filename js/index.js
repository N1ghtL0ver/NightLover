document.querySelector(".more_info").addEventListener('click', function(){
    Swal.fire({
        title: 'Infromation',
        html: 'Github:  <a href="https://github.com/N1ghtL0ver">links</a>',
        icon: 'success',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
    });
});