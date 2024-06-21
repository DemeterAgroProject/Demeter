<script lang="ts">
    import Informacoes from '$lib/produtos/Informacoes.svelte';
    import Relacionados from '$lib/produtos/Relacionados.svelte';

</script>

<div class="img-info">
    <img 
    src="https://images.caminhoesecarretas.com.br/cliente_020650/veiculos/1173069_whatsapp%20image%202024-04-05%20at%2018.12.53_big.jpeg" 
    alt="Semeadora" width="62%"
    class="rounded-lg"
    />
    <Informacoes id_do_produto="666b51012f6ca1ab99cff096" />
</div>
<Relacionados />


<style>
    .img-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem;
    }
</style>