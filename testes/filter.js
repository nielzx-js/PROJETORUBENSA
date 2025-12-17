const alunos=[
    {nome: "pedro",nota:1.0},
    {nome: "ana",nota:2.0},
    {nome: "joao",nota:3.0},
    {nome: "vitor",nota:4.0},
    {nome: "gabriel",nota:5.0},
    {nome: "nielson",nota:6.0},
    {nome: "daniel",nota:7.0},
    {nome: "gustavo",nota:8.0},
    {nome: "ricardo",nota:9.0},
    {nome: "hellen",nota:10.0}
]
const aprovados = alunos.filter((aluno)=>{
    return aluno.nota>5
})
//console.log(aprovados)

const nome=alunos.filter((aluno)=> {
    return aluno.nome==="nielson"
})

const nota=alunos.filter((aluno)=>{

    return aluno.nota >7
})

console.log(nota)
//console.log(nome)