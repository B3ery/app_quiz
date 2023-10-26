const btnRestart = document.querySelector(".finish button");
const btnproximo = document.querySelector(".content button");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const questoes = document.querySelector(".questoes")
const respostas = document.querySelector(".respostas")


let indiceatual = 0;
let perguntasCorretas = 0;

function certa(){
    const certa = document.getElementById("certa")
    certa.style.background = "green"
    let erradas = document.querySelectorAll("#errada");
    for (let index = 0; index < erradas.length; index++){
        erradas[index].style.backgroundColor = "red";
    }
    perguntasCorretas++;
}
function errada (){
    const certa = document.getElementById("certa")
    certa.style.background = "green"
    let erradas = document.querySelectorAll("#errada");
    for (let index = 0; index < erradas.length; index++){
        erradas[index].style.backgroundColor = "red";
    }
}

function questao1(){
    const indiceatual = 0;
    spnQtd.innerHTML = `${indiceatual + 1}/5`;
    respostas.innerHTML = ""
    questoes.innerHTML = "Quanto é 1 + 1 ?";
    const div1 = document.createElement("div");
    div1.innerHTML = `
    <button onclick="certa()" id="certa">2</button>`;

    const div2 = document.createElement("div");
    div2.innerHTML = `
    <button onclick="errada()" id="errada">4</button>
    `;
    const div3 = document.createElement("div");
    div3.innerHTML = `
    <button onclick="errada()" id="errada">3</button>
    `;
    respostas.appendChild(div1);
    respostas.appendChild(div2);
    respostas.appendChild(div3);

    btnproximo.addEventListener("click", questao2);
    }

    function questao2(){
        const indiceatual = 0;
        spnQtd.innerHTML = `${indiceatual + 2}/5`;
        respostas.innerHTML = ""
        questoes.innerHTML = "Quanto é 3 + 3 ?";
        const div1 = document.createElement("div");
        div1.innerHTML = `
        <button onclick="errada()" id="errada">9</button>`;
    
        const div2 = document.createElement("div");
        div2.innerHTML = `
        <button onclick="errada()" id="errada">8</button>
        `;
        const div3 = document.createElement("div");
        div3.innerHTML = `
        <button onclick="certa()" id="certa">6</button>
        `;
        respostas.appendChild(div1);
        respostas.appendChild(div2);
        respostas.appendChild(div3);
    
        btnproximo.addEventListener("click", questao3);
        }
   
        function questao3(){
            const indiceatual = 0;
            spnQtd.innerHTML = `${indiceatual + 3}/5`;
            respostas.innerHTML = ""
            questoes.innerHTML = "Quanto é 3 + 5 ?";
            const div1 = document.createElement("div");
            div1.innerHTML = `
            <button onclick="errada()" id="errada">9</button>`;
        
            const div2 = document.createElement("div");
            div2.innerHTML = `
            <button onclick="certa()" id="certa">8</button>
            `;
            const div3 = document.createElement("div");
            div3.innerHTML = `
            <button onclick="errada()" id="errada">20</button>
            `;
            respostas.appendChild(div1);
            respostas.appendChild(div2);
            respostas.appendChild(div3);
        
            btnproximo.addEventListener("click", questao4);
            }

            function questao4(){
                const indiceatual = 0;
                spnQtd.innerHTML = `${indiceatual + 4}/5`;
                respostas.innerHTML = ""
                questoes.innerHTML = "Qual é a capital do Brasil ?";
                const div1 = document.createElement("div");
                div1.innerHTML = `
                <button onclick="errada()" id="">São Paulo</button>`;
            
                const div2 = document.createElement("div");
                div2.innerHTML = `
                <button onclick="certa()" id="certa">Brasilia</button>
                `;
                const div3 = document.createElement("div");
                div3.innerHTML = `
                <button onclick="errada()" id="errada">Rio de Janeiro</button>
                `;
                respostas.appendChild(div1);
                respostas.appendChild(div2);
                respostas.appendChild(div3);
            
                btnproximo.addEventListener("click", questao5);
                }

                function questao5(){
                    const indiceatual = 0;
                    spnQtd.innerHTML = `${indiceatual + 5}/5`;
                    respostas.innerHTML = ""
                    questoes.innerHTML = "Qual é a figura do cachorro ?";
                    const div1 = document.createElement("div");
                    div1.innerHTML = `
                    <button onclick="certa()" id="certa">
                    <img src="img/cachorro.png"></button>`;
                
                    const div2 = document.createElement("div");
                    div2.innerHTML = `
                    <button onclick="errada()" id="errada"><img src="img/leao.png"></button>
                    `;
                    const div3 = document.createElement("div");
                    div3.innerHTML = `
                    <button onclick="errada()" id="errada"><img src="img/lobo.png"></button>
                    `;
                    respostas.appendChild(div1);
                    respostas.appendChild(div2);
                    respostas.appendChild(div3);
                
                   btnproximo.addEventListener("click", finish)
                    }
    
    
    function finish(){
        textFinish.innerHTML = `você acertou ${perguntasCorretas} de 5`;
        content.style.display="none";
        contentFinish.style.display = "flex"
    }

btnRestart.onclick = () => {
    content.style.display = "flex"
    contentFinish.style.display = "none";
    indiceatual = 0;
    perguntasCorretas = 0;
    window.location.reload();
};
questao1()






























