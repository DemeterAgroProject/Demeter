<script lang='ts'>
    import { onMount } from 'svelte';

    export let id_do_produto: string;

    let title: string = 'Trator XYZ';
    let reviews: string = '5 avaliações';
    let descricao: string = 'Mussum Ipsum, cacilds vidis litro abertis.  Suco de cevadiss deixa as pessoas mais interessantis. Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou euzis!';

    // Função para buscar os dados do produto (unico) na API
    async function fetchProduto(id: string) {
        try {
            const response = await fetch(`http://localhost:3000/api/produtos/listar/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar os dados do produto:', error);
            return null;
        }
    }

    // Função para buscar os dados dos produtos na API - Teste
    async function fetchProdutos() {
        try {
            const response = await fetch(`http://localhost:3000/api/produtos/listar`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Erro ao buscar os dados do produto:', error);
            return null;
        }
    }

    // Carregar os dados do produto quando o componente for montado
    onMount(async () => {

       const produtos = await fetchProdutos();

        const produto = await fetchProduto(id_do_produto);
        if (produto) {
            title = `${produto.marca} ${produto.modelo}`;
            descricao = produto.descricao;
        }
    });
</script>

<div class="produtos-info">
    <h1 class="text-2xl font-bold text-slate-900 text-center m-5">{title}</h1>
    <div class="flex align-center justify-center items-center m-2">
        <div class="flex">
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        </div>
        <p class="ml-2">{reviews}</p>
    </div>
    <div class="info">
        <p class="text-lg text-slate-900 custom-desc">
            {descricao}
        </p>
    </div>
    <div class="price">
        <b><p class="text-4xl text-slate-900">R$ 100.000,00</p></b>
        <br>
        <button class="btn variant-filled-primary">Abrir Negociações</button>
    </div>
</div>

<style>
    .produtos-info {
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0 0 5px #d4d4d4;
        border-radius: 1rem;
        width: 35%;
        height: 70vh;
        overflow: hidden; 
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        overflow-y: auto; 
    }
    .price {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
    }
    .custom-desc {
        margin: 1rem;
        word-break: break-word; 
    }
    .flex {
        display: flex;
        align-items: center;
    }
    .align-center {
        justify-content: center;
    }
    .m-2 {
        margin: 0.5rem;
    }
    .ml-2 {
        margin-left: 0.5rem;
    }
    .items-center {
        align-items: center;
    }
</style>
