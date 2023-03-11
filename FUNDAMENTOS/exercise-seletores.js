
const headerContainer = document.querySelector('#header-container')
headerContainer.style.backgroundColor = 'rgba(0,194,110,255)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(251,148,132)';


const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'rgb(251,227,91)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTaskHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTaskHeaders.length; index += 1){
      noEmergencyTaskHeaders[index].style.backgroundColor = 'rgb(23,38,37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgba(0,57,52,255)';