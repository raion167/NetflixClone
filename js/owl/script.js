const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

animeJson.map((item, index)=>{
    let animeItem = c('.models .animeInfo').cloneNode(true);

    pizzaItem.querySelector('.animeImg').src = item.img;
    pizzaItem.querySelector('.animeInfo-nome').innerHTML = item.name;
    pizzaItem.querySelector('.animeInfo-desc').innerHTML = item.description;

    c('.animeInfo').style.opacity = 0;
    c('.animeInfo').style.display = 'flex';


});
