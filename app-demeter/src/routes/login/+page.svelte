<script lang="ts">
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';
    import 'iconify-icon';

    export let data: PageData;

    const voltarHome = () => {
        goto('/');
    }

    const hollowPurple = () => {
        goto('/hollow');
    }

    const enviarFormulario = async (event: Event) => {
        event.preventDefault();

        const usuarioInput = document.querySelector('#user_email') as HTMLInputElement;
        const senhaInput = document.querySelector('#user_pass') as HTMLInputElement;

        const formData = {
            email: usuarioInput.value,
            password: senhaInput.value
        };

        console.log('Enviando dados:', formData);
        console.log('Enviando dados:', JSON.stringify(formData));

        try {
            const response = await fetch('http://localhost:3000/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log('Resposta:', response);

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
            } else {
                console.error('Erro ao enviar dados:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

</script>

<div class="btn-voltar">
    <button class="btn-icon variant-filled-primary" on:click={voltarHome}>
        <iconify-icon icon="mdi:home"></iconify-icon>
    </button>

    <button class="btn-icon" on:click={hollowPurple}>
        <iconify-icon icon="mdi:"></iconify-icon>
    </button>
</div>


<div class="form-div">
    <form id="login-form" on:submit={enviarFormulario}>
        <div class="inputs-form">
            <label for="user_email">Email</label>
            <input id="user_email" class="input" title="Email" type="email" placeholder="exemplo@email.com" />
            <br>
            <label for="user_pass">Senha</label>
            <input id="user_pass" class="input" title="Senha" type="password" placeholder="Digite sua senha" />
        </div>
        <br>
        <button type="button" class="btn variant-filled-primary" on:click={enviarFormulario}>Enviar</button>
    </form>
</div>

<style>
    .form-div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    #login-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 75%;
        width: 75%;
        border-radius: 4rem;
        background-color: #FFF5E3;
        margin-bottom: 10vh;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }
    #login-form button {
        margin-top: 1vh;
    }
    #login-form button:hover{
        transform: scale(1.1);
        transition: transform 0.5s;
    }

    .btn-voltar {
        display: flex;
        justify-content: flex-start;
        padding: 10px;
    }

    .btn-voltar button:hover{
        transform: scale(1.1);
        transition: transform 0.5s;
    }

    .inputs-form {
        display: flex;
        flex-direction: column;
        margin-top: 5vh;
    }
    .inputs-form label {
        font-size: 1rem;
        color: gray;
    }
     
</style>
