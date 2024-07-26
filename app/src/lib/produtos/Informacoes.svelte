<script lang='ts'>
    import Loader from '$lib/Loader.svelte';
    import { onMount } from 'svelte';
    import IoIosPricetag from 'svelte-icons/io/IoIosPricetag.svelte'
    import IoIosSpeedometer from 'svelte-icons/io/IoIosSpeedometer.svelte'
    import IoIosConstruct from 'svelte-icons/io/IoIosConstruct.svelte'
    import IoIosCalendar from 'svelte-icons/io/IoIosCalendar.svelte'
    import MdLocalGasStation from 'svelte-icons/md/MdLocalGasStation.svelte'
    import IoMdStar from 'svelte-icons/io/IoMdStar.svelte'
    import IoMdStarHalf from 'svelte-icons/io/IoMdStarHalf.svelte'
    import IoMdStarOutline from 'svelte-icons/io/IoMdStarOutline.svelte'
    import { Ratings } from '@skeletonlabs/skeleton';

    export let id_do_produto: string;
    let value = { current: 3.5, max: 5 };

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

    
    function iconClick(event: CustomEvent<{index:number}>): void {
        value.current = event.detail.index;
    }
						

</script>

<div class="produtos-info">
    <!-- {#if isLoading}
        <Loader/>
    {:else} -->
        <h1 class="text-md font-semibold text-slate-900 text-center m-1">{title}</h1>
        <div class="flex justify-center items-center mb-1">
            <p class="mr-1 text-xs font-medium text-slate-700">{score}</p>
            <div class="no-tap-highlight">
                <Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
                    <svelte:fragment slot="empty">
                        <div class="h-4 w-4 text-yellow-400">
                            <IoMdStarOutline/>
                        </div>
                    </svelte:fragment>
                    <svelte:fragment slot="half">
                        <div class="h-4 w-4 text-yellow-400"> 
                            <IoMdStarHalf/> 
                        </div>
                    </svelte:fragment>
                    <svelte:fragment slot="full"> 
                        <div class="h-4 w-4 text-yellow-400"> 
                            <IoMdStar/>
                        </div> 
                    </svelte:fragment>
                </Ratings>
            </div>
            <p class="ml-1 text-xs font-medium text-slate-700">{reviews}</p>
        </div>
        <img
            src="https://images.caminhoesecarretas.com.br/cliente_020650/veiculos/1173069_whatsapp%20image%202024-04-05%20at%2018.12.53_big.jpeg"
            alt="Semeadora"
            class="mt-2 mb-2 rounded-md"
        />
        <p class="text-2xl font-medium text-slate-900 mb-2">R$ {price}</p>
        <p class="text-slate-900 mb-4">Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor.</p>
        <a href="/" class="no-tap-highlight btn variant-filled-primary text-black font-medium py-2 px-4 rounded-full w-full" data-sveltekit-preload-data="hover">Abrir Negociações</a>
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
                    Potência: <b>150 HP</b>
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
