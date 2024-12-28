let propParallax = {
    seccion:document.querySelector('.parallax'),
    recorrido:null,
    final:null,
    alturaParallax:null,
    inicio:null
}
let metParallax = {
    inicio:function(){
        window.addEventListener('scroll', metParallax.scrollParallax);
    },
    scrollParallax:function(){
        // Saber cuanto recorrimos desde el tope de la página hasta donde hemos echo scroll
        propParallax.recorrido = window.pageYOffset;

        // Ubicación desde el tope hasta el inicio de la seccion parallax en pixeles
        propParallax.inicio = propParallax.seccion.offsetTop;

        // La altura del elemento parallax
        propParallax.alturaParallax = propParallax.seccion.offsetHeight;

        // El inicio de la seccion  más la altura del elemento parallax es el final del efecto
        propParallax.final = propParallax.inicio + propParallax.alturaParallax;

        if (propParallax.recorrido > propParallax.inicio && propParallax.recorrido <= propParallax.final) {
            // Restar el recorrido menos el inicio para iniciar desde 0px sobre 1.5 px para que se mueva  a una velocidad menor
            propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.inicio) / 1.5 + "px";
        } else {
            propParallax.seccion.style.backgroundPositionY = '0px';
        }
    }
}
metParallax.inicio();
