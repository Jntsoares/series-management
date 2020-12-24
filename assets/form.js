var button = document.querySelector('button[type="submit"]');

button.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('#insert-record');
    // Extraindo informações do form
    var serie = captureData(form);

    // Cria a Tr e a Td da série
    var serieTr = createTr(serie);

    //Adicionando a serie na table
    var table = document.querySelector('#table-series');

    table.appendChild(serieTr);

    form.reset();

});


function captureData (form){
    
    var serie = {
        name: form.nameSerie.value,
        seasons: form.seasons.value,
        eps: form.eps.value,
        watchEps: form.watchEps.value,
        progress: calcProgress(form.watchEps.value, form.eps.value) + '%'
    }
    
    return serie;
} 

function createTr(serie){

    var serieTr = document.createElement('tr');
    serieTr.classList.add('series');

    var idTd = document.createElement('td');
    idTd.classList.add('uppercase', 'text-center', 'info-id');

    var infoProgresso = document.querySelector('.info-progresso');

    var progressBar = document.createElement('div');
    progressBar.classList.add('progress');

    infoProgresso.appendChild(progressBar);

    var progressResult = document.createElement('div');
    progressResult.classList.add('progress-bar', 'bg-success', 'text-center');

    progressBar.appendChild(progressResult);

    

    idTd.textContent = 3
 
    serieTr.appendChild(idTd);
    serieTr.appendChild(createTd(serie.name, 'info-nome', 'text-center', 'uppercase'));
    serieTr.appendChild(createTd(serie.seasons, 'info-temp', 'text-center', 'uppercase'));
    serieTr.appendChild(createTd(serie.eps, 'info-total-ep', 'text-center', 'uppercase'));
    serieTr.appendChild(createTd(serie.watchEps, 'info-eps', 'text-center', 'uppercase'));
    serieTr.appendChild(createTd(serie.progress, 'info-progresso', 'text-center', 'uppercase'));

    return serieTr;

}

function createTd(dado, classe, classe1, classe2){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe, classe1, classe2);

    return td;
}

