/* ==================================================
   PROJECT DATA
================================================== */

const projects = [

    {
        title: "EMBEDDED SYSTEMS",

        description:
            "Projects that combine hardware and software to create smart, efficient, and useful embedded systems."
    },


    {
        title: "IOT / INTERNET OF THINGS",

        description:
            "Projects that connect devices, sensors, and systems to collect data and automate different processes."
    },


    {
        title: "ROBOTICS",

        description:
            "Projects focused on designing and developing robots that can perform useful and intelligent tasks."
    },


    {
        title: "SOFTWARE",

        description:
            "Software projects that develop applications, systems, and digital solutions for different needs."
    },


    {
        title: "MACHINE LEARNING / ML",

        description:
            "Projects that explore machine learning techniques to create systems capable of learning from data."
    },


    {
        title: "DESIGN",

        description:
            "Creative projects involving interface design, product concepts, digital experiences, and visual solutions."
    },


    {
        title: "RESEARCH PROJECTS",

        description:
            "Research-based projects that explore new ideas, technologies, and possible solutions to real-world problems."
    }

];



/* ==================================================
   GET ELEMENTS
================================================== */

const carousel =
    document.getElementById("carousel");


const projectDescription =
    document.getElementById("projectDescription");


const projectTitle =
    document.getElementById("projectTitle");


const projectText =
    document.getElementById("projectText");


const projectNumber =
    document.querySelector(".project-number");


const projectCards =
    document.querySelectorAll(".project-card");


const dots =
    document.querySelectorAll(".dot");


const progress =
    document.getElementById("carouselProgress");


const folderNavigation =
    document.getElementById("folderNavigation");



/* ==================================================
   CURRENT PROJECT
================================================== */

let currentIndex = 0;



/* ==================================================
   UPDATE TEXT
================================================== */

function updateText(index) {

    const project =
        projects[index];


    if (!project) {
        return;
    }


    /*
       Remove current animation
    */

    projectDescription.classList.remove(
        "text-show"
    );


    projectDescription.classList.add(
        "text-hide"
    );


    /*
       Wait for exit animation
    */

    setTimeout(() => {


        projectTitle.textContent =
            project.title;


        projectText.textContent =
            project.description;


        projectNumber.textContent =
            String(index + 1).padStart(2, "0")
            + " / 07";


        /*
           Restart animation
        */

        projectDescription.classList.remove(
            "text-hide"
        );


        void projectDescription.offsetWidth;


        projectDescription.classList.add(
            "text-show"
        );


    }, 250);

}



/* ==================================================
   UPDATE CARD STATES
================================================== */

function updateCards(index) {


    projectCards.forEach(
        (card, i) => {


            card.classList.remove(
                "active",
                "previous",
                "next",
                "far"
            );


            if (i === index) {

                card.classList.add(
                    "active"
                );

            }

            else if (
                i === index - 1
            ) {

                card.classList.add(
                    "previous"
                );

            }

            else if (
                i === index + 1
            ) {

                card.classList.add(
                    "next"
                );

            }

            else {

                card.classList.add(
                    "far"
                );

            }

        }
    );

}



/* ==================================================
   UPDATE DOTS
================================================== */

function updateDots(index) {


    dots.forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        }
    );

}



/* ==================================================
   UPDATE PROGRESS
================================================== */

function updateProgress(index) {

    const percentage =
        ((index + 1) / projects.length) * 100;


    progress.style.width =
        percentage + "%";

}



/* ==================================================
   FOLDER NAVIGATION
================================================== */

function updateFolderNavigation(index) {


    if (
        index === projects.length - 1
    ) {

        folderNavigation.classList.add(
            "show"
        );

    }

    else {

        folderNavigation.classList.remove(
            "show"
        );

    }

}



/* ==================================================
   SHOW PROJECT
================================================== */

