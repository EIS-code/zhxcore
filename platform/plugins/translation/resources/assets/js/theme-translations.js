$(document).ready(function () {
    $(document).on('click', '.button-save-theme-translations', event => {
        event.preventDefault();
        let _self = $(event.currentTarget);
        _self.addClass('button-loading');

        let $form = _self.closest('form');

        $.ajax({
            url: $form.prop('action'),
            type: 'POST',
            data: $form.serialize(),
            success: data => {
                _self.removeClass('button-loading');

                if (data.error) {
                    ZHXCore.showError(data.message);
                } else {
                    ZHXCore.showSuccess(data.message);
                    $form.removeClass('dirty');
                }
            },
            error: data => {
                _self.removeClass('button-loading');
                ZHXCore.handleError(data);
            }
        });
    });
});
