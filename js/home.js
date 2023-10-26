window.addEventListener("load", function () {
    // Create a URLSearchParams object to parse the query parameters from the URL.
    const urlParams = new URLSearchParams(window.location.search);
    // Check if the "hideNav" parameter is set to "true" in the URL.
    if (urlParams.has("hideNav") && urlParams.get("hideNav") === "true") {
        const homeSignin = document.getElementById("homeSignin");
        const homeSignup = document.getElementById("homeSignup");
        const userProfileContainer=document.getElementById("userProfileContainer");

        if (homeSignin && homeSignup) {
            homeSignin.style.display = "none";
            homeSignup.style.display = "none";
        }
        if (userProfileContainer){
            userProfileContainer.style.display="block";
        }
    }
    // Check if the "userEmail" parameter exists in the URL.
    if (urlParams.has("userEmail")) {
         // Get the value of the "userEmail" parameter from the URL.
        const userEmail = urlParams.get("userEmail");

        const railUserName=document.getElementById("railUserName");
        railUserName.textContent=userEmail.replace("@gmail.com","");

        // Store the user's email in the localStorage.
        localStorage.setItem("userEmail", userEmail);
    }
});




const userProfileContainer = document.getElementById("userProfileContainer");
const detailUserProfile = document.getElementById("detailUserProfile");

// Add a click event listener to the "userProfileContainer" element.
userProfileContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    detailUserProfile.style.display = "block";
});

// Add a click event listener to the entire document.
document.addEventListener("click", (event) => {
    if (!userProfileContainer.contains(event.target)) {
        detailUserProfile.style.display = "none";
    }
});