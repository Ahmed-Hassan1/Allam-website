const element = document.querySelector('.h1-anim');
const observer = new IntersectionObserver(entries => {
    element.classList.toggle('h1-anim', entries[0].isIntersecting);
});

observer.observe(element);


const client_title = document.getElementById('client_title');
const observer2 = new IntersectionObserver(entries => {
    client_title.classList.toggle('h1-anim', entries[0].isIntersecting);
});

observer2.observe(client_title);


