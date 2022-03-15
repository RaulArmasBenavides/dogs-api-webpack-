 
const body = document.body;

//crea el html de manera dinámica
const crearChistesHtml = () =>
{
    const html = `
    <h1>Chistes</h1>
    <hr>
    <button class ="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
    <li class ="list-group-item">...</li>
    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    console.log('ok ctm');
    body.append(divChistes);

}


//método se debe llamar
export const init = () => {

    crearChistesHtml();
}

