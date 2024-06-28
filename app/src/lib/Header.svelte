<script lang="ts">

import { onNavigate } from '$app/navigation';

onNavigate((navigation) => {
    //@ts-ignore
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
        //@ts-ignore
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});

</script>

<header>
    <div class="logo">Demeter</div>
    <nav class="nav-links">
        <a href="/">Home</a>
        <a href="/produtos">Máquinas</a>
        <a href="/anunciar">Anunciar</a>
        <a href="/historico">Histórico</a>
        <a href="/chat">Chat</a>
    </nav>
    <div>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" width="30px" />
    </div>
</header>
<div class="content"></div>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #ffffff;
        height: 10vh;
        transition: top 0.3s;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000; 
    }
    .logo {
        font-size: 1.5em;
        font-weight: 500;
    }
    .nav-links {
        display: flex;
        gap: 15px;
    }
    .nav-links a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
    }
    .content {
        padding-top: 10vh; /* Espaço equivalente à altura do header */
    }
</style>


