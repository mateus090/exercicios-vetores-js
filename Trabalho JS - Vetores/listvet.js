var vet = [];


function exerc01(){
    var par = [];
    var impar = [];
    var i;  
    for(i=0;i<6;i++){
        // adiciona numero do usuario no vetor
        vet.push(prompt("Informe um número"))
    }
    for(i=0;i<6;i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i]);
        }
        else{
            impar.push(vet[i]);
        }
    }
    // mostra resultado
    alert("Qts pares " + par.length + " - " + par);
    alert("Qts impares " + impar.length + " - " + impar);  
}
function exerc02(){
    var vet = [];
    var multi2 = [];
    var multi3 = [];
    var multi23 = [];
    var i;
    for(i=0;i<7;i++){
        // adiciona numero do usario no vetor
    vet.push(prompt("Informe um número"))
    }
    for(i=0;i<7;i++){
        if(vet[i] % 2 == 0){
            multi2.push(vet[i]);
        }
        if(vet[i] % 3 == 0){
            multi3.push(vet[i]);
        }
        if((vet[i] % 2 == 0) &&(vet[i] % 3 == 0)){
            multi23.push(vet[i]);
        }
    }
    // mostra resultado
    alert("Múltiplos de 2: "  + multi2);
    alert("Múltiplos de 3: "  + multi3);
    alert("Múltiplos de 2 e 3: " + multi23);
}
function exerc03() {
    var vCodigo = []; // vetor de códigos
    var vEstoque = []; // vetor de estoque
    // entrada de dados	
    var i;
    for (i = 0; i < 5; i++) {
        vCodigo.push(prompt("Informe codigo"));
        vEstoque.push(prompt("Informe estoque"));
    }
    // realizar a compra
    var cliente, codigo, qtde;
    cliente = prompt("Codigo do cliente");
    while (cliente != 0) { // cliente não válido
        codigo = prompt("Codigo do produto");
        qtde = prompt("Qtde do produto");
        // procura no vetor o código do produto no vetor de códigos
        var posicao = vCodigo.indexOf(codigo);
        if (posicao != -1) { // produto existe
            if (vEstoque[posicao] >= qtde) { // tem em estoque
                // atualiza estoque
                vEstoque[posicao] = vEstoque[posicao] - qtde;
                alert("Compra com sucesso");
            }
            else {
                alert("Não tem em estoque");
            }
        }
        else {
            alert("Produto inexistente");
        }
        cliente = prompt("Codigo do novo cliente");
    }
    alert(vEstoque);
}
 function exerc04(){
    var vet = [];
    var i = vet.indexOf(30);

    for(i=0;i<15;i++){
        vet.push(prompt("Informe um número"))
    }
    for(i=0;i<15;i++){
        if(vet[i] == 30){
            alert("Posição do número 30: " + i);
        }         
    }
}
function exerc05(){
    var vetl = [];
    var vetp = [];
    var aux = [];
    var j;
    
    for(i=0;i<15;i++){
        vetl.push(prompt("Alunos que cursam Lógica" + "\n" + "Digite o número da matrícula:"))
    }
    for(i=0;i<10;i++){
        vetp.push(prompt("Alunos que cursam Linguagem de Programação" + "\n" + "Digite o número da matrícula:"))
    }
    for(i=0;i<15;i++){
        j = vetp.indexOf(vetl[i]);
        if (j != -1){
            aux.push(vetl[i]);
        }
    }
        alert("Matrícula de alunos que cursam ambos:" + "\n" + aux); 
    }
 
