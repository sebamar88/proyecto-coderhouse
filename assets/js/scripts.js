const splide = new Splide(".splide", {
    rewind: true,
    perPage: 3,
    focus: "center",
    gap: "1rem",
    breakpoints: {
        640: {
            perPage: 1,
        },
    },
});

splide.mount();

lightbox.option({
    resizeDuration: 200,
    showImageNumberLabel: false,
    wrapAround: true,
});
