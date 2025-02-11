document.addEventListener("DOMContentLoaded" , () => {
    const sections = document.querySelectorAll('section')

    const option = {
        threshold: 0.2
    }

    const observer = new IntersectionObserver((elements , watcher)=> {
        elements.forEach((element) => {
            if(element.isIntersecting) {
                const sectionel = element.target.querySelectorAll('article , div , img , button , h1 , h3 , h6 , p');
                sectionel.forEach((el) => {
                    el.classList.add('visible');
                });
                observer.unobserve(element.target);
            }
        });
    } , option)

    sections.forEach((section) => {
        observer.observe(section)
    })
})