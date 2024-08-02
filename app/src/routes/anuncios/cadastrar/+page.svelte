<script>
  import Header from '$lib/Header.svelte';
  import IoMdSend from 'svelte-icons/io/IoMdSend.svelte'
  import { onMount } from 'svelte';

  // Função para buscar os dados do produto (unico) na API
  async function fetchMaquinas() {
      try {
          const response = await fetch(`http://localhost:3000/api/maquinas/listar/`);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Erro ao buscar os dados do produto:', error);
          return null;
      }
  }
  /**
     * @type {any[]}
     */
  let maquinasExibicao = [];
  let selectedMachine = '';

  // Carregar os dados do produto quando o componente for montado
  onMount(async () => {
      const maquinas = await fetchMaquinas();

      for(let i=0; i<maquinas.length; i++){
        const response = await fetch(`http://localhost:3000/api/marcas/get/`+maquinas[i].marca);
        const marcaJson = await response.json();

        const selectJson = {
          maquina: maquinas[i]._id,
          exibicao: marcaJson.nome+" - "+maquinas[i].modelo
        }

        maquinasExibicao.push(selectJson);
      }

      console.log(maquinasExibicao);
  });
</script>


<Header />
<div class="general p-6 ">
  <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
    <div class="mb-4">
      <label class="label">
        <span>Título do Anúncio</span>
        <input class="input" type="text" placeholder="Input" />
      </label>
    </div>

    <div class="mb-4">
      <select class="select" bind:value={selectedMachine}>
        {#each maquinasExibicao as maquinaExibida}
          <option value={maquinaExibida.maquina}>{maquinaExibida.exibicao}</option>
        {/each}
      </select>
    </div>
    
    
    <div class="mb-4">
      <label class="label">
        <span>Preço</span>
        <input class="input" type="number" placeholder="Input" />
      </label>
    </div>
    
    <div class="mt-4">
      <button type="button" class="btn variant-filled">
        <span>Enviar</span>
        <span class="w-5 h-5"><IoMdSend/></span>
      </button>
    </div>
  </div>
</div>

<style>

</style>
