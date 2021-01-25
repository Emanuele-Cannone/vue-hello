// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. 
// Poi aggiungete all'immagine una classe sempre presa dal data.


var app = new Vue ({
    el: '#test',
    data: {
        titolo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        src: 'https://www.trifide.it/vita/14castori.jpg',
        alt: 'topo',
        color: "bordo"
    }

});