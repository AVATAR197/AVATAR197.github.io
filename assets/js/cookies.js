const storageType = localStorage;
const consentPropertyName = "daniel_dopiriak_consent";

const cookie_popup = document.querySelector(".cookie_popup");
const cookieSubmitButton = document.querySelector(".cookie_popup .accept_button");

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    if (shouldShowPopup()) {
        gsap.to(cookie_popup, { duration: 0.4, opacity: 1, y: 0, display: "flex", delay: 1.5 });
    }
};

cookieSubmitButton.addEventListener("click", () => {
    saveToStorage();
    gsap.to(cookie_popup, { duration: 0.4, opacity: 0, y: 50, display: "none" });
});
