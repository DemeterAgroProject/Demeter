<script>
    import { onMount } from "svelte";

    let lastScrollTop = 0;
    let isScrollingUp = true;

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop < lastScrollTop) {
            isScrollingUp = true;
        } else {
            isScrollingUp = false;
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
</script>

<header class:scrolling-up={isScrollingUp}>
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
        top: -10vh; /* Esconde o header inicialmente */
    }
    .scrolling-up {
        top: 0; /* Mostra o header quando rolando para cima */
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


