function salvarPeso() {
    let peso = document.getElementById("peso").value
    let meta = document.getElementById("meta").value

    let resultado = document.getElementById("resultado")    

    if (peso == "" || meta == "") {
        resultado.innerHTML = "Preencha os campos para calcular o resultado"
        return
    }

    peso = Number(peso)
    meta = Number(meta) 

    if (peso > meta) {
        resultado.innerHTML = "Parabéns! Você atingiu a sua meta 🎉"
    } else { 
        let falta = meta - peso
        resultado.innerText = "Faltam " + falta + " kg para atingir a sua meta 💪"
        }
    }
    ////////////////////////////////////////////////////
    // Controle de água

        let agua = 0
        let metaAgua = 3

        function aumentarAgua() {
            if (agua < metaAgua) {
                agua+=0.5
            }
            atualizarAgua()
        }

        function diminuirAgua() {
            if (agua > 0) {
                agua-=0.5
            }
            atualizarAgua()
        }

        function atualizarAgua() {
            document.getElementById("agua").innerText = agua.toFixed(1) + " L / " + metaAgua + "L"
            
            let porcentagem = (agua / metaAgua) * 100
            document.getElementById("progresso").style.width = porcentagem + "%"
        }