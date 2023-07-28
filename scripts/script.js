const body = document.querySelector('body');
const modeToggle = document.getElementById('btn-check-2-outlined');
const modeStatus = document.querySelector('#mode-status');
const pageStatus = document.getElementById('pageloadtime')

//function to implement dark/light mode toggle
function toggleMode() {
    
    body.classList.toggle('dark-mode')
    
    const modeMessage = body.classList.contains('dark-mode') ? 
    'The lights are off!' 
    : "The lights are on!";

    modeStatus.innerText = modeMessage;
    
  
}

modeToggle.addEventListener('click', toggleMode);



window.addEventListener("load", function () {
    let time = performance.timing;
    let pageloadtime = time.loadEventStart - time.navigationStart;
    console.log(pageloadtime)
    pageStatus.innerText += pageloadtime + ' ms'
  })