// RF01 - Criar o perfil do candidato
const candidato = {
  nome: "João Silva",
  area: "Front-End",
  habilidades: ["JavaScript", "CSS", "Lógica de Programação", "HTML", "GitHub"],
  experienciaMeses: 7
};

// REF02 - Criar uma lista de vagas (mínimo 3)
const vagas = [
    {
    id: 1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica da Programação", "Kanbam"],
    salario: 3000,
    modalidade: "Home Office"
    },
    
    {
    id: 2,
    empresa: "CodeLab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub", "HTML", "CSS"],
    salario: 1600,
    modalidade: "Híbrido"
  },
  {
    id: 3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
    salario: 3400,
    modalidade: "Presencial"
  }
  
];

// RF09 e RF11 - Criar uma classe base e demonstrar uso do this
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  // Método que usa o 'this'
  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

// RF10 - Usar herança (VagaFrontEnd herda de Vaga)
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    // O super chama o construtor da classe pai (Vaga)
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel; // Atributo exclusivo da vaga front-end
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

// RF13- Usar closure (vai manter um contador para análisar quantas análises foram feitas)
function criarContadorAnalises() {
  
}