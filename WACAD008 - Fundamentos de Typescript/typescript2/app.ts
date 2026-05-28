// async function gerarAlunosAleatorios(quantidade: number): Promise<Aluno[]> {
//     try {
//         const resposta = await fetch(`https://randomuser.me/api/?results=${quantidade}&nat=br`);
//         const dados = await resposta.json();
        
//         return dados.results.map((user: any) => {
//             const alturaAleatoria = parseFloat((Math.random() * (1.95 - 1.50) + 1.50).toFixed(2));
//             const pesoAleatorio = parseFloat((Math.random() * (95 - 50) + 50).toFixed(1));
            
//             return new Aluno(
//                 user.login.uuid, 
//                 `${user.name.first} ${user.name.last}`,
//                 user.dob.age,
//                 alturaAleatoria,
//                 pesoAleatorio
//             );
//         });
//     } catch (erro) {
//         console.error("Erro ao buscar alunos da API:", erro);
//         return [];
//     }
// }