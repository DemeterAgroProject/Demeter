<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Descricao from "$lib/produtos/Descricao.svelte";
  import Informacoes from "$lib/produtos/Informacoes.svelte";
  import Relacionados from "$lib/produtos/Relacionados.svelte";
  import Caracteristicas from "$lib/produtos/Caracteristicas.svelte";
  import SmallCard from "$lib/SmallCard.svelte";
  import RelacionadosVertical from "$lib/produtos/Relacionados_Vertical.svelte";
</script>

<Header />
<div class="m-auto xl:w-4/5 p-5 xl:bg-slate-100 xl:border xl:my-16 xl:rounded-md">
  <div class="general-body grid gap-4 grid-cols-1 xl:grid-cols-3">
    <div class="xl:col-span-3">
      <Informacoes id_do_produto="667ee469b77fad0b73dc2462" />
    </div>

    <div class="xl:col-span-2 xl:px-6">
      <Caracteristicas />
    </div>

    <div class="hidden xl:block xl:col-span-1 xl:col-start-3">
      <RelacionadosVertical />
    </div>

    <div class="xl:col-span-2 xl:px-6">
      <Descricao />
    </div>
    
    <div class="xl:col-span-2 mt-4 xl:mt-0">
      <Relacionados />
    </div>

  </div>
</div>


<style>

</style>
