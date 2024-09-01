(function($){
    const toggleSpMenu = $(document).on("change", '[name="menu-flg"]', () => {
        const menu = $(".menu").first();
        menu.toggleClass("open");
    });


    const clickedLink = $(document).on("click", ".menu li a", () => {
        const checkbox =  $('[name="menu-flg"]');
        const checked = checkbox.prop("checked");
        const toggleClass = "open";
        const menu = $(".menu").first();
        if (checked) {
            checkbox.prop("checked", false);
            menu.removeClass(toggleClass);
        } else {
            checkbox.prop("checked", true);
            menu.toggleClass(toggleClass);
        }
    });

    const selectedSNS = $(document).on("change", '[name="sns"]', () => {
        const selectedSns = $('[name="sns"]:checked').attr("id");
        const toggleClass = "current";
        $(".embedded").each((index, val) => {
            if (val.className.includes(selectedSns)) {
                val.classList.add(toggleClass);
            } else {
                val.classList.remove(toggleClass);
            }
        });
    });

    const resizeEvent = $(window).resize(() => {
        const checkbox =  $('[name="menu-flg"]');
        const width = $(window).width();
        const menu = $(".menu").first();

        if (checkbox && 960 < width) {
            menu.removeClass("hide");
            menu.removeClass("open");
            checkbox.prop("checked", false);
        } else {
            menu.addClass("hide")
                .delay(500)
                .queue(() => { 
                    menu.removeClass("hide").dequeue();
                });
        }
    });
})(jQuery);