function showProject(index) {


    /*
       Prevent invalid index
    */

    if (index < 0) {

        index = 0;

    }


    if (
        index >= projects.length
    ) {

        index =
            projects.length - 1;

    }


    currentIndex =
        index;


    const selectedCard =
        projectCards[index];


    if (!selectedCard) {
        return;
    }



    /* ==============================================
       MOVE CAROUSEL
    ============================================== */

    selectedCard.scrollIntoView({

        behavior: "smooth",

        block: "nearest",

        inline: "center"

    });



    /* ==============================================
       UPDATE EVERYTHING
    ============================================== */

    updateCards(index);

    updateText(index);

    updateDots(index);

    updateProgress(index);

    updateFolderNavigation(index);

}



/* ==================================================
   NEXT PROJECT
================================================== */

function nextProject() {


    if (
        currentIndex <
        projects.length - 1
    ) {

        showProject(
            currentIndex + 1
        );

    }

}



/* ==================================================
   PREVIOUS PROJECT
================================================== */

function previousProject() {


    if (
        currentIndex > 0
    ) {

        showProject(
            currentIndex - 1
        );

    }

}



/* ==================================================
   CLICK IMAGE
================================================== */

projectCards.forEach(
    (card, index) => {


        card.addEventListener(
            "click",
            () => {

                showProject(index);

            }
        );

    }
);



/* ==================================================
   CLICK DOT
================================================== */

dots.forEach(
    (dot, index) => {


        dot.addEventListener(
            "click",
            () => {

                showProject(index);

            }
        );

    }
);



/* ==================================================
   KEYBOARD CONTROLS
================================================== */

document.addEventListener(
    "keydown",
    (event) => {


        /*
           RIGHT ARROW
        */

        if (
            event.key === "ArrowRight"
        ) {

            nextProject();

        }


        /*
           LEFT ARROW
        */

        if (
            event.key === "ArrowLeft"
        ) {

            previousProject();

        }

    }
);



/* ==================================================
   TOUCH SWIPE
================================================== */

let touchStartX = 0;

let touchEndX = 0;



carousel.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);



carousel.addEventListener(
    "touchend",
    (event) => {


        touchEndX =
            event.changedTouches[0].screenX;


        handleSwipe();

    },
    {
        passive: true
    }
);



function handleSwipe() {


    const distance =
        touchEndX - touchStartX;



    /*
       SWIPE LEFT
       → NEXT
    */

    if (
        distance < -50
    ) {

        nextProject();

    }



    /*
       SWIPE RIGHT
       → PREVIOUS
    */

    if (
        distance > 50
    ) {

        previousProject();

    }

}



/* ==================================================
   MOUSE DRAG
================================================== */

let mouseStartX = 0;

let mouseEndX = 0;

let isDragging = false;



carousel.addEventListener(
    "mousedown",
    (event) => {


        isDragging = true;

        mouseStartX =
            event.clientX;

        mouseEndX =
            event.clientX;


        carousel.classList.add(
            "dragging"
        );

    }
);



carousel.addEventListener(
    "mousemove",
    (event) => {


        if (!isDragging) {
            return;
        }


        mouseEndX =
            event.clientX;

    }
);



carousel.addEventListener(
    "mouseup",
    () => {


        if (!isDragging) {
            return;
        }


        isDragging = false;


        carousel.classList.remove(
            "dragging"
        );


        const distance =
            mouseEndX - mouseStartX;



        /*
           DRAG LEFT
        */

        if (
            distance < -50
        ) {

            nextProject();

        }



        /*
           DRAG RIGHT
        */

        if (
            distance > 50
        ) {

            previousProject();

        }

    }
);



carousel.addEventListener(
    "mouseleave",
    () => {


        if (!isDragging) {
            return;
        }


        isDragging = false;


        carousel.classList.remove(
            "dragging"
        );

    }
);



/* ==================================================
   PREVENT IMAGE DRAGGING
================================================== */

projectCards.forEach(
    (card) => {

        const image =
            card.querySelector("img");


        image.addEventListener(
            "dragstart",
            (event) => {

                event.preventDefault();

            }
        );

    }
);



/* ==================================================
   INITIALIZE
================================================== */

showProject(0);