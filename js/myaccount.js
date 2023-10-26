
document.addEventListener("DOMContentLoaded", function () {
    const topFquesElements = document.querySelectorAll(".top-account");
    const bottomFquesElements = document.querySelectorAll(".bottom-account");
    let currentIndex = -1;

    topFquesElements.forEach(function (topFques, index) {
        topFques.addEventListener("click", function () {
            const targetId = topFques.getAttribute("data-target");
            const bottomFques = document.getElementById(targetId);
            const iconAccount = document.querySelectorAll(".icon-account")[index];
            const accountContentHead=document.querySelectorAll(".account-content-head")[index];

            if (bottomFques) {
                bottomFquesElements.forEach(function (bfElement, bfIndex) {
                    if (index === bfIndex) {
                        bfElement.style.display = bfElement.style.display === "block" ? "none" : "block";
                
                        if (currentIndex !== -1 && currentIndex !== index) {
                            // Revert changes for the previously selected index
                            const prevIconAccount = document.querySelectorAll(".icon-account")[currentIndex];
                            const prevAccountContentHead = document.querySelectorAll(".account-content-head")[currentIndex];
                            prevIconAccount.classList.remove("change-icon-account");
                            prevAccountContentHead.classList.remove("change-content-head");
                        }

                        if (currentIndex === index) {
                            // Toggle the changes if clicking the same element
                            iconAccount.classList.toggle("change-icon-account");
                            accountContentHead.classList.toggle("change-content-head");
                        } else {
                            iconAccount.classList.add("change-icon-account");
                            accountContentHead.classList.add("change-content-head");
                        }
                        currentIndex = index;
                    } else {
                        bfElement.style.display = "none";
                    }
                });
            }
        });
    });
    if (topFquesElements.length > 0) {
        bottomFquesElements[0].classList.add("transition-effect");
        bottomFquesElements[0].style.display = "block";
        const iconAccount = document.querySelectorAll(".icon-account")[0];
        const accountContentHead = document.querySelectorAll(".account-content-head")[0];
        iconAccount.classList.add("change-icon-account");
        accountContentHead.classList.add("change-content-head");
        currentIndex = 0; 
    }
});




const listAccountElements = document.querySelectorAll(".list-account");
listAccountElements[0].classList.add("change-list-account");

document.addEventListener("DOMContentLoaded", function (){
    listAccountElements.forEach(function (listAccount) {
        listAccount.addEventListener("click", function () {
            listAccountElements.forEach(function (element) {
                element.classList.remove("change-list-account");
            });
            listAccount.classList.add("change-list-account");

            const detailId = listAccount.getAttribute("data-detail-id");
            // Hide all detailed list items
            const detailedListItems = document.querySelectorAll(".detailed-list-account");
            detailedListItems.forEach(function (item) {
                item.style.display = "none";
            });
            // // Show the relevant detailed list item based on the clicked list item
            const relevantDetailItem = document.getElementById(detailId);
            if (relevantDetailItem) {
                relevantDetailItem.style.display = "block";
            }
        }); 
    });

    const rightItemAccount=document.querySelectorAll(".sub-unlist-account li");
    const detailedListItems = document.querySelectorAll(".each-sub-account");
    rightItemAccount.forEach((value,index)=>{
        if(index===0 || index === 3 || index === 6 || index === 7 || index === 11){
            value.style.listStyleType = "disc";
            value.style.color="#0cec2d";
        }
        value.addEventListener("click", ()=> {
            rightItemAccount.forEach((item) => {
                item.style.listStyleType = "none";
                item.style.color="";
            });
            value.style.listStyleType = "disc";
            value.style.color="#0cec2d";
            detailedListItems.forEach(function (item,index1){
                if (index===index1){
                    item.scrollIntoView({ behavior: "smooth" });
                }
            })
        });
    })
})




const toggleButton = document.getElementById("toggleNav");
const navbarNav = document.getElementById("navbarNavAltMarkup");
toggleButton.addEventListener("click", function () {
    navbarNav.classList.toggle("chnage-navabar-account");
});



// Retrieve the number of days elapsed from localStorage
const daysElapsed = localStorage.getItem('userDaysElapsed');
if (daysElapsed) {
    const days = parseInt(daysElapsed);
    console.log("Days Elapsed:", days);
}







const storedFormDataArray = JSON.parse(localStorage.getItem('formDataArray'));

