/* ==================================================
   SCPES JAVASCRIPT
================================================== */


/* ==================================================
   01 — INTRO PHOTO STACK
================================================== */

const photoStack =
    document.querySelector(".photo-stack");

const photoCards =
    document.querySelectorAll(".photo-card");


let activePhoto = 2;

let photoWheelLocked = false;


/* ==================================================
   UPDATE PHOTO STACK
================================================== */

function updatePhotoStack() {

    photoCards.forEach((card, index) => {

        let position =
            index - activePhoto;


        /*
           Keep the photos between
           -2 and +2 positions.
        */

        if (position < -2) {
            position = 3;
        }

        if (position > 2) {
            position = -3;
        }


        /* ------------------------------------------
           CENTER
        ------------------------------------------ */

        if (position === 0) {

            card.style.transform =
                "translateX(0) rotate(0deg) scale(1)";

            card.style.opacity = "1";

            card.style.zIndex = "5";

        }


        /* ------------------------------------------
           LEFT
        ------------------------------------------ */

        else if (position === -1) {

            card.style.transform =
                "translateX(-190px) rotate(-7deg) scale(.88)";

            card.style.opacity = ".7";

            card.style.zIndex = "2";

        }


        /* ------------------------------------------
           FAR LEFT
        ------------------------------------------ */

        else if (position === -2) {

            card.style.transform =
                "translateX(-380px) rotate(-14deg) scale(.75)";

            card.style.opacity = ".45";

            card.style.zIndex = "1";

        }


        /* ------------------------------------------
           RIGHT
        ------------------------------------------ */

        else if (position === 1) {

            card.style.transform =
                "translateX(190px) rotate(7deg) scale(.88)";

            card.style.opacity = ".7";

            card.style.zIndex = "2";

        }


        /* ------------------------------------------
           FAR RIGHT
        ------------------------------------------ */

        else if (position === 2) {

            card.style.transform =
                "translateX(380px) rotate(14deg) scale(.75)";

            card.style.opacity = ".45";

            card.style.zIndex = "1";

        }

    });

}


/* ==================================================
   PHOTO MOUSE WHEEL
================================================== */

if (photoStack) {

    photoStack.addEventListener(
        "wheel",
        function(event) {

            /*
               IMPORTANT:

               This prevents the PAGE from scrolling
               ONLY when the mouse is over the
               photo stack.

               Outside the photo stack, the normal
               page scrolling remains active.
            */

            event.preventDefault();

            event.stopPropagation();


            if (photoWheelLocked) {
                return;
            }


            photoWheelLocked = true;


            /* --------------------------------------
               SCROLL DOWN
            -------------------------------------- */

            if (event.deltaY > 0) {

                activePhoto++;

                if (
                    activePhoto >=
                    photoCards.length
                ) {

                    activePhoto = 0;

                }

            }


            /* --------------------------------------
               SCROLL UP
            -------------------------------------- */

            else {

                activePhoto--;

                if (activePhoto < 0) {

                    activePhoto =
                        photoCards.length - 1;

                }

            }


            updatePhotoStack();


            /*
               Prevent the wheel from changing
               multiple photos too quickly.
            */

            setTimeout(
                function() {

                    photoWheelLocked = false;

                },
                500
            );

        },
        {
            passive: false
        }
    );

}


/* ==================================================
   INITIALIZE PHOTO STACK
================================================== */

updatePhotoStack();



/* ==================================================
   02 — OFFICERS
================================================== */


/*
   ==================================================
   EDIT YOUR OFFICERS HERE
   ==================================================

   You have 13 officers.

   Change only:

   name
   position
   year
   image
   description

*/

