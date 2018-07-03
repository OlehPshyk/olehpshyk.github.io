'use strict';

var navDropButton = document.querySelector('.js-nav-drop-icon'),
    sideNavigation = document.querySelector('.js-side-navigation');
if (navDropButton) navDropButton.addEventListener('click', toggleSideNavigation);
if (sideNavigation) sideNavigation.addEventListener('click', function (e) {
  e.stopPropagation();
  closeSideNavigation();
});
function toggleSideNavigation() {
  navDropButton.classList.toggle('open');
  sideNavigation.classList.toggle('open');
}
function closeSideNavigation() {
  navDropButton.classList.remove('open');
  sideNavigation.classList.remove('open');
  console.log('closeSideNavigation');
}

//INPUT [type=email] & [type=password] CLEARING onClick
// var loginInputs = document.querySelectorAll("input[type=email]");
// var passwordInputs = document.querySelectorAll("input[type=password]");
// var logi,pasi;
// for (logi = 0; logi < loginInputs.length; logi++) {
//   loginInputs[logi].addEventListener('click', function(e) {
//     e.target.value="";    
//   })
// }
// for (pasi = 0; pasi < passwordInputs.length; pasi++) {
//   passwordInputs[pasi].addEventListener('click', function(e) {
//     e.target.value="";    
//   })
// }


//SELECT
var x, i, j, selElmnt, a, b, c, invalid;
/*look for any elements with the class "select":*/
x = document.getElementsByClassName("select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  //invalid = true;
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    //modification//  
    if (selElmnt.options[j].hasAttribute("selected")) {
      c.setAttribute("class", "same-as-selected");
      // invalid = false;
    }
    //end modification//     
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      //h.parentNode.classList.remove("invalid"); //remove class "invalid" when selected some item
      h.click();
    });
    b.appendChild(c);
  }
  //modification//
  // if (invalid&&x[i].hasAttribute("required"))
  //   x[i].classList.add("invalid");
  //end modification//
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    closeAllDropdown();
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
      y,
      i,
      arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
//END SELECT


//DROPDOWN
var dropbtn = document.getElementsByClassName("dropbtn");
var dropdowns = document.getElementsByClassName("dropdown-content");
for (var dropbtni = 0; dropbtni < dropbtn.length; dropbtni++) {
  dropbtn[dropbtni].addEventListener("click", dropdownOpen);
}
function dropdownOpen(e) {
  e.preventDefault();
  e.stopPropagation();
  closeAllDropdown();
  closeAllSelect();
  e.target.nextElementSibling.classList.toggle("show");
}
function closeAllDropdown() {
  for (var dropi = 0; dropi < dropdowns.length; dropi++) {
    var openDropdown = dropdowns[dropi];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
// Close the dropdown menu if the user clicks outside of it
document.addEventListener("click", closeAllDropdown);
//END DROPDOWN


//VANILLA-MODAL
var vanillaModal = new VanillaModal.default({
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
  onBeforeClose: null,
  onOpen: null,
  onClose: null
});
//END VANILLA-MODAL

//OPEN MODAL
// for open OK modal use these command
// vanillaModal.open('#modal-ok');
// for open ERROR modal use these command
// vanillaModal.open('#modal-error');
//END OPEN MODAL