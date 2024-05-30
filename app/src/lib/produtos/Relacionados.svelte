<script lang="ts">
    import SmallCard from '$lib/SmallCard.svelte';

</script>


<div class="produtos-relacionados">
    <h1 class="text-2xl font-bold text-slate-900 text-center m-5">Produtos Relacionados</h1>
    <div class="cards-relacionados">
        <SmallCard 
            title="SemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadoraSemeadora" 
            brand="New Holland" 
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png" 
            price="R$ 100.000,00"
        />
        <SmallCard 
            title="Semeadora" 
            brand="New Holland" 
            image="https://semeato.com.br/upload/produtos_6_111_1533821794.png" 
            price="R$ 100.000,00"
        />
        <SmallCard 
            title="Colheitadeira" 
            brand="New Holland" 
            image="https://images.caminhoesecarretas.com.br/cliente_020650/veiculos/1173069_whatsapp%20image%202024-04-05%20at%2018.12.53_big.jpeg"
            price="R$ 50.000,00"
        />
        <SmallCard 
            title="Trator" 
            brand="John Deere" 
            image="https://www.deere.com.br/assets/images/region-3/products/tractors/large/8r-series/8400r/8400r_campo_large_7b13780a09551c33c057712d2c40f25f24c91db8.png"
            price="R$ 150.000,00"
        />
    </div>
</div>

<style>
    .produtos-relacionados {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        box-shadow: 0 0 5px #d4d4d4;
        margin: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 1rem;
    }
    .cards-relacionados {
        display: flex;
        justify-content: center;  
    }
</style>
