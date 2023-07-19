document.addEventListener('alert-event', function(event) {
    $(function() {
        var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            icon: event.detail.icon,
            title: event.detail.message
        })
    });
});
