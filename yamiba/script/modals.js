var vanillaModal, vanillaModalsmright, vanillaModalscr;
document.addEventListener('DOMContentLoaded', function(){
  var presentmodals = document.getElementsByClassName("modal");
  var presentmodalssmright = document.getElementsByClassName("modalsmright");
  var presentmodalscr = document.getElementsByClassName("modalscr");
  if (presentmodals.length>0){    
      vanillaModal = new VanillaModal.default({
      modal: '.modal',
      modalInner: '.modal-inner',
      modalContent: '.modal-content',
      open: '[data-modal-open]',  
      close: '[data-modal-close]',
      page: 'body',
      loadClass: 'vanilla-modal',
      class: 'modal-visible',
      clickOutside: true,
      closeKeys: [27],
      transitions: true,
      onBeforeOpen: null,
      onBeforeClose: null
    });   
  }  
  if (presentmodalssmright.length>0){    
      vanillaModalsmright = new VanillaModal.default({
      modal: '.modalsmright',
      modalInner: '.modalsmright-inner',
      modalContent: '.modalsmright-content',
      open: '[data-modalsmright-open]',  
      close: '[data-modalsmright-close]',
      page: 'body',
      loadClass: 'vanilla-modal',
      class: 'modalsmright-visible',
      clickOutside: true,
      closeKeys: [27],
      transitions: true,
      onBeforeOpen: null,
      onBeforeClose: null
    });
  }
  if (presentmodalscr.length>0){    
      vanillaModalscr = new VanillaModal.default({
      modal: '.modalscr',
      modalInner: '.modalscr-inner',
      modalContent: '.modalscr-content',
      open: '[data-modalscr-open]',  
      close: '[data-modalscr-close]',
      page: 'body',
      loadClass: 'vanilla-modal',
      class: 'modalscr-visible',
      clickOutside: true,
      closeKeys: [27],
      transitions: true,
      onBeforeOpen: null,      
      onOpen: function(){
        console.log("open");
        $('.js-modal-custom-scroll').niceScroll({    
          cursorcolor: "#d10085",
          cursoropacitymin: 0,
          cursoropacitymax: 1,
          cursorwidth: "20px",
          cursorborder: "none",
          emulatetouch: true,
          cursorminheight: 32,
          cursordragontouch: true,
          background: "#ebebeb",      
          cursorborderradius: "10px",  
          autohidemode: "true",
          zindex: "200"
        });                
      },
      onBeforeClose: function(){
        console.log("beforeClose");
        $('.js-modal-custom-scroll').getNiceScroll()[0].hide();
      },
      onClose: null
    });
  }  
})

