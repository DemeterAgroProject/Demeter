<script lang='ts'>
    export let title = 'Title';
    export let brand = 'Brand';
    export let image = '';
    export let price:number = 100;


    // Função para formatar o preço com os centavos
    function formatPrice(value: number): string {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }    
</script>

<a href="/produtos" class="no-tap-highlight">
    <div class="custom-shadow hover-up m-2 flex w-56 max-h-80 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <div class="relative mx-4 mt-3 flex h-60 overflow-hidden rounded-lg">
            <img class="object-contain w-full h-full rounded-lg" src="{image}" alt="{brand}" />
        </div>
        <div class="mt-4 px-5 pb-5">
            <div class="title_card">
                <h5 class="text-xl tracking-tight text-slate-900">{title}</h5>
            </div>
            <div class="mt-2 mb-2 flex items-center justify-between">
                <span class="text-md font-semibold text-slate-900">{formatPrice(price)}</span>
                <div class="flex items-center">
                    <span class="rounded variant-filled-primary px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
            </div>
        </div>
    </div>
</a>

<style>
    .hover-up {
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .hover-up:hover {
        transform: scale(1.01);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .title_card {
        height: 4rem;
        overflow: hidden;
        word-break: break-all;
    }

    .custom-shadow {
        box-shadow: 0 0 3px #eaeaea;
    }

</style>
