<script lang='ts'>
    import Loader from '$lib/Loader.svelte';
    import { onMount } from 'svelte';
    import IoIosPricetag from 'svelte-icons/io/IoIosPricetag.svelte'
    import IoIosSpeedometer from 'svelte-icons/io/IoIosSpeedometer.svelte'
    import IoIosConstruct from 'svelte-icons/io/IoIosConstruct.svelte'
    import IoIosCalendar from 'svelte-icons/io/IoIosCalendar.svelte'
    import MdLocalGasStation from 'svelte-icons/md/MdLocalGasStation.svelte'

    export let id_do_produto: string;

    let title: string = 'Maquina teste';
    let reviews: string = '(10)';
    let score: number = 4.9;
    let descricao: string = 'Mussum Ipsum, cacilds vidis litro abertis.  Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Detraxit consequat et quo num tendi nada.';
    let isLoading: boolean = true;
    let price: number = 100000;

    // Função para buscar os dados do produto (unico) na API
    async function fetchProduto(id: string) {
        try {
            const response = await fetch(`http://localhost:3000/api/anuncios/listar/${id}`);
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
            const response = await fetch(`http://localhost:3000/api/anuncios/listar`);
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
            title = `${produto.title}`;
            descricao = produto.description;
        }
        isLoading = false;
    });
</script>

<div class="produtos-info">
    <!-- {#if isLoading}
        <Loader/>
    {:else} -->
        <h1 class="text-md font-semibold text-slate-900 text-center m-1">{title}</h1>
        <div class="flex justify-center items-center mb-1">
            <p class="mr-1 text-xs font-medium text-slate-700">{score}</p>
            <svg aria-hidden="true" class="h-3 w-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-3 w-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-3 w-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-3 w-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-3 w-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p class="ml-1 text-xs font-medium text-slate-700">{reviews}</p>
        </div>
        <img
            src="https://images.caminhoesecarretas.com.br/cliente_020650/veiculos/1173069_whatsapp%20image%202024-04-05%20at%2018.12.53_big.jpeg"
            alt="Semeadora"
            class="mt-2 mb-2 rounded-md"
        />
        <p class="text-2xl font-medium text-slate-900 m-2">R$ {price}</p>
        <a href="/" class=" btn variant-filled-primary text-black font-medium py-2 px-4 rounded-full w-full" data-sveltekit-preload-data="hover">Abrir Negociações</a>
        <div class="">
            <h2 class="text-md font-semibold text-slate-900 text-center m-5">Características</h2>
            <ul class="list-none list-inside space-y-2">
                <li class="flex items-center space-x-2">
                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                        <div class="h-6 w-6">
                            <IoIosPricetag/>
                        </div>
                    </span>
                    Marca: <b>New Holland</b>
                </li>
                <li class="flex items-center space-x-2">
                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                        <div class="h-6 w-6">
                            <IoIosSpeedometer/>
                        </div>
                    </span>
                    Potência: <b>1500 HP</b>
                </li>
                <li class="flex items-center space-x-2">
                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                        <div class="h-6 w-6">
                            <MdLocalGasStation/>
                        </div>
                    </span>
                    Tipo de Combustível: <b>Diesel</b>
                </li>
                <li class="flex items-center space-x-2">
                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                        <div class="h-6 w-6">
                            <IoIosCalendar/>
                        </div>
                    </span>
                    Ano de Fabricação: <b>2021</b>
                </li>
            </ul>
        </div>
    <!-- {/if} -->
</div>

<style>

</style>
