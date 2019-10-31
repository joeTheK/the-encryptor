//Key- v = Vigenere, ENC = Encryptor, DEC = Decryptor, o = output
function vENC(){
  var M = $("#M").val();
  var K = $("#K").val();
  M = M.replace(/\s/g, '');
  M = M.toLowerCase();
  var l = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  function nM(){
    var i;//placeholder
    var C;//Ciphered message (placeholder)
    var k;//key (repeated)
    var nK;//numbered key
    var nM;//numbered message
    var c;//ciphered message
    var eM = [];//final message array
    for (i=0;i<M.length;i++){
    k =K[i % K.length];
    nM = l.indexOf(M[i]);
    nK = l.indexOf(k[0]);
    C = (nM + nK) % 26;
    c = String.fromCharCode(C + 97);
    eM.push(c)
    }
    if($("#dsh").is(':checked')){
      $('p#vOut').text(eM.join('-'));
    }else{
      $('p#vOut').text(eM.join(''));
    }

  }
  nM();
}
function vDEC(){
  var C = $("#C").val()
  var K = $("#cK").val()
  C = C.replace(/\s/g, '');
  C = C.replace(/-/g, '');
  C = C.toLowerCase();

  var l = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function nM(){
    var i;
    var M;
    var k;
    var nK;
    var nM;
    var m;
    var dM = [];
    for (i=0;i<C.length;i++){
    k =K[i % K.length];
    nM = l.indexOf(C[i]);
    nK = l.indexOf(k[0]);
    nM = (nM + 26);
    M = (nM - nK) % 26;
    console.log(M)
    m = l[M];
    dM.push(m)
    }
    if($("#dsh").is(':checked')){
      $('p#vdOut').text(dM.join('-'));
    }else{
      $('p#vdOut').text(dM.join(''));
    }
  }
  nM();
}

$("button#vENC").on('click',function(){
  $("#voENC").toggle()
})
$("button#vDEC").on('click',function(){
  $("#voDEC").toggle()
})

$("#ENC").on('click',function(){
  vENC();
  $("#M").val('')
  $("#K").val('')
  $
})
$("#DEC").on('click',function(){
  vDEC();
  $("#C").val('')
  $("#cK").val('')
})

$("#voENC").hide()
$("#voDEC").hide()
