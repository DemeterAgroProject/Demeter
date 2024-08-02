<script>
  import Header from '$lib/Header.svelte';
  import SmallCard from '$lib/SmallCard.svelte';
  import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte'
</script>


<Header />
<div class="general p-6 ">
  <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mb-5">
    <a href="/anuncios/cadastrar" class="no-tap-highlight btn variant-filled-primary text-black font-medium py-2 px-4 rounded-full w-full mb-5" data-sveltekit-preload-data="hover">
      Cadastrar Anúncio 
      <span class="h-8 w-8">
        <IoIosAdd/>
      </span>
    </a>
    <h1 class="text-md font-semibold text-slate-900 text-center m-2 mb-4">Meus Anúncios</h1>
    <div class="">
      <SmallCard
        title="SemeadoraSemeador"
        brand="New Holland"
        image="https://semeato.com.br/upload/produtos_6_111_1533821794.png"
        price="R$ 100.000,00"
      />
    </div>
  </div>
  
  <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
  </div>
</div>

<style>

</style>
