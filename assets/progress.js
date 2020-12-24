var seriesProgress = document.querySelectorAll('.series');

for (var index = 0; index < seriesProgress.length; index++) {

    var progress = seriesProgress[index];

    var tdEp = progress.querySelector('.info-total-ep');
    var total = tdEp.textContent;

    var tdEps = progress.querySelector('.info-eps');
    var eps = tdEps.textContent;

    var tdProgresso = progress.querySelector('.info-progresso');
    var progresso = tdProgresso.textContent;

    progresso = (eps * 100) / total;



    var barProgress = progress.querySelector(".progress-bar").style.width=progresso.toFixed(0) + "%";

    var tdContent = progress.querySelector('.progress-bar');
    tdContent.textContent = progresso.toFixed(0) + "%";
    
}


