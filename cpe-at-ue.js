
document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       ENABLE PAGE SCROLLING
    ================================================== */

    document.body.style.overflowY = "auto";

    /* Start page at the top */
    window.scrollTo(0, 0);


    /* ==================================================
       SLIDE 1 — ELEMENTS
    ================================================== */

    const slide1 =
        document.querySelector(".slide-1");

    const bsText =
        document.querySelector(
            ".slide-1 .bs-text"
        );

    const engineeringText =
        document.querySelector(
            ".slide-1 .engineering-text"
        );


    /* ==================================================
       SLIDE 1 — TITLE ANIMATION
    ================================================== */

    if (
        slide1 &&
        bsText &&
        engineeringText
    ) {

        const slide1TitleObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            /* Remove old animation */
                            bsText.classList.remove(
                                "title-show"
                            );

                            engineeringText.classList.remove(
                                "title-show"
                            );


                            /* Force animation restart */
                            void bsText.offsetWidth;
                            void engineeringText.offsetWidth;


                            /* Start animation */
                            bsText.classList.add(
                                "title-show"
                            );

                            engineeringText.classList.add(
                                "title-show"
                            );

                        } else {

                            bsText.classList.remove(
                                "title-show"
                            );

                            engineeringText.classList.remove(
                                "title-show"
                            );

                        }

                    });

                },

                {
                    threshold: 0.35
                }

            );


        slide1TitleObserver.observe(slide1);

    }


    /* ==================================================
       SLIDE 1 — INFO BOX WAVE
    ================================================== */

    if (slide1) {

        const slide1InfoObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            /* Restart info box animation */
                            slide1.classList.remove(
                                "active"
                            );

                            void slide1.offsetWidth;

                            slide1.classList.add(
                                "active"
                            );

                        } else {

                            slide1.classList.remove(
                                "active"
                            );

                        }

                    });

                },

                {
                    threshold: 0.35
                }

            );


        slide1InfoObserver.observe(slide1);

    }


    /* ==================================================
       SLIDE 2 — SPECIALIZATION CARD ANIMATION
    ================================================== */

    const slide2 =
        document.querySelector(".slide-2");


    if (slide2) {

        const slide2Observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            slide2.classList.remove(
                                "active"
                            );

                            void slide2.offsetWidth;

                            slide2.classList.add(
                                "active"
                            );

                        } else {

                            slide2.classList.remove(
                                "active"
                            );

                        }

                    });

                },

                {
                    threshold: 0.35
                }

            );


        slide2Observer.observe(slide2);

    }


    /* ==================================================
       SLIDE 3 — PROJECT CARD ANIMATION
    ================================================== */

    const slide3 =
        document.querySelector(".slide-3");


    if (slide3) {

        const slide3Observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            slide3.classList.remove(
                                "active"
                            );

                            void slide3.offsetWidth;

                            slide3.classList.add(
                                "active"
                            );

                        } else {

                            slide3.classList.remove(
                                "active"
                            );

                        }

                    });

                },

                {
                    threshold: 0.35
                }

            );


        slide3Observer.observe(slide3);

    }


    /* ==================================================
       SLIDE 5 — NEWS CARD ANIMATION
    ================================================== */

    const slide5 =
        document.querySelector(".slide-5");


    if (slide5) {

        const slide5Observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            /* Restart news card animation */
                            slide5.classList.remove(
                                "active"
                            );

                            void slide5.offsetWidth;

                            slide5.classList.add(
                                "active"
                            );

                        } else {

                            slide5.classList.remove(
                                "active"
                            );

                        }

                    });

                },

                {
                    threshold: 0.35
                }

            );


        slide5Observer.observe(slide5);

    }


    /* ==================================================
       SLIDE 6 — FACULTY INTRO ANIMATION
    ================================================== */

    const slide6 =
        document.querySelector(".slide-6");


    if (slide6) {

        const slide6Observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            /* Restart faculty animation */
                            slide6.classList.remove(
                                "active"
                            );

                            void slide6.offsetWidth;

                            slide6.classList.add(
                                "active"
                            );

                        } else {

                            slide6.classList.remove(
                                "active"
                            );

                        }

                    });

                },

                {
                    threshold: 0.35
                }

            );


        slide6Observer.observe(slide6);

    }

});

