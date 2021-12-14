//function showMeSomething(texto) {
// essa é a variável, a caixa que vou guardar a informação
//alert(texto) // é o escreva do portugol
// posso chamar a propiedade pelo alert tbm

// const = inalterável
// let = alterável

/* DADO SIMPLES 
      let accept = true */

/* DADO ESTRUTURADO 
      let name = {
        name: 'Jakeliny Gracielly'
        phone: 12349340
      }*/

/* ONDE USAR (=) OU (:) 
      
      const github = 'jakeliny' 
      
      ( sinal de igual porque é uma variável e ela está recebendo um valor, igual é um sinal usado para representar uma variável recebendo valor. )
      
      const link = {
        github: " jaqueliny"
      }
      ( sinal de dois pontos porque é um objeto, e dentro dele tem vários valores)
      */

/* VARIÁVEL NA FUNÇÃO
        é uma regra específica, onde a variável dentro da função não precisa ser acompanhada por let ou const.
        ................................
        function mostrarTelaVerde(show){
          alert(show)
        }
        mostrarTelaVerde()
        ................................
        ...obs............
        não sabia que dava 
        pra usar variável 
        dentro da função
        ..................
      */

/* DUAS FORMAS DE USAR O ID 
      duas formas de chamar o id no js
      function changeSocialMediaLinks(){
        ...primeira opcao................
        document.getElementById('userName').
        textContent = 'Olivia'
        .................................
        
        ... segunda opcao................
        userName.textContent = "marcelo"
        .................................
        ...obs.....................
        segunda opcao 
        é mais simples.
        o javascript já 
        entende que o userName 
        ou qualquer palavra 
        antes do (.) é um id,
        mas isso não acontece com 
        class ou tag, pois o js ainda
        precisa do getElement pra
        buscar esses elementos
        .............................
      }
      */

/* LAÇO DE REPETIÇÃO
     
     for (let i = 0; i <= 10; i++) {
       alert(i)
     }
     o i recebe zero e vai continuar rodando enquanto for menor ou igual a 10, adicionando mais 1 a cada rodada, gerando um ciclo
     ......................................................
     */

/* LAÇO DE REPETIÇÃO II
        for (let li of socialLinks.children) {
          alert(li.getAtributte('class'))
        }
        ...............................................................
        for para variável que se chama li, que possui um id chamado socialLinks.
        Children significa filhos. Ou seja, for para o cada li, ele busca o li pelo id e busca mais dentro, pelos seus filhos.
        cria um alerta e chama a li pelo getAtributte, chama o atributo class.
      
      */

/* VARIÁVEL DE ESCOPO 
      só existe a variável quando o for existir.
      */

const LinksSocialMedia = {
  github: 'jakeliny',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}
function changeSocialMediaLinks() {
  /* socialLink é o id da ul(mãe das li).
        children serve para  buscar as filhas da ul, ou seja, li e adiciona na variável let li*/
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    /* a variável chamada social vai receber do li a classe deles. getAttribute significa "pegar atributo" */

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    /* aqui pega o filho do li na posição 0, ou seja, o primeiro filho. que recebe uma nova informação. No html, o a tem uma url, mas aqui no js, o a recebe uma nova url. Dentro da url tem 3 variáveis, a que se refere ao youtube, facebook etc. e a que se refere ao usuário jakeliny*/

    // alert(li.children[0].href)
    // aqui o alert tá chamando o novo a
  }
}

changeSocialMediaLinks() // aqui tá chamando o comando

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  // isso é um template string

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  // alert(data.bio) é assim que se chama os elementos da api, coloca o nome da variável (data).(nome da propriedade que quer chamar)
  //  a variável data vai guardar o response.json, pq o then joga a resposta pro proximo irmão then, então é só eu criar outro then que a resposta vai pra lá automaticamente.
  // a variável response é transformada em json pq o fetch pega a url que é um api em json, mas o fetch não sabe reconhecer que é um json, então é provavel que ele trsnforme essas informações em um objeto.
  // fetch é uma função
  // then é uma promise
  // acho que o fetch vai rodar a url e passar o conteúdo para a promise que se chama 'then'
  // then = faça
  // response = é o nome da variável
}

getGitHubProfileInfos()

//ARROW FUNCTIONS
// argumento => {}
