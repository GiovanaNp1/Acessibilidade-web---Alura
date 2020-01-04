var CampoEmail = document.querySelector('#email');
var sugestao = document.querySelector('#sugestao');

var domains = ['gmail.com', 'uol.com', 'outlook.com',];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

CampoEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: CampoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function(suggestion) {
            sugestao.style.display = 'inline-block';
            sugestao.textContent = 'Você quis dizer: ' + suggestion.full + '?'
            sugestao.parentNode.classList.add('.contatoCampo--erro');
            CampoEmail.classList.add('.contatoCampo--validouErro');
            sugestao.setAttribute('tabindex', '0');
        }
      });
});