<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Descricao from "$lib/produtos/Descricao.svelte";
  import Informacoes from "$lib/produtos/Informacoes.svelte";
  import Relacionados from "$lib/produtos/Relacionados.svelte";
</script>

<Header />
<div class="general p-6 ">
  <div class="general-body grid gap-4 grid-cols-1 lg:grid-cols-3">
    <div
      class="img-info col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center lg:items-start lg:gap-4"
    >
      <Informacoes id_do_produto="667ee469b77fad0b73dc2462" />
    </div>

    <div class="col-span-1 mt-4 lg:mt-0">
      <Relacionados />
    </div>
  </div>
</div>

<style>

</style>
