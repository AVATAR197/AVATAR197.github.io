const show_my_work_button = document.querySelector(".show-my-work-button");
const my_projects = document.querySelector(".my-projects");

show_my_work_button.addEventListener("click", () => {
    const top = my_projects.getBoundingClientRect().top;
    window.scrollTo(0, top);
});

const anim = document.querySelectorAll(".scroll-anim");

const createObserver = () => {
    let observer;

    let options = {
        threshold: 0.55,
    };

    observer = new IntersectionObserver((e) => {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `anim 1s forwards ease`;
            }
        });
    }, options);

    anim.forEach((img) => {
        observer.observe(img);
    });
};

window.addEventListener("load", createObserver);
