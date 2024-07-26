<script lang="ts">
    import SmallCard from '$lib/SmallCard.svelte';
    
    import TiArrowLeft from 'svelte-icons/ti/TiArrowLeft.svelte';
    import TiArrowRight from 'svelte-icons/ti/TiArrowRight.svelte';

    let elements: HTMLDivElement;

    function multiColumnLeft(): void {
        let x = elements.scrollWidth;
        if (elements.scrollLeft !== 0) x = elements.scrollLeft - elements.clientWidth;
        elements.scroll(x, 0);
    }

    function multiColumnRight(): void {
        let x = 0;
        // -1 é usado porque diferentes navegadores usam métodos diferentes para arredondar pixels de scrollWidth.
        if (elements.scrollLeft < elements.scrollWidth - elements.clientWidth - 1) x = elements.scrollLeft + elements.clientWidth;
        elements.scroll(x, 0);
    }
</script>

<h2 class="text-md font-semibold text-slate-900 text-center m-5">Produtos Relacionados</h2>
<div class="grid grid-cols-[auto_1fr_auto] gap-4 gap-x-2 items-center">
    <!-- Botão: Esquerda -->
    <button type="button" class="btn-icon variant-filled-primary hidden md:block btn-left" on:click={multiColumnLeft}>
        <TiArrowLeft />
    </button>
    <!-- Carrossel -->
    <div bind:this={elements} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto md:overflow-hidden">
        <SmallCard
            title="SemeadoraSemeador"
            brand="New Holland"
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png"
            price="R$ 100.000,00"
        />
        <SmallCard
            title="SemeadoraSemeador"
            brand="New Holland"
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png"
            price="R$ 100.000,00"
        />
        <SmallCard
            title="SemeadoraSemeador"
            brand="New Holland"
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png"
            price="R$ 100.000,00"
        />
        <SmallCard
            title="SemeadoraSemeador"
            brand="New Holland"
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png"
            price="R$ 100.000,00"
        />
        <SmallCard
            title="SemeadoraSemeador"
            brand="New Holland"
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png"
            price="R$ 100.000,00"
        />
        <SmallCard
            title="SemeadoraSemeador"
            brand="New Holland"
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png"
            price="R$ 100.000,00"
        />
    </div>
    <!-- Botão: Direita -->
    <button type="button" class="btn-icon variant-filled-primary hidden md:block btn-right" on:click={multiColumnRight}>
        <TiArrowRight/>
    </button>
</div>

<style>
    .btn-left, .btn-right {
        width: 30px; /* Ajuste o tamanho conforme necessário */
        height: 30px; /* Ajuste o tamanho conforme necessário */
        padding: 0; /* Remova o padding */
        margin: 0; /* Remova a margem */
    }
    
    .btn-left {
        margin-right: 8px; /* Ajuste a margem para aproximar do carrossel */
    }
    
    .btn-right {
        margin-left: 8px; /* Ajuste a margem para aproximar do carrossel */
    }


    @media (min-width: 768px) {
        .md\:overflow-hidden::-webkit-scrollbar {
            display: none;
        }
        .md\:overflow-hidden {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    }
</style>
