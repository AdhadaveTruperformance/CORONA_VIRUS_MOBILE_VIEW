function animateCounter(className, targetNumber) {
    const elements = document.getElementsByClassName(className);
    const speed = 200;
    const increment = targetNumber / speed ; 

    for (let element of elements) {
        let count = 0;

        const updateCounter = () => {
            if (count < targetNumber) {
                count += increment;
                element.innerText = Math.ceil(count).toLocaleString();
                requestAnimationFrame(updateCounter); 
            } else {
                element.innerText = targetNumber.toLocaleString(); 
            }
        };

        updateCounter();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    animateCounter('active-cases', 8585625);
    animateCounter('death-cases', 7585625);   
    animateCounter('recovered-cases', 9585625); 
});