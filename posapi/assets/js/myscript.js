if ('serviceWorker' in navigator && 'PushManager' in window) {

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();

        const deferredPrompt = e;

        const installButton = document.getElementById('reset-button');
   
        if(installButton){
        installButton.addEventListener('click', () => {

            deferredPrompt.prompt();

            deferredPrompt.userChoice.then(choiceResult => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('App installed');
                    installButton.style.display = 'none';
                } else {
                    console.log('App installation declined');
                }

                
            });
        });

    }
    });
}