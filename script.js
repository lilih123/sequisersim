const loginButton = document.getElementById('loginButton');
        const modal = document.getElementById('modal');
        const closeModal = document.getElementById('closeModal');
        const cadastroForm = document.getElementById('cadastroForm');

        loginButton.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const cpf = document.getElementById('cpf').value;
            const senha = document.getElementById('senha').value;

            const usuario = { nome, email, telefone, cpf, senha };
            localStorage.setItem('usuario', JSON.stringify(usuario));

            alert('Seu cadastro foi realizado!');
            window.location.href = 'outrapag.html';
        });
        document.addEventListener("DOMContentLoaded", () => {
            const usuario = JSON.parse(localStorage.getItem("usuario"));

            if (usuario) {
                document.getElementById("nome").textContent = `Nome: ${usuario.nome}`;
                document.getElementById("email").textContent = `Email: ${usuario.email}`;
                document.getElementById("telefone").textContent = `Telefone: ${usuario.telefone}`;
                document.getElementById("cpf").textContent = `CPF: ${usuario.cpf}`;
            }
        });

        function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,13) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value = "("+ tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!= undefined)
                {
                    document.getElementById("telefone").value= tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            localStorage.setItem("telefone",telefone)
        }
        function mascara_cpf(){
            var cpf=document.getElementById("cpf").value
            if(cpf[3]!=".")
            {
                if (cpf[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf.slice(0,3)+"."+cpf[3]
                }
            }
            if(cpf[7]!=".")
            {
                if (cpf[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf.slice(0,7)+"."+cpf[7]
                }
            }
            if(cpf[11]!="-")
            {
                if(cpf[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf.slice(0,11)+"-"+cpf[11]
                }
            }
            localStorage.setItem("cpf",cpf)
        }