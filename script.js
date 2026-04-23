document.addEventListener("DOMContentLoaded", function () {

    /* ========= AUTO HERO SLIDER ========= */

    const hero = document.querySelector(".hero");
    const title = document.querySelector(".hero-content h2");
    const desc = document.querySelector(".hero-content p");

    const movies = [
        {
            name: "Avengers Endgame",
            text: "Earth's final battle begins.",
            image: "https://wallpapercave.com/wp/wp4056410.jpg"
        },
        {
            name: "Leo",
            text: "Violence meets destiny.",
            image: "https://wallpapercave.com/wp/wp12696892.jpg"
        },
        {
            name: "KGF Chapter 2",
            text: "The empire rises again.",
            image: "https://wallpapercave.com/wp/wp8801645.jpg"
        },
        {
            name: "RRR",
            text: "Power. Pride. Revolution.",
            image: "https://wallpapercave.com/wp/wp10877811.jpg"
        },
        {
            name: "Salaar",
            text: "One man. One rage.",
            image: "https://wallpapercave.com/wp/wp12276974.jpg"
        }
    ];

    let index = 0;

    function changeHero() {
        hero.style.background =
            `linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.35)),
            url('${movies[index].image}') center/cover no-repeat`;

        title.innerText = movies[index].name;
        desc.innerText = movies[index].text;

        index++;
        if (index >= movies.length) {
            index = 0;
        }
    }

    changeHero();
    setInterval(changeHero, 2000);



    /* ========= FILL MOVIE NAME ========= */

    window.fillMovie = function (movie) {
        document.getElementById("movieName").value = movie;

        document.querySelector(".booking-section").scrollIntoView({
            behavior: "smooth"
        });
    };



    /* ========= BOOKING ========= */

    const btn = document.querySelector(".booking-box button");

    btn.addEventListener("click", function () {

        let movie = document.getElementById("movieName").value;
        let location = document.getElementById("location").value;
        let slot = document.getElementById("slot").value;
        let seat = document.getElementById("seatType").value;
        let tickets = document.querySelector(".booking-box input[type='number']").value;

        if (movie === "") {
            alert("Please select a movie");
            return;
        }

        if (location === "Select Location") {
            alert("Please select location");
            return;
        }

        if (slot === "Select Show Slot") {
            alert("Please select show slot");
            return;
        }

        if (tickets === "" || tickets <= 0) {
            alert("Enter valid tickets");
            return;
        }

        let price = 180;

        if (seat === "Gold") price = 250;
        if (seat === "Platinum") price = 320;
        if (seat === "VIP Recliner") price = 450;

        let total = price * tickets;
        let bookingId = "CMX" + Math.floor(Math.random() * 999999);

        alert(
            "🎉 Booking Confirmed!\n\n" +
            "Booking ID: " + bookingId +
            "\nMovie: " + movie +
            "\nLocation: " + location +
            "\nShow Slot: " + slot +
            "\nSeat Type: " + seat +
            "\nTickets: " + tickets +
            "\nTotal Price: ₹" + total +
            "\n\nEnjoy your show 🍿"
        );

    });

});