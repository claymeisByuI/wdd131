window.onload = function () {
    let reviews = JSON.parse(localStorage.getItem("requestData")) || defaultRequestData;
    if(reviews === 0) {
        localStorage.setItem("requestData", JSON.stringify(defaultRequestData));
    }

    // Display the current counter
    const form = document.getElementById('requestForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Get form values
        const userEmail = document.getElementById("userEmail").value;
        const userName = document.getElementById("userName").value;
        const printer = document.getElementById("printer").value;
        const writtenRequest = document.getElementById("writtenRequest").value;

        // Create a new entry object
        const newEntry = {
            userEmail: userEmail,
            userName: userName,
            printer: printer,
            writtenRequest: writtenRequest
        };

        let requestData = JSON.parse(localStorage.getItem("requestData")) || defaultRequestData;
        requestData.push(newEntry);
        localStorage.setItem("requestData", JSON.stringify(requestData));
        document.getElementById("requestForm").reset();
        alert("Your request has been saved!");
        rebuildRequestList();
    });
    rebuildRequestList();
};

function rebuildRequestList() {
    const requestData = JSON.parse(localStorage.getItem("requestData")) || defaultRequestData;
    const requestList = document.getElementById("requestList");
    requestList.innerHTML = "";

    requestData.forEach((request, index) => {
        const requestItem = document.createElement("li");
        requestItem.innerHTML = `
            <p><strong>${request.userName}</strong> - <strong>${request.printer}</strong></p>
            <div>${request.writtenRequest}</div>`;
        requestList.appendChild(requestItem);
    });
};
// ai generated data below  (So freaking crazy)
const defaultRequestData = [
    {
        userEmail: "john.doe@example.com",
        userName: "John Doe",
        printer: "Bambu X1C",
        writtenRequest: "The extruder is making a clicking noise, and prints are failing halfway through. I've tried recalibrating, but the problem persists."
    },
    {
        userEmail: "jane.smith@example.com",
        userName: "Jane Smith",
        printer: "Elegoo Mars",
        writtenRequest: "Having trouble with resin adhering to the build plate. I cleaned everything and checked the leveling, but prints still aren’t sticking."
    },
    {
        userEmail: "alex.jones@example.com",
        userName: "Alex Jones",
        printer: "Bambu P1S",
        writtenRequest: "Layer shifting is happening on every print. I've tightened the belts and updated firmware, but it hasn't improved."
    },
    {
        userEmail: "sam.wilson@example.com",
        userName: "Sam Wilson",
        printer: "Prusa MKS",
        writtenRequest: "The print quality has degraded, with uneven layers and blobs. I suspect nozzle clogging but haven’t found a solution."
    },
    {
        userEmail: "rachel.green@example.com",
        userName: "Rachel Green",
        printer: "Elegoo Saturn",
        writtenRequest: "Experiencing z-axis wobble on tall prints, causing wavy lines on the surface. I've checked for loose screws, but it didn't help."
    },
    {
        userEmail: "chris.lee@example.com",
        userName: "Chris Lee",
        printer: "Bambu A1",
        writtenRequest: "The filament keeps tangling and breaking mid-print. I'm using PLA with the recommended settings but still facing the issue."
    }
];
