document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       TRANSITION SCREEN
    ================================================== */

    const transitionScreen =
        document.querySelector(".transition-screen");


    /* ==================================================
       SLIDE 1 ELEMENTS
    ================================================== */

    const description =
        document.querySelector(
            ".slide-1 .slide-text > p"
        );

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
       LEAVING PAGE CHECK
    ================================================== */

    let isLeaving = false;


    /* ==================================================
       SHOW TRANSITION
    ================================================== */

    function showLoading() {

        if (isLeaving) {
            return;
        }

        isLeaving = true;

        console.log(
            "BOTTOM REACHED — SHOWING TRANSITION"
        );


        document.body.style.overflow =
            "hidden";


        if (transitionScreen) {

            transitionScreen.classList.add(
                "show"
            );

            console.log(
                "TRANSITION SCREEN SHOWN"
            );


            setTimeout(function () {

                window.location.href =
                    "scpes.html";

            }, 2500);


        } else {

            console.log(
                "ERROR: .transition-screen NOT FOUND"
            );


            setTimeout(function () {

                window.location.href =
                    "scpes.html";

            }, 2500);

        }

    }


    /* ==================================================
       CHECK IF USER REACHED BOTTOM
    ================================================== */

    function checkBottom() {

        if (isLeaving) {
            return;
        }


        const scrollTop =
            window.scrollY;


        const windowHeight =
            window.innerHeight;


        const documentHeight =
            document.documentElement.scrollHeight;


        const bottomPosition =
            scrollTop + windowHeight;


        const distance =
            documentHeight - bottomPosition;


        console.log(
            "Distance from bottom:",
            distance
        );


        if (distance <= 3) {

            showLoading();

        }

    }


    /* ==================================================
       ENABLE PAGE SCROLLING
    ================================================== */

    document.body.style.overflowY =
        "auto";


    /* ==================================================
       DETECT SCROLL
    ================================================== */

    window.addEventListener(
        "scroll",
        checkBottom,
        {
            passive: true
        }
    );


    /* ==================================================
       DETECT WINDOW RESIZE
    ================================================== */

    window.addEventListener(
        "resize",
        checkBottom
    );


    /* ==================================================
       START PAGE AT TOP
    ================================================== */

    window.scrollTo(
        0,
        0
    );



    /* ==================================================
       SLIDE 2 ANIMATION
    ================================================== */

    const slide2 =
        document.querySelector(
            ".slide-2"
        );


    if (slide2) {

        const slide2Observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                slide2.classList.add(
                                    "active"
                                );

                            } else {

                                slide2.classList.remove(
                                    "active"
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.35
                }

            );


        slide2Observer.observe(
            slide2
        );

    }

});