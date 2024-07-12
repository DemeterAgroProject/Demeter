<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Descricao from "$lib/produtos/Descricao.svelte";
  import Informacoes from "$lib/produtos/Informacoes.svelte";
  import Relacionados from "$lib/produtos/Relacionados.svelte";
</script>

<Header />

<div class="general p-4">
  <div class="general-body grid gap-4 grid-cols-1 lg:grid-cols-3">
    <div
      class="img-info col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center lg:items-start lg:gap-4"
    >
      <img
        src="https://images.caminhoesecarretas.com.br/cliente_020650/veiculos/1173069_whatsapp%20image%202024-04-05%20at%2018.12.53_big.jpeg"
        alt="Semeadora"
        width="60%"
        class="rounded-lg mb-4 lg:mb-0"
      />
      <Informacoes id_do_produto="667eedfe57f7519c60e0e3dc" />
    </div>

    <div class="col-span-1 mt-4 lg:mt-0">
      <Relacionados />
    </div>
    <div class="col-span-1 lg:col-span-3">
      <Descricao />
    </div>
  </div>
</div>

<style>
  .general {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .general-body {
    display: flex;
    flex-direction: column;
    width: 85%;
  }
  .img-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
  }
</style>
