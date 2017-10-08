document.addEventListener('DOMContentLoaded', function () {
	
    console.log('Aloha Man');
    var itemHeads = document.querySelectorAll(".item-head"),
    	open = document.getElementsByClassName("open");    	
    
    
    itemHeads.forEach(function(item, i, itemHeads) {
  		item.addEventListener('click', function(e) {  	
  			// if there is an element with class="open", and this is not the parent of clicked on  
  			// if you want to open several simultaneously - comment out this "if"			
    		if (open.length > 0 && open[0] !== this.parentNode) {
    			// remove class "open"				
      			open[0].classList.remove('open');  
    		}    
			// change the state class="open" of the parent current element : add if it was not, remove it if it was.
    		this.parentNode.classList.toggle('open');      					
  		});
	});
});
