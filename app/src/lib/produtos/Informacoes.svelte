<script lang='ts'>
    import Loader from '$lib/Loader.svelte';
    import { onMount } from 'svelte';
    import IoMdStar from 'svelte-icons/io/IoMdStar.svelte';
    import IoMdStarHalf from 'svelte-icons/io/IoMdStarHalf.svelte';
    import IoMdStarOutline from 'svelte-icons/io/IoMdStarOutline.svelte';
    import { Ratings } from '@skeletonlabs/skeleton';


    export let id_do_produto: string;
    let value = { current: 3.5, max: 5 };

    let title: string = 'Maquina Teste';
    let reviews: string = '(10)';
    let score: number = 4.9;
    let descricao: string = 'Mussum Ipsum, cacilds vidis litro abertis.  Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.';
    let isLoading: boolean = true;
    let price: number = 100000;
    let store: string = 'Loja do Zé';
    let banner: string = 'https://as2.ftcdn.net/v2/jpg/02/79/39/49/1000_F_279394999_FCM2aWRcsGYDl8MYtBJ44xiK0k63qkCv.jpg';
    let num_vendas: number = 100;

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
            price = produto.price;
        }
        isLoading = false;
    });

    function iconClick(event: CustomEvent<{ index: number }>): void {
        value.current = event.detail.index;
    }

    // Função para formatar o preço com os centavos
    function formatPrice(value: number): string {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
</script>

<div class="grid lg:grid-cols-3 gap-6">
    <!-- Left Column: Image -->
    <div class="lg:col-span-2">
        <img
            src="https://images.caminhoesecarretas.com.br/cliente_020650/veiculos/1173069_whatsapp%20image%202024-04-05%20at%2018.12.53_big.jpeg"
            alt="Semeadora"
            class="mt-2 lg:mb-2 rounded-md w-full max-h-[500px] object-cover"
        />
    </div>
    
    
    <!-- Right Column: Title, Rating, Price, Description, Button, Characteristics -->
    <div class="lg:col-span-1">
        <h1 class="text-xl font-bold text-slate-900 mb-2 lg:mt-1">{title}</h1>
        
        <div class="flex items-center mb-1">
            <p class="mr-1 text-sm font-medium text-slate-700">{score}</p>
            <div class="no-tap-highlight">
                <Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
                    <svelte:fragment slot="empty">
                        <div class="h-5 w-5 text-yellow-400">
                            <IoMdStarOutline/>
                        </div>
                    </svelte:fragment>
                    <svelte:fragment slot="half">
                        <div class="h-5 w-5 text-yellow-400"> 
                            <IoMdStarHalf/> 
                        </div>
                    </svelte:fragment>
                    <svelte:fragment slot="full"> 
                        <div class="h-5 w-5 text-yellow-400"> 
                            <IoMdStar/>
                        </div> 
                    </svelte:fragment>
                </Ratings>
            </div>
            <p class="ml-1 text-sm font-medium text-slate-700">{reviews}</p>
        </div>
        
        <p class="text-2xl font-medium text-slate-900 my-2">{formatPrice(price)}</p>
        <p class="text-slate-900 mb-4 max-h-40 overflow-auto">{descricao}</p>
        <a href="/" class="no-tap-highlight btn variant-filled-primary text-black font-medium py-2 px-4 rounded-full w-full" data-sveltekit-preload-data="hover">Abrir Negociações</a>
        
        <!-- Informacoes do Vendedor -->
        <div class="border rounded-md my-5 p-4">
            <!-- Banner img -->
            <div class="flex items-center justify-center">
                <img 
                    src="{banner}" 
                    alt="{store}" 
                    class="rounded-md w-full max-w-lg h-32 object-cover"
                />
            </div>
            <div class="flex my-2 items-center justify-between">
                <div class="text-slate-900 font-bold">
                    {store}
                </div>
                <div class="text-slate-700 text-xs"><b>{num_vendas}</b> Vendas</div>
            </div>
            <a href="/" class="no-tap-highlight btn bg-blue-100 text-black font-medium py-2 px-4 rounded-full w-full" data-sveltekit-preload-data="hover">Ir para Loja</a>
        </div>

    </div>
</div>
