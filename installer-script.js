function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
$('img').click(function() {
  launchIntoFullscreen(document.documentElement);
});

function play() {
  $('.welcome').fadeOut(700, function() {
    setTimeout(function() {
      $('.format').fadeIn(700);
    }, 1000);
    setTimeout(function() {
      $('.load div').animate({
        'width': '40%'
      }, 7000, 'linear').animate({
        'width': '100%'
      }, 1000, 'linear', function() {
        
        $('.format').fadeOut(700, function() {
          setTimeout(function() {
            $('.install').fadeIn(700).css('display', 'flex');
            
            var loader = document.querySelector('#svgLoaderCircle'),
              percentagetext = document.querySelector('#svgPercentageText'),
              copyFiles = document.querySelector('.copyFiles'),
              installOS = document.querySelector('.installOS'),
              config = document.querySelector('.config'),
              progress = 820,
              percentage = 0;

            setInterval(function() {
              loader.setAttribute("stroke-dashoffset", progress);
              percentagetext.innerHTML = percentage + "%";
              if (percentage <= 30) {
                copyFiles.classList.add('active');
                copyFiles.children[0].innerHTML = percentage + "%";
                installOS.classList.remove('active');
                installOS.classList.remove('done');
                installOS.children[0].innerHTML = "";
                config.classList.remove('active');
                config.classList.remove('done');
                config.children[0].innerHTML = "";
              }
              if (percentage >= 31 && percentage <= 75) {
                copyFiles.classList.remove('active');
                copyFiles.classList.add('done');
                copyFiles.children[0].innerHTML = "";
                installOS.classList.add('active');
                installOS.children[0].innerHTML = percentage + "%";
                config.classList.remove('active');
                config.children[0].innerHTML = "";
              }
              if (percentage >= 76) {
                copyFiles.classList.remove('active');
                copyFiles.children[0].innerHTML = "";
                installOS.classList.remove('active');
                installOS.classList.add('done');
                installOS.children[0].innerHTML = "";
                config.classList.add('active');
                config.children[0].innerHTML = percentage + "%";
              }
              percentage++;
              progress = +progress - 8.19;
              if (progress < 0) {
                progress = 820;
              }
              if (percentage > 100) {
                percentage = 0;
                exitFullscreen();
              }

            }, 1500);
            
          }, 1000);
          
        });

      });
    }, 2000);
  });
}
$('.get-started').click(function() {
  play();
  launchIntoFullscreen(document.documentElement);
});
$('.revert').click(function() {
  play();
  launchIntoFullscreen(document.documentElement);
});