
const form = document.getElementById("donorForm");
const message = document.getElementById("message");
const donorList = document.getElementById("donorList");
const searchBlood = document.getElementById("searchBlood");

let donors = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const blood = document.getElementById("blood").value;
    const city = document.getElementById("city").value;

    if (age < 18 || age > 100) {
        message.textContent = "Please enter a valid age!";
        return;
    }

    donors.push({ name, age, blood, city });

    message.textContent = "Donor registered successfully!";

    form.reset();
    displayDonors();
});

function displayDonors() {
    donorList.replaceChildren();

    const selectedBlood = searchBlood.value;

    const filtered = donors.filter(function(donor) {
        return selectedBlood === "" ||
               donor.blood === selectedBlood;
    });

    if (filtered.length === 0) {
        donorList.textContent = "No donors found.";
        return;
    }

    filtered.forEach(function(donor) {
        const card = document.createElement("div");
        card.className = "donor";

        card.textContent =
            "Name: " + donor.name +
            " | Blood: " + donor.blood +
            " | City: " + donor.city;

        donorList.appendChild(card);
    });
}

searchBlood.addEventListener("change", displayDonors);