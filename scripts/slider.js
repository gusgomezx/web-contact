let propSlider = {
    posicion:null,
    index:1,
    padreSlider: document.getElementById('slide'),
    hijoSlider: document.getElementsByClassName('slider')
}
let metSlider = {
    inicio : function (){
        setInterval(metSlider.mover, 3000);
    },
    mover: function () {
        setTimeout(function(){
            propSlider.posicion=propSlider.index * -100;
            propSlider.padreSlider.style.marginLeft = propSlider.posicion+"%";
            propSlider.index++;
            if(propSlider.index === propSlider.hijoSlider.length){
                propSlider.index = 0;
            }
        },1000);
    }
}
metSlider.inicio();