const officers = [

    {
        name: "Charlize Mae S. Baldovino",
        position: "PRESIDENT",
        year: "2026 — 2027",
        image: "Assets/scpesofficer1.jpg",
        description:
            "Leads the organization and oversees its overall operations."
    },


    {
        name: "Jawad Hadji Cassan M. Macawadib",
        position: "VICE PRESIDENT FOR INTERNAL AFFAIRS",
        year: "2026 — 2027",
        image: "Assets/scpesofficer2.jpg",
        description:
            "Manages internal coordination and member relations."
    },


    {
        name: "Joshua R. Madriaga",
        position: "VICE PRESIDENT FOR EXTERNAL AFFAIRS",
        year: "2026 — 2027",
        image: "Assets/scpesofficer3.jpg",
        description:
            "Handles partnerships and external relations."
    },


    {
        name: "Ghenny Mae A. Manabat",
        position: "VICE PRESIDENT FOR SECRETARIAT",
        year: "2026 — 2027",
        image: "Assets/scpesofficer4.jpg",
        description:
            "Manages records, documents, and administrative tasks."
    },


    {
        name: "Jessica P. Apostol",
        position: "VICE PRESIDENT FOR BUSINESS AND FINANCE",
        year: "2026 — 2027",
        image: "Assets/scpesofficer5.jpg",
        description:
            "Oversees finances, budgeting, and fundraising."
    },


    {
        name: "Joshua C. Purificacion",
        position: "VICE PRESIDENT FOR CAREER DEVELOPMENT ",
        year: "2026 — 2027",
        image: "Assets/scpesofficer6.jpg",
        description:
            "Supports members' career growth and opportunities."
    },


    {
        name: "Roselle Gabrielle J. Landayan",
        position: "VICE PRESIDENT FOR EVENTS AND PROGRAMS",
        year: "2026 — 2027",
        image: "Assets/scpesofficer7.jpg",
        description:
            "Plans and manages events and programs."
    },


    {
        name: "Earl Duncan C. Lorenzo",
        position: "VICE PRESIDENT FOR OUTREACH AND SOCIAL RESPONSIBILITY ",
        year: "2026 — 2027",
        image: "Assets/scpesofficer8.jpg",
        description:
            "Leads community outreach and service activities."
    },


    {
        name: "Kriselda Mei G. Rupera",
        position: "VICE PRESIDENT FOR TECHNICAL OPERATIONS",
        year: "2026 — 2027",
        image: "Assets/scpesofficer9.jpg",
        description:
            "Handles technical needs and operations."
    },


    {
        name: "Jian Miel M. Cruz",
        position: "VICE PRESIDENT FOR CREATIVES & COMMUNICATIONS",
        year: "2026 — 2027",
        image: "Assets/scpesofficer10.jpg",
        description:
            "Creates content and manages communications."
    },


    {
        name: "Joezer C. Cornita",
        position: "VICE PRESIDENT FOR MEDIA",
        year: "2026 — 2027",
        image: "Assets/scpesofficer11.jpg",
        description:
            "Handles media coverage and event documentation."
    },


    {
        name: "Bench Calvin Paed",
        position: "VICE PRESIDENT FOR LOGISTICS & EVENT COORDINATION",
        year: "2026 — 2027",
        image: "Assets/scpesofficer12.jpg",
        description:
            "Manages event logistics and coordination."
    },


    {
        name: "Felix Frederick L. Adriano",
        position: "VICE PRESIDENT FOR RECREATION & WELLNESS",
        year: "2026 — 2027",
        image: "Assets/scpesofficer13.jpg",
        description:
            "Promotes recreation, wellness, and member engagement."
    }

];



/* ==================================================
   OFFICER ELEMENTS
================================================== */

const officerImage =
    document.getElementById(
        "officerImage"
    );


const officerPosition =
    document.getElementById(
        "officerPosition"
    );


const officerName =
    document.getElementById(
        "officerName"
    );


const officerYear =
    document.getElementById(
        "officerYear"
    );


const officerDescription =
    document.getElementById(
        "officerDescription"
    );


const officerCurrent =
    document.getElementById(
        "officerCurrent"
    );


const officerNumber =
    document.querySelector(
        ".officer-number"
    );


const officerImageWrap =
    document.querySelector(
        ".officer-image-wrap"
    );


const officerPreview =
    document.getElementById(
        "officerPreview"
    );


let currentOfficer = 0;



/* ==================================================
   CREATE OFFICER MINI CARDS
================================================== */

if (officerPreview) {

    officers.forEach(
        (officer, index) => {

            const mini =
                document.createElement(
                    "div"
                );


            mini.classList.add(
                "officer-mini"
            );


            if (index === 0) {

                mini.classList.add(
                    "active"
                );

            }


            mini.innerHTML = `
                <img
                    src="${officer.image}"
                    alt="${officer.name}"
                >
            `;


            mini.addEventListener(
                "click",
                function() {

                    showOfficer(index);

                }
            );


            officerPreview.appendChild(
                mini
            );

        }
    );

}



/* ==================================================
   SHOW OFFICER
================================================== */