if (storedFormDataArray) {
    storedFormDataArray.forEach((storedFormData) => {
        const storedUserEmail = localStorage.getItem("userEmail"); //get users details which he sigin in

        if (storedFormData.email === storedUserEmail) {
            const { email, phoneno,country,displayName,firstName,lastName} = storedFormData;
            console.log(storedFormData);
            // Personal information
            const profileName = document.getElementById("profileName");
            const profileEmail = document.getElementById("profileEmail");
            const fullNameAcc = document.getElementById("fullNameAcc");
            const displayNameAcc = document.getElementById("displayNameAcc");
            const countryNameAcc = document.getElementById("countryNameAcc");
            const genderACC = document.getElementById("genderACC");

            // storedFormData.displayName = email.replace("@gmail.com", "");

            // displayNameAcc.value = storedFormData.displayName;
            // profileName.textContent = storedFormData.displayName;
            displayNameAcc.value=displayName;
            profileName.textContent=displayName;

            profileEmail.textContent = email;
            // fullNameAcc.value = email.replace("@gmail.com", "");
            fullNameAcc.value=firstName+" "+lastName;
            countryNameAcc.value = country;

            const profileChanges = () => {
                document.getElementById("proDet1").style.display = "none";
                document.querySelectorAll(".hide").forEach((hideEl) => {
                    hideEl.style.display = "block";
                });
                document.querySelectorAll(".item-field").forEach((field) => {
                    field.classList.add("modify-item-field");
                });

                displayNameAcc.removeAttribute("disabled");
                document.getElementById("country").classList.add("clk-country");
                document.getElementById("saveCancelBtn").style.display = "block";
                document.getElementById("proDet2").style.display = "block";
                
                genderACC.removeAttribute("disabled");
                genderACC.classList.add("modify-gender-box");
            };

            const profileEdit = document.getElementById("profileEdit");
            profileEdit.addEventListener("click", (event) => {
                event.preventDefault();
                profileChanges();
                profileEdit.style.display = "none";
            });


            const saveValidateForm=()=>{
                const firstNameAcc=document.getElementById("firstNameAcc");
                const lastNameAcc=document.getElementById("lastNameAcc");
                const AddressAcc=document.getElementById("AddressAcc");
                const genderACC = document.getElementById("genderACC");
                const fullNameAcc=document.getElementById("fullNameAcc");

                storedFormData.firstName=firstNameAcc.value;
                firstName.value=storedFormData.firstName;

                storedFormData.lastName=lastNameAcc.value;
                lastNameAcc.value=storedFormData.lastName

                storedFormData.Address=AddressAcc.value;
                AddressAcc.value=storedFormData.Address;

                storedFormData.displayName=displayNameAcc.value;
                displayNameAcc.value=storedFormData.displayName;

                storedFormData.gender=genderACC.value;
                genderACC.value=storedFormData.gender;

                profileName.textContent=storedFormData.displayName;
                fullNameAcc.value=storedFormData.firstName+" "+storedFormData.lastName;


                 // Update the storedFormDataArray with the updated storedFormData
                 const updatedFormDataArray = JSON.parse(localStorage.getItem('formDataArray'));
                 updatedFormDataArray.forEach((item, index) => {
                     if (item.email === storedUserEmail) {
                         updatedFormDataArray[index] = storedFormData;
                     }
                 });
                
                // Store the updated data back in localStorage
                localStorage.setItem('formDataArray', JSON.stringify(updatedFormDataArray));


                document.getElementById("proDet1").style.display = "block";
                document.querySelectorAll(".hide").forEach((hideEl) => {
                    hideEl.style.display = "none";
                });
                document.querySelectorAll(".item-field").forEach((field) => {
                    field.classList.remove("modify-item-field");
                });
            
                
                displayNameAcc.setAttribute("disabled", "true");
                document.getElementById("country").classList.remove("clk-country");
                document.getElementById("saveCancelBtn").style.display = "none";
                document.getElementById("proDet2").style.display = "none";
                
                genderACC.setAttribute("disabled", "true");
                genderACC.classList.remove("modify-gender-box");
                profileEdit.style.display = "block";
            }
            
            const profileSave=document.getElementById("profileSave");
            profileSave.addEventListener("click",(event)=>{
                event.preventDefault();
                saveValidateForm()
            })
            
            const cancelValidateForm=()=>{

                const firstNameAcc=document.getElementById("firstNameAcc");
                const lastNameAcc=document.getElementById("lastNameAcc");
                const AddressAcc=document.getElementById("AddressAcc");
                firstNameAcc.value=storedFormData.firstName;
                lastNameAcc.value=storedFormData.lastName;
                AddressAcc.value=storedFormData.Address;
                displayNameAcc.value=storedFormData.displayName;

                document.getElementById("proDet1").style.display = "block";
                document.querySelectorAll(".hide").forEach((hideEl) => {
                    hideEl.style.display = "none";
                });
                document.querySelectorAll(".item-field").forEach((field) => {
                    field.classList.remove("modify-item-field");
                });
            
                displayNameAcc.setAttribute("disabled", "true");
                document.getElementById("country").classList.remove("clk-country");
                document.getElementById("saveCancelBtn").style.display = "none";
                document.getElementById("proDet2").style.display = "none";
                const genderACC = document.getElementById("genderACC");
                genderACC.setAttribute("disabled", "true");
                genderACC.classList.remove("modify-gender-box");
                profileEdit.style.display = "block";


                // console.log(storedFormData);
            }
            
            const profileCancel=document.getElementById("profileCancel");
            profileCancel.addEventListener("click",(event)=>{
                event.preventDefault()
                cancelValidateForm()
            })


            // Email address
            const MyEmail = document.getElementById("MyEmail");
            MyEmail.textContent = email;

            // Mobile numbers
            const myPhoneNo = document.getElementById("myPhoneNo");
            myPhoneNo.textContent = `(+91) ${phoneno}`;
        }
    });
}




const hideDisplayFeatAcc=document.getElementById("hideDisplayFeatAcc");
hideDisplayFeatAcc.addEventListener("click",(event)=>{
    event.preventDefault()
    const backgroundFeatueBox=document.getElementById("backgroundFeatueBox");
    backgroundFeatueBox.classList.toggle("background-Featue-Box");

    const displayFeaturesInAcc=document.getElementById("displayFeaturesInAcc");
    displayFeaturesInAcc.classList.toggle("features-acc");

    const resultFeatureHome=document.getElementById("resultFeatureHome");
    resultFeatureHome.addEventListener("click",()=>{
        window.location.href = "resultHome.html";
    })
})