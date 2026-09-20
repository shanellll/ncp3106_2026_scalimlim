document.addEventListener("DOMContentLoaded", () => {

    const transitionScreen =
        document.querySelector(".transition-screen");

    let isLeaving = false;


    function showLoading() {

        if (isLeaving) return;

        isLeaving = true;

        console.log("BOTTOM REACHED — SHOWING LOADING");


        // Stop scrolling
        document.body.style.overflow = "hidden";


        // Show loading screen
        if (transitionScreen) {

            transitionScreen.classList.add("show");

            console.log("LOADING SCREEN SHOWN");


            // Wait 2.5 seconds
            setTimeout(() => {

                window.location.href = "projects.html";

            }, 2500);

        } else {

            console.log("ERROR: .transition-screen NOT FOUND");

            setTimeout(() => {

                window.location.href = "projects.html";

            }, 2500);

        }

    }


    function checkBottom() {

        if (isLeaving) return;


        const scrollTop = window.scrollY;

        const windowHeight = window.innerHeight;

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


    // Normal scrolling
    document.body.style.overflowY = "auto";


    // Check whenever user scrolls
    window.addEventListener(
        "scroll",
        checkBottom,
        { passive: true }
    );


    // Also check after resizing
    window.addEventListener(
        "resize",
        checkBottom
    );


    // Start at top
    window.scrollTo(0, 0);

});