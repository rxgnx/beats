const openItem = item => {
    const container = item.closest(".team__item");
    const description = container.find(".team__description");
    const content = description.find(".team__content");
    const height = content.height();

    container.addClass("open");
    description.height(height);
};

const closeItem = container => {
    const items = container.find(".team__description");
    const itemContainer = container.find(".team__item");
    itemContainer.removeClass("open");
    items.height(0);
};

$(".team__name").on("click", e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const container = $this.closest(".team__list");
    const elemContainer = $this.closest(".team__item");

    if (elemContainer.hasClass("open")) {
        closeItem(container);
    } else {
        closeItem(container);
        openItem($this);
    }
});