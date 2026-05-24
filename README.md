# SkillMatch JS - Simulador de Compatibilidade

Sobre o Projeto

Este mini-projeto avaliativo. Tem como objetivo de rodar um script em JavaScript que simula um motor de triagem de currículos para um time de RH.

O sistema criado pega o perfil do candidato como habilidades e experiências e compara com 3 vagas em empresas que precisam de profissionais e calcula a porcentagem de compatibilidade, mostra o que falta estudar e da uma recomendação da melhor vaga que combina com o candidato.

Como Executar o Código:

O projeto foi feito somente em JavaScript, podendo testar diretamente pelo navegador.

- Passo a passo:

1. Abra o Google Chrome.
2. Aperte “F12” ou “Ctrl + Shift + J” para abrir o Console de Desenvolvedor.
3. Abra o arquivo skillmatch.js e copie todo o código.
4. Cole no Console do navegador e aperte “”Enter” para o código funcionar.

Extensões usadas no VS Code durante a realização do projeto:

- Prettier.
- Code Runner

Como a internet funciona?

A internet funciona como uma ampla rede de computadores interligados. Quando um usuário digita um endereço eletrônico, o computador envia uma solicitação por meio de protocolos, como o HTTP/HTTPS, para localizar o servidor em que a página está armazenada, retornando as informações solicitadas para serem exibidas na tela.
 
Arquitetura Cliente-Servidor

É a divisão de tarefas na rede. As tarefas são divididas em cliente e servidor. O cliente corresponde ao navegador utilizado pelo usuário, responsável por solicitar as informações e apresentar a interface na tela. Já o servidor é a máquina encarregada de processar as regras de negócio e armazenar os dados da aplicação. No projeto, essa comunicação foi simulada por meio da criação de uma “Promise” com “setTimeout”, reproduzindo o tempo de resposta de uma requisição de dados proveniente de um servidor real.
Diferença entre Var, Let e Const

Diferença entre Var, Let e Const?

No código, priorizei o uso de let e const. Utilizei const para variáveis que não têm seu valor alterado, como o objeto do candidato e a lista de vagas, e let para valores que podem ser modificados, como contadores e variáveis de repetição em loops. Evitei o uso de var, pois ele possui escopo de função e pode causar problemas relacionados ao hoisting, enquanto let e const respeitam o escopo de bloco, tornando o código mais seguro e organizado.


