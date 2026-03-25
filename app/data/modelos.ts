export type Modelo = {
  id: string;
  nome: string;
  produto: string;
  tema: string;
  imagem: string;
};

export const produtos = ["Todos", "Canecas", "Camisetas", "Relógios de Parede", "Chaveiros", "Brindes"];

export const temas = ["Todos", "Aniversário", "Natal", "Dia das Mães", "Dia dos Pais", "Casamento", "Empresarial", "Infantil", "Esportes", "Religioso"];

export const modelos: Modelo[] = [
  // Adicione seus modelos aqui. Exemplo:
  // {
  //   id: "caneca-natal-01",
  //   nome: "Caneca Natal Clássica",
  //   produto: "Canecas",
  //   tema: "Natal",
  //   imagem: "/images/modelos/caneca-natal-01.jpg",
  // },
];