function showOfficer(index) {

    if (
        index < 0 ||
        index >= officers.length
    ) {

        return;

    }


    currentOfficer = index;


    const officer =
        officers[index];


    /*
       Start image transition
    */

    if (officerImageWrap) {

        officerImageWrap.classList.add(
            "changing"
        );

    }


    setTimeout(
        function() {

            if (officerImage) {

                officerImage.src =
                    officer.image;

                officerImage.alt =
                    officer.name;

            }


            if (officerPosition) {

                officerPosition.textContent =
                    officer.position;

            }


            if (officerName) {

                officerName.textContent =
                    officer.name;

            }


            if (officerYear) {

                officerYear.textContent =
                    officer.year;

            }


            if (officerDescription) {

                officerDescription.textContent =
                    officer.description;

            }


            if (officerCurrent) {

                officerCurrent.textContent =
                    String(index + 1)
                        .padStart(2, "0");

            }


            if (officerNumber) {

                officerNumber.textContent =
                    String(index + 1)
                        .padStart(2, "0");

            }


            if (officerImageWrap) {

                officerImageWrap.classList.remove(
                    "changing"
                );

            }

        },
        250
    );


    /*
       Update mini cards
    */

    const miniCards =
        document.querySelectorAll(
            ".officer-mini"
        );


    miniCards.forEach(
        function(card, i) {

            card.classList.toggle(
                "active",
                i === index
            );

        }
    );

}



/* ==================================================
   OFFICER MOUSE WHEEL
================================================== */

const officerStage =
    document.querySelector(
        ".officer-stage"
    );


let officerWheelLocked = false;


if (officerStage) {

    officerStage.addEventListener(
        "wheel",
        function(event) {

            /*
               IMPORTANT:

               Officer scrolling ONLY happens
               when the mouse is over the
               officer stage.

               If the mouse is somewhere else,
               the whole page scrolls normally.
            */

            event.preventDefault();

            event.stopPropagation();


            if (officerWheelLocked) {

                return;

            }


            officerWheelLocked = true;


            /* --------------------------------------
               SCROLL DOWN
               NEXT OFFICER
            -------------------------------------- */

            if (event.deltaY > 0) {

                if (
                    currentOfficer <
                    officers.length - 1
                ) {

                    showOfficer(
                        currentOfficer + 1
                    );

                }

            }


            /* --------------------------------------
               SCROLL UP
               PREVIOUS OFFICER
            -------------------------------------- */

            else {

                if (
                    currentOfficer > 0
                ) {

                    showOfficer(
                        currentOfficer - 1
                    );

                }

            }


            /*
               Delay between officer changes
            */

            setTimeout(
                function() {

                    officerWheelLocked = false;

                },
                600
            );

        },
        {
            passive: false
        }
    );

}



/* ==================================================
   OFFICER KEYBOARD NAVIGATION
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const officersSection =
            document.getElementById(
                "officers"
            );


        if (!officersSection) {

            return;

        }


        const rect =
            officersSection.getBoundingClientRect();


        const sectionVisible =
            rect.top <
            window.innerHeight * 0.7
            &&
            rect.bottom >
            window.innerHeight * 0.3;


        if (!sectionVisible) {

            return;

        }


        /* --------------------------------------
           ARROW DOWN
        -------------------------------------- */

        if (
            event.key === "ArrowDown"
        ) {

            if (
                currentOfficer <
                officers.length - 1
            ) {

                showOfficer(
                    currentOfficer + 1
                );

            }

        }


        /* --------------------------------------
           ARROW UP
        -------------------------------------- */

        if (
            event.key === "ArrowUp"
        ) {

            if (
                currentOfficer > 0
            ) {

                showOfficer(
                    currentOfficer - 1
                );

            }

        }

    }
);



/* ==================================================
   03 — SECTION PROGRESS
================================================== */

const sections =
    document.querySelectorAll(
        ".scpes-section"
    );


const progressItems =
    document.querySelectorAll(
        ".progress-item"
    );


const sectionObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const id =
                            entry.target.id;


                        progressItems.forEach(
                            function(item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        const activeItem =
                            document.querySelector(
                                `.progress-item[href="#${id}"]`
                            );


                        if (activeItem) {

                            activeItem.classList.add(
                                "active"
                            );

                        }

                    }

                }
            );

        },
        {
            threshold: 0.55
        }
    );


sections.forEach(
    function(section) {

        sectionObserver.observe(
            section
        );

    }
);



/* ==================================================
   SECTION NAVIGATION
================================================== */

progressItems.forEach(
    function(item) {

        item.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                const targetId =
                    item.getAttribute(
                        "href"
                    );


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }
);