var ValidarCep = document.querySelector('#cep')

ValidarCep.oninvalid = function(){
    this.setCustomValidity('');

    if(!this.oninvalid.valid) {
        this.setCustomValidity('Ops! Tem algo errado neste campo!');
        this.parentNode.classList.add('contatoCampo--erro')
    }
}