// Exercício 6
var vet = [];
function cadastra(){
    //cria um objeto
    var objeto = new Object();
    objeto.venda = (document.getElementById("venda").value);
    objeto.comissao = (document.getElementById("comissao").value);
    objeto.nome = (document.getElementById("nome").value);
    objeto.valor = 0;
    vet.push(objeto);
    document.getElementById("r6").innerHTML = objeto.nome + " Inserido com sucesso"
}
function relatorio(){
    var i = 0;
    //montar o vetor de valores recebidos
    for(i=0;i<vet.length;i++){
        vet[i].valor = (vet[i].venda * vet[i].comissao/100)
    }
    //percorre os vetores e monta relatório
    var aux = "";
    for(i=0;i<vet.length;i++){
        aux = aux + "<br/>" + vet[i].nome + " receberá " + vet[i].valor;
    }
    document.getElementById("r6").innerHTML = aux;
}
function totalVenda(){
    var total = 0;
    var i;
    for(i=0;i<vet.length;i++){
        total = total + Number(vet[i].venda);
    }
    document.getElementById("r6").innerHTML = "Total " + total;
}
function maiorVenda(){
    var maior = vet[0].valor;
    var posicao = 0; // guarda posição do maior
    var i;
    for(i=1;i<vet.length;i++){
        if (vet[i].valor > maior){
            maior = vet[i].valor;
            posicao = i;
        }
    }
    document.getElementById("r6").innerHTML = vet[posicao].nome + " - " + maior;
}
function menorVenda(){
    var menor = vet[0].valor;
    var posicao = 0; // guarda posição do menor
    var i;
    for(i=1;i<vet.length;i++){
        if (vet[i].valor < menor){
            menor = vet[i].valor;
            posicao = i;
        }
    }
    document.getElementById("r6").innerHTML = vet[posicao].nome + " - " + menor;
}
// Fim Exercício 6

