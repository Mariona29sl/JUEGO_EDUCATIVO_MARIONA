let pantalla;
window.addEventListener('load', () => {
  // document.appendChild(HTMLSelectElement);
  initModalEvents();
  pantalla = document.getElementById("screen");
  start();
  stop();
  holaBoton();
});


let isMarch = false; 
let acumularTime = 0;


const start = () => {
    //const buttonStart = document.querySelector('.buttonStart');
    //buttonStart.addEventListener('click', (ev) => {
        if (isMarch == false) { 
            timeInicial = new Date();
            control = setInterval(cronometro,10);
            isMarch = true;
            }
        //ev.preventDefault();
        console.log("vuc jcu");
    //});

};

const cronometro = () => {
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime);
    cc = Math.round(acumularTime2.getMilliseconds() / 10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    hh = acumularTime2.getHours()-1;
    if (cc < 10) { cc = "0" + cc; };
    if (ss < 10) { ss = "0" + ss; };
    if (mm < 10) { mm = "0" + mm; };
    if (hh < 10) { hh = "0" + hh; };
    pantalla.innerHTML = hh + " : " + mm + " : " + ss + " : " + cc;
};

const stop = () => {
    const bottonStop = document.querySelector('.buttonStop');
    bottonStop.addEventListener('click', (ev) => {
        if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }    
        ev.preventDefault();
    });

    console.log("emependo");
};


//PARA EL MENU DE INFROMACION
const openModal = (grupoIntrucciones) => {

    grupoIntrucciones.classList.add('opened');
    document.body.style.overflow = 'hidden';
};

const closeModal = (grupoIntrucciones) => {

    grupoIntrucciones.classList.remove('opened');
    document.body.style.overflow = '';
};
const initModalEvents = () => {

    const toggle = document.querySelector('.grupoBoton');
    const grupoIntrucciones = document.querySelector('.grupoInstrucciones');
    const overlay = document.querySelector('.infoOverlay');

    //para que se abrá la perstaña y 'ev' para q a no funcione
    // vomo un enlace
    toggle.addEventListener('click', (ev) => {
        openModal(grupoIntrucciones);
        ev.preventDefault();
    });
    /* closeButton.addEventListener('click', () => {
         closeModal(grupoIntrucciones);
         ev.preventDefault();
     });*/
    overlay.addEventListener('click', () => {
        closeModal(grupoIntrucciones);
        ev.preventDefault();
    });
};



//DRAG-DROP

const margarita = document.querySelector('.margarita');
function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
    // translate the element
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'
  
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }
  
  // this function is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener





//MARGARITA



interact('.macetaMargarita')
  .dropzone({
    // only accept elements matching this CSS selector
    accept: '.margarita',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
      //console.log("hola1");
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
        console.log("hola3");
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
       // event.relatedTarget.textContent = 'Dragged out'
    },
    //Cuando sueltas el objeto dentro
    ondrop: function (event) {
      var draggableElement = event.relatedTarget
      draggableElement.remove();
      let flores = document.querySelectorAll(".margarita, .tulipan, .girasol, .calendula, .cosmos, .hortensia");
      
      if(flores.length == 0){
        
        //console.log(document.querySelector(".grupoStop"));
        document.querySelector(".grupoStop").style.visibility = 'visible';

      }

      //delete event.relatedTarget;
    },
    // ondropdeactivate: function (event) {
    //   // remove active dropzone feedback
    //   event.target.classList.remove('drop-active')
    //   event.target.classList.remove('drop-target')
      
    // }

  });
//FLOR
  interact('.margarita')
  .draggable({
    inertia: true,
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     //restriction: 'parent',
    //     //endOnly: true
    //   })
    // ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { 
      move: dragMoveListener 
    }
  });



//TULIPANES

interact('.macetaTulipan')
  .dropzone({
    // only accept elements matching this CSS selector
    accept: '.tulipan',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
      //console.log("hola1");
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
        console.log("hola3");
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
       // event.relatedTarget.textContent = 'Dragged out'
    },
    //Cuando sueltas el objeto dentro
    ondrop: function (event) {
      var draggableElement = event.relatedTarget
      draggableElement.remove();
      let flores = document.querySelectorAll(".margarita, .tulipan, .girasol, .calendula, .cosmos, .hortensia");
      
      if(flores.length == 0){
        
        //console.log(document.querySelector(".grupoStop"));
        document.querySelector(".grupoStop").style.visibility = 'visible';

      }


      //delete event.relatedTarget;
    },
    // ondropdeactivate: function (event) {
    //   // remove active dropzone feedback
    //   event.target.classList.remove('drop-active')
    //   event.target.classList.remove('drop-target')
      
    // }

  });
