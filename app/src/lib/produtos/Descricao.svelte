<script lang="ts">
    import { onMount } from 'svelte';
    import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
    import IoIosArrowUp from 'svelte-icons/io/IoIosArrowUp.svelte'
  
    let showMore = false;
  
    function toggleText() {
      showMore = !showMore;
    }
  </script>
  
  <div>
      <h2 class="text-md font-semibold text-slate-900 text-center my-5 break-words">Descrição</h2>
      <div class="text-slate-700 text-lg">
          <p class="mb-3 break-words">
              Está em busca de uma Colheitadeira New Holland CR 9060 2009 Usada?
              As Colheitadeiras da New Holland oferecem uma solução adequada para as suas necessidades.
          </p>
          <p class="mb-3 break-words">
              A Colheitadeira New Holland CR 9060 2009 Usada é um equipamento de alta qualidade, que oferece um excelente desempenho e durabilidade.
              Além disso, a Colheitadeira New Holland CR 9060 2009 Usada é uma máquina versátil, que pode ser utilizada em diferentes tipos de culturas.
          </p>
          {#if showMore}
              <p class="mb-3 break-words">
                  Está em busca de uma Colheitadeira New Holland CR 9060 2009 Usada?
                  As Colheitadeiras da New Holland oferecem uma solução adequada para as suas necessidades.
              </p>
              <p class="mb-3 break-words">
                  A Colheitadeira New Holland CR 9060 2009 Usada é um equipamento de alta qualidade, que oferece um excelente desempenho e durabilidade.
                  Além disso, a Colheitadeira New Holland CR 9060 2009 Usada é uma máquina versátil, que pode ser utilizada em diferentes tipos de culturas.
              </p>
          {/if}
      </div>
      
      <button on:click={toggleText} class="text-blue-500 mt-3 flex items-center  no-tap-highlight">
            {#if showMore}
                <span class="mr-1">Ver menos</span>
                <div class="w-4 h-4 mt-1">
                    <IoIosArrowUp/>
                </div>
            {:else}
                <span class="mr-1">Ver mais</span>
                <div class="w-4 h-4 mt-1">
                    <IoIosArrowDown/>
                </div>
            {/if}
      </button>
  </div>
  
  