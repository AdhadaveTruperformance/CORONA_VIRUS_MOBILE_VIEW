
function animateCounter(id, targetNumber) {
    const element = document.getElementById(id);
    let count = 0;
    const speed = 300;
    const increment = targetNumber / speed;

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
document.addEventListener('DOMContentLoaded', () => {
    animateCounter('active-cases', 8585625);
    animateCounter('death-cases', 7585625);   
    animateCounter('recovered-cases', 9585625); 
});