function exerc07(){
    var vet = [];
    var i;
    var cont = 0;
    var soma = 0;
    for(i=0;i<10;i++){
        vet.push(prompt("Digite um elemento: "))
    }
    for(i=0;i<10;i++){
        if(vet[i] < 0){
            cont = cont + 1;
        }
        else{
            soma += parseInt(vet[i]);
        }
    }   
    alert("Quantidade de números negativos: " + cont)
    alert("Soma dos números positivos: " + soma)
}
var vet = [];
function incluir08(){
    var objeto = new Object();
    objeto.nomeAluno = document.getElementById("nomeAluno").value;
    objeto.mediaFinal = document.getElementById("mediaFinal").value;
    vet.push(objeto);
    document.getElementById("r8").innerHTML = objeto.nomeAluno + " Inserido com sucesso";
}
function relatorio08(){
    var maiorNota = vet[0].mediaFinal;
    var resultado = 0;
    var alunosExame = "";

    for(i=0;i<vet.length;i++){
        if(vet[i].mediaFinal < 7){
            alunosExame += vet[i].nomeAluno + " precisa tirar " + (7 - parseFloat(vet[i].mediaFinal)) + " no exame final." + "<br>";
        }
    }
    for(i=1;i<vet.length;i++){    
        if(maiorNota < vet[i].mediaFinal){
            maiorNota = vet[i].mediaFinal;
            resultado = i;
        }
    }
    document.getElementById("r8").innerHTML = "Maior média: " + vet[resultado].nomeAluno +" - " + maiorNota  +"<br>"+ "Alunos de exame: " + "<br>" + alunosExame + "<br>" 
}
function exerc15(){
    var clientes =[];
    var alugueis = [];
    var i;
    var saida = "";

    for(i=0;i<7;i++){
        clientes.push(prompt("Nome do cliente"));
        alugueis.push(prompt("Qtde de locações"));
    }
    for(i=0;i<7;i++){
        saida = saida + "<br/>" + clientes[i] + " tem direito a " + parseInt(alugueis[i]/10)+" locações.";
    }
    document.getElementById("saida").innerHTML = "<br><b>Resultado:</b>" +"<br>" + saida;
}
function exerc12(){
    var vet = [];
    var i;
    var j = 1;
    var acum = "";
    var soma = 0;

    for(i=0;i<5;i++){
        vet.push(prompt("Digite o "+j + "º Número:"));
        acum += + vet[i] + " + ";
        j += + 1;
        soma += parseInt(vet[i]);
    }  
    alert("Os números digitados foram: " + acum + " = " + soma);
}
function exerc13(){
    var nome = [];
    var nota = [];
    var media = 0;
    var i;
    var j = 0;
    var acum = "";

    for(i=0;i<8;i++){
        j += + 1;
        nome.push(prompt("Digite o nome do " + j + "º aluno:"));
        nota.push(prompt("Digite a nota de " + nome[i]+":"));
        media += parseFloat(nota[i])
        acum += (nome[i]) + " - " + nota[i] + "\n";
    }
    alert("Relatório de notas" + "\n" + acum + "Média da classe: " + (media/8).toFixed(2))
}
function exerc14(){
    var nome = [];
    var nota1 =[];
    var nota2 = [];
    var soma = 0;
    var somaClasse = 0;
    var s = "",resultado = "";
    var acum = 0, acum2 = 0, acum3 = 0;

    for(i=0;i<6;i++){
        nome.push(prompt("Digite o nome: "));
        nota1.push(prompt("Nota da 1ª prova de " + nome[i] + ":"));
        nota2.push(prompt("Nota da 2ª prova de " + nome[i] + ":"));
        soma = parseFloat(nota1[i]) + parseFloat(nota2[i]);
        somaClasse += soma/2;
        
        if(soma/2 >= 8.5){
            s = "Aprovado"
            acum += 1;
        }
        if(soma/2 <= 4.5){
            s = "Reprovado"
            acum2 += 1;
        }
        if((soma/2 < 8.5) && (soma/2 > 4.5)) {
            s = "Exame"
            acum3 += 1
        }
        resultado += "<br>"+ nome[i] + " - " + "Nota prova 1: " + nota1[i] +" - Nota prova 2: " + nota2[i] + " - Média: " + soma/2 + " - Situação: " + s + "<br>"; 


    }
    document.getElementById("r14").innerHTML = "<b>Relatório de notas:</b>" + "</br>" + resultado + "</br>" + "<b>Média da classe:</b> " + (somaClasse/6).toFixed(2) + "<br>" + "<b>Percentual de alunos aprovados:</b> " + ((acum/6) * 100).toFixed(2) +"%" + "<br>" + "<b>Percentual de alunos de exame:</b> " + ((acum3/6) * 100).toFixed(2) +"%" + "<br>" + "<b>Percentual de alunos reprovados:</b> " + ((acum2/6) * 100).toFixed(2) +"%"  ;
}
function exerc16(){
    
    var preco = [];
    var nome = [];
    var acum1 = 0;
    var acum2 = "";
    var acum3 = 0
    var soma = 0;

    for(i=0;i<5;i++){
        nome.push(prompt("Digite o nome do produto: "));
        preco.push(prompt(" Digite o preço do produto " + nome[i] +":"));
    }
    for(i=0;i<5;i++){
        if(preco[i] < 50){
            acum1 += 1;
        }
        if((preco[i] >= 50) && (preco[i] <= 100)){
            acum2 += nome[i] + ",";
        }
        if(preco[i] > 100){
            soma += parseFloat(preco[i]);
            acum3 += 1
        }
    }
    alert("Quantidade de itens com preço inferior a R$ 50,00: " + acum1 + "\n" + "Produtos com preço entre R$ 50,00 e R$ 100,00: " + acum2 + "\n" + "Média do preço de produtos superiores a R$ 100,00:  R$" + (soma/acum3).toFixed(2));
}
function exerc20(){
    var vet = [];
    var acum = "";
    for(i=0;i<10;i++){
        vet.push(prompt("Digite um elemento: "))
    }
    for(i=0;i<10;i++){
        if(vet[i] >= 0){
            acum += vet[i] + "<br>";
        }
    }   
    document.getElementById("r20").innerHTML = "Números positivos: " + "<br>" + acum;
}
function exerc25(){
    var vet = [];
    var maior;
    var i;
    var resultado = " ";

    for(i=0;i<15;i++){
        vet.push(prompt("Digite um elemento: "))
    }

    maior = Math.max.apply(Math,vet);

    for(i=0;i<15;i++){
        resultado += (vet[i]/maior).toFixed(2)+"</br>";
    }

    document.getElementById("r25").innerHTML = "Maior valor do vetor: " + maior + "<br>" + "Resultado: " + "<br>" + resultado;
}    
            
    


   


