import $ from "jquery";

export function initialize(): void {
    $("#server-deactivate-form").validate({
        submitHandler(form) {
            const $loader = $("#server-deactivate-form").find(".loader");
            $loader.get(0)!.style.display = "inline-block";
            $("#server-deactivate-button .server-deactivate-button-text").hide();

            form.submit();
        },
    });
}

$(() => {
    initialize();
});
