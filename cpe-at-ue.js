document.addEventListener("DOMContentLoaded", function () {

    const transitionScreen =
        document.querySelector(".transition-screen");

    const description =
        document.querySelector(".slide-1 .slide-text > p");

    const slide1 =
        document.querySelector(".slide-1");

    const bsText =
        document.querySelector(".slide-1 .bs-text");

    const engineeringText =
        document.querySelector(
            ".slide-1 .engineering-text"
        );

    let isLeaving = false;


    /* ==================================================
       SLIDE 1 — DESCRIPTION STREAMING
       PLAYS EVERY TIME SLIDE 1 ENTERS
       KEEPS ORIGINAL SPACING AND FORMAT
    ================================================== */

    if (description) {

        /* Save the original HTML exactly as it is */
        const originalHTML =
            description.innerHTML;

        const temp =
            document.createElement("div");

        temp.innerHTML =
            originalHTML;


        /* Find only text nodes */
        const walker =
            document.createTreeWalker(
                temp,
                NodeFilter.SHOW_TEXT
            );

        const textNodes = [];

        while (walker.nextNode()) {
            textNodes.push(
                walker.currentNode
            );
        }


        /* Wrap words but keep original spacing */
        textNodes.forEach(function (node) {

            const text =
                node.nodeValue;

            /* Ignore whitespace-only nodes */
            if (!text.trim()) {
                return;
            }


            const fragment =
                document.createDocumentFragment();

            /*
             * Split words and whitespace separately.
             * This keeps the original spacing
             * and line breaks.
             */
            const parts =
                text.split(/(\s+)/);


            parts.forEach(function (part) {

                /* Keep whitespace exactly */
                if (/^\s+$/.test(part)) {

                    fragment.appendChild(
                        document.createTextNode(part)
                    );

                }

                /* Wrap words */
                else if (part !== "") {

                    const span =
                        document.createElement("span");

                    span.className =
                        "t-stream-w";

                    span.textContent =
                        part;

                    fragment.appendChild(
                        span
                    );

                }

            });


            node.parentNode.replaceChild(
                fragment,
                node
            );

        });


        /* Put processed content back */
        description.innerHTML =
            temp.innerHTML;


        /* ==================================================
           DESCRIPTION STREAM FUNCTION
        ================================================== */

        function startTextStream() {

            const words =
                description.querySelectorAll(
                    ".t-stream-w"
                );


            /* Reset first */
            words.forEach(function (word) {

                word.classList.remove(
                    "is-in"
                );

            });


            /* Animate each word */
            words.forEach(
                function (word, index) {

                    setTimeout(
                        function () {

                            word.classList.add(
                                "is-in"
                            );

                        },
                        index * 60
                    );

                }
            );

        }


        /* ==================================================
           DESCRIPTION OBSERVER
        ================================================== */

        const descriptionObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                /*
                                 * Slide 1 entered.
                                 * Start text streaming.
                                 */
                                startTextStream();

                            }

                            else {

                                /*
                                 * Slide 1 left.
                                 * Reset the text.
                                 */
                                const words =
                                    description.querySelectorAll(
                                        ".t-stream-w"
                                    );


                                words.forEach(
                                    function (word) {

                                        word.classList.remove(
                                            "is-in"
                                        );

                                    }
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.25
                }
            );


        descriptionObserver.observe(
            description
        );

    }


    /* ==================================================
       SLIDE 1 — TITLE ANIMATION FROM LEFT
    ================================================== */

    if (
        slide1 &&
        bsText &&
        engineeringText
    ) {

        const titleObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                /*
                                 * Slide 1 entered.
                                 * Start BS animation.
                                 */
                                bsText.classList.add(
                                    "title-show"
                                );


                                /*
                                 * Start Computer
                                 * Engineering animation.
                                 */
                                engineeringText.classList.add(
                                    "title-show"
                                );

                            }

                            else {

                                /*
                                 * Slide 1 left.
                                 * Remove animation so it
                                 * can play again.
                                 */
                                bsText.classList.remove(
                                    "title-show"
                                );


                                engineeringText.classList.remove(
                                    "title-show"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.25
                }
            );


        titleObserver.observe(
            slide1
        );

    }


    /* ==================================================
       BOTTOM TRANSITION
    ================================================== */

    function showLoading() {

        if (isLeaving) {
            return;
        }

        isLeaving = true;


        console.log(
            "BOTTOM REACHED — SHOWING LOADING"
        );


        /* Stop scrolling */
        document.body.style.overflow =
            "hidden";


        /* Show loading screen */
        if (transitionScreen) {

            transitionScreen.classList.add(
                "show"
            );


            console.log(
                "LOADING SCREEN SHOWN"
            );


            /* Wait 2.5 seconds */
            setTimeout(function () {

                window.location.href =
                    "projects.html";

            }, 2500);

        }

        else {

            console.log(
                "ERROR: .transition-screen NOT FOUND"
            );


            setTimeout(function () {

                window.location.href =
                    "projects.html";

            }, 2500);

        }

    }


    /* ==================================================
       CHECK BOTTOM
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
       NORMAL SCROLLING
    ================================================== */

    document.body.style.overflowY =
        "auto";


    /* ==================================================
       CHECK WHEN USER SCROLLS
    ================================================== */

    window.addEventListener(
        "scroll",
        checkBottom,
        {
            passive: true
        }
    );


    /* ==================================================
       CHECK AFTER RESIZE
    ================================================== */

    window.addEventListener(
        "resize",
        checkBottom
    );


    /* ==================================================
       START AT TOP
    ================================================== */

    window.scrollTo(
        0,
        0
    );

});