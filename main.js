let membri = [{
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    immagine: "img/wayne-barnett-founder-ceo.jpg"
},

{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    immagine: "img/angela-caroll-chief-editor.jpg"
},

{

    nome: "Walter Gordon",
    ruolo: "Office Manager",
    immagine: "img/walter-gordon-office-manager.jpg"
},

{
    nome: "Angela Lopez",
    ruolo: "Media Manager",
    immagine: "img/angela-lopez-social-media-manager.jpg"
},

{
    nome: "Scott Estrada",
    ruolo: "Developer",
    immagine: "img/scott-estrada-developer.jpg"
},

{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    immagine: "img/barbara-ramos-graphic-designer.jpg"
}]

let container = document.getElementById ("container")

for (let i = 0; i < membri.length; i++) {
    console.log("nome: " + membri[i].nome + ", Ruolo " + membri[i].ruolo + ", immagine " + membri[i].immagine); 
    let elemento = createMemberHtml (membri[i])
    container.innerHTML += elemento
    
}

function createMemberHtml(member) {
    return ` <div class="member">
                <h2>${member.nome}</h2>
                <p>Ruolo: ${member.ruolo}</p>
                <img src="${member.immagine}" alt="${member.immagine}">
            </div>` 
}








