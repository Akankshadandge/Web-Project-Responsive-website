const menu=document.querySelector('#mobile-menu')
const menulinks=document.querySelector('.navbar_menu')

menu.addEventListener('click',function()){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}

const modal = document.getElementById("signUpModal");
        const openModalButton = document.getElementById("openModalButton");
        const closeBtn = document.getElementsByClassName("close-btn")[0];

        // When the user clicks the button, open the modal
        openModalButton.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

        // Handle form submission
        const signupForm = document.getElementById("signupform");
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevents the form from being submitted immediately

            // Get the form values (you could perform validation here)
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Basic form validation
            if (!email || !password) {
                alert("Please fill out all fields.");
                return;
            }

            // Send form data via AJAX or form submission (just for demonstration, we log it)
            console.log("Email: " + email);
            console.log("Password: " + password);

           
            modal.style.display = "none";
        });
