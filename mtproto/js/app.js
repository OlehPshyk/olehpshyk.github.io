//sha1 = require('js-sha1');

function f_sha1() {	
    var salt = document.getElementById('salt').value;
	var session_id = document.getElementById('session_id').value;
	var encoding_test = document.getElementById('text').value;
	var filler = document.getElementById('filler').value;	
	//var sha1 = require('js-sha1');			 

	// insert encode operations
	sha1(encoding_test);
	var hash = sha1.create();
	hash.update(encoding_test);
	hash.hex();

    document.getElementById('msg_key').innerHTML = hash;    
}



function kdf() {	
    //var msg_key = document.getElementById('msg_key').textContent;	
   // var auth_key = document.getElementById('auth_key').textContent; 			 
    
    // insert decode operations	

    //document.getElementById('aes_key').innerHTML =  ;
    //document.getElementById('aes_ige_iv').innerHTML =  ;
}
function aes_ige() {	
    var aes_key = document.getElementById('aes_key').textContent;	
    var aes_ige_iv = document.getElementById('aes_ige_iv').textContent; 			 
    
    // insert decode operations	

    //document.getElementById('aes_key').innerHTML =  ;
    //document.getElementById('aes_ige_iv').innerHTML =  ;
}

function generateUUID()
{	

	var uuid = "AB96E207C631300986F30EF97DF55E179E63C112675F0CE502EE76D74BBEE6CBD1E95772818881E9F2FF54BD52C258787474F6A7BEA61EABE49D1D01D55F64FC07BC31685716EC8FB46FEACF9502E42CFD6B9F45A08E90AA5C2B5933AC767CBE1CD50D8E64F89727CA4A1A5D32C0DB80A9FCDBDDD4F8D5A1E774198F1A4299F927C484FEEC395F29647E43C3243986F93609E23538C21871DF50E00070B3B6A8FA9BC15628E8B43FF977409A61CEEC5A21CF7DFB5A4CC28F5257BC30CD8F2FB92FBF21E28924065F50E0BBD5E11A420300E2C136B80E9826C6C5609B5371B7850AA628323B6422F3A94F6DFDE4C3DC1EA60F7E11EE63122B3F39CBD1A8430157";
	return uuid;
	
}
function view_auth_key() {
	document.getElementById('auth_key').innerHTML = generateUUID();
}


			 
document.getElementById('sha1').addEventListener('click', f_sha1);
document.getElementById('keygen').addEventListener('click', view_auth_key);


//document.getElementById('decode').addEventListener('click', kdf);

//document.getElementById('aes_ige').addEventListener('click', aes_ige);