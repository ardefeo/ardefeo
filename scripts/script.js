const body = document.querySelector('body');
const modeToggle = document.getElementById('btn-check-2-outlined');
const modeStatus = document.querySelector('#mode-status');


function toggleMode() {
    
    body.classList.toggle('dark-mode')
    
    const modeMessage = body.classList.contains('dark-mode') ? 
    'The lights are off!' 
    : "The lights are on!";

    modeStatus.innerText = modeMessage;
    
  
}

modeToggle.addEventListener('click', toggleMode);