//FLOR
  interact('.tulipan')
  .draggable({
    inertia: true,
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     //restriction: 'parent',
    //     //endOnly: true
    //   })
    // ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { 
      move: dragMoveListener 
    }
  });






//GIRASOL

interact('.macetaGirasol')
  .dropzone({
    // only accept elements matching this CSS selector
    accept: '.girasol',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
      //console.log("hola1");
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
        console.log("hola3");
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
       // event.relatedTarget.textContent = 'Dragged out'
    },
    //Cuando sueltas el objeto dentro
  ondrop: function (event) {
      var draggableElement = event.relatedTarget
      
      draggableElement.remove();
      let flores = document.querySelectorAll(".margarita, .tulipan, .girasol, .calendula, .cosmos, .hortensia");
      
      if(flores.length == 0){
        
        //console.log(document.querySelector(".grupoStop"));
        document.querySelector(".grupoStop").style.visibility = 'visible';

      }
    },

  });
//FLOR
  interact('.girasol')
  .draggable({
    inertia: true,
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     //restriction: 'parent',
    //     //endOnly: true
    //   })
    // ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { 
      move: dragMoveListener 
    }
  });






//CALENDULA

interact('.macetaCalendula')
  .dropzone({
    // only accept elements matching this CSS selector
    accept: '.calendula',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
      //console.log("hola1");
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
        console.log("hola3");
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
       // event.relatedTarget.textContent = 'Dragged out'
    },
    //Cuando sueltas el objeto dentro
    ondrop: function (event) {
      var draggableElement = event.relatedTarget
      //draggableElement.style.display = 'none';
      draggableElement.remove();
      let flores = document.querySelectorAll(".margarita, .tulipan, .girasol, .calendula, .cosmos, .hortensia");
      
      if(flores.length == 0){
        
        //console.log(document.querySelector(".grupoStop"));
        document.querySelector(".grupoStop").style.visibility = 'visible';

      }

      //delete event.relatedTarget;
    },

  });
//FLOR
  interact('.calendula')
  .draggable({
    inertia: true,
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     //restriction: 'parent',
    //     //endOnly: true
    //   })
    // ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { 
      move: dragMoveListener 
    }
  });





//HORTENSIA

interact('.macetaHortensia')
  .dropzone({
    // only accept elements matching this CSS selector
    accept: '.hortensia',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
      //console.log("hola1");
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
        console.log("hola3");
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
       // event.relatedTarget.textContent = 'Dragged out'
    },
    //Cuando sueltas el objeto dentro
    ondrop: function (event) {
      var draggableElement = event.relatedTarget
      //draggableElement.style.display = 'none';
      draggableElement.remove();
      let flores = document.querySelectorAll(".margarita, .tulipan, .girasol, .calendula, .cosmos, .hortensia");
      
      if(flores.length == 0){
        
        //console.log(document.querySelector(".grupoStop"));
        document.querySelector(".grupoStop").style.visibility = 'visible';

      }

      //delete event.relatedTarget;
    },

  });
//FLOR
  interact('.hortensia')
  .draggable({
    inertia: true,
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     //restriction: 'parent',
    //     //endOnly: true
    //   })
    // ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { 
      move: dragMoveListener 
    }
  });


//COSMOS

interact('.macetaCosmos')
  .dropzone({
    // only accept elements matching this CSS selector
    accept: '.cosmos',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
      //console.log("hola1");
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
        console.log("hola3");
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
       // event.relatedTarget.textContent = 'Dragged out'
    },
    //Cuando sueltas el objeto dentro
    ondrop: function (event) {
      var draggableElement = event.relatedTarget
      //draggableElement.style.display = 'none';
      draggableElement.remove();
      let flores = document.querySelectorAll(".margarita, .tulipan, .girasol, .calendula, .cosmos, .hortensia");
      
      if(flores.length == 0){
        
        //console.log(document.querySelector(".grupoStop"));
        document.querySelector(".grupoStop").style.visibility = 'visible';

      }

      //delete event.relatedTarget;
    },

  });
//FLOR
  interact('.cosmos')
  .draggable({
    inertia: true,
    // modifiers: [
    //   interact.modifiers.restrictRect({
    //     //restriction: 'parent',
    //     //endOnly: true
    //   })
    // ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { 
      move: dragMoveListener 
    }
  });








