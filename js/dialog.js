// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var conteudoForaDialog2 = document.querySelector('#conteudoForaDialog2')
var video = document.querySelector('video');

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  video.removeAttribute('controls');
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-label').focus();
  conteudoForaDialog.inert = true
  conteudoForaDialog2.inert = true
});

function fechandoDialog() {  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto'); 
  conteudoForaDialog.inert = false;
  conteudoForaDialog2.inert = false;
  btnAbreDialog.focus();
  video.setAttribute('controls');
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog);


document.addEventListener('keyup', function(evento){
  if(evento.keyCode == 27){
    fechandoDialog()    
  }
})