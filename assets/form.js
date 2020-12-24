var button = document.querySelector('button[type="submit"]');

button.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('#insert-record');

    var name = form.nameSerie.value;
    var seasons = form.seasons.value;
    var eps = form.eps.value;
    var watchEps = form.watchEps.value;

    var serieTr = document.createElement('tr');
    serieTr.className ='series';

    var idTd = document.createElement('td');
    idTd.className = 'uppercase text-center info-id';

    var nameTd = document.createElement('td');
    nameTd.className = 'uppercase text-center info-nome';

    var seasonsTd = document.createElement('td');
    seasonsTd.className = 'uppercase text-center info-temp';
    
    var epsTd = document.createElement('td');
    epsTd.className = 'uppercase text-center info-total-ep';

    var watchEpsTd = document.createElement('td');
    watchEpsTd.className = 'uppercase text-center info-eps';

    var progressTd = document.createElement('td');
    progressTd.className = 'uppercase text-center info-progresso';
    progressTd.id = 'calc-progress';

    var progressDiv = document.createElement('div');
    progressDiv.className = 'progress';
    

    var progressBar = document.createElement('div');
    progressBar.className = 'progress-bar bg-success text-center';



    idTd.textContent = 3
    nameTd.textContent = name;
    seasonsTd.textContent = seasons;
    epsTd.textContent = eps;
    watchEpsTd.textContent = watchEps;
    progressTd.textContent = name;

    serieTr.appendChild(idTd);
    serieTr.appendChild(nameTd);
    serieTr.appendChild(seasonsTd);
    serieTr.appendChild(epsTd);
    serieTr.appendChild(watchEpsTd);
    serieTr.appendChild(progressTd);

    // var progress = document.querySelector('#calc-progress');

// progress.appendChild(progressDiv);

    var table = document.querySelector('#table-series');

    table.appendChild(serieTr);

 

});

