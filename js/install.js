let deferredInstallPrompt = null;
const PWAButtonInstall = document.getElementById('PWAButton');
PWAButtonInstall.addEventListener('click', installPWA);


// Add event listener for beforeinstallprompt event 
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);


function saveBeforeInstallPromptEvent(evt) {
    //Add code to save event & show the install button
    deferredInstallPrompt = evt;
    PWAButtonInstall.removeAttribute('hidden');
}    


function installPWA(evt) {
    // Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.srcElement.setAttribute('hidden', true);


// Log uer response to promt
    deferredInstallPrompt.userChoice
    .then((choice) => {
    if (choice.outcome === 'accepted') {
 
    console.log("User accepted the A2HS prompt", choice);
    } else {
 
    console.log("User dismisssed the A2HS prompt", choice);
    }
    deferredInstallPrompt = null;
    });
}
// Add listener  for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);


   function logAppInstalled(evt) {
    console.log("Au Koï App was installed", evt);
   }