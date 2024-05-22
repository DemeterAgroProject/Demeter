<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div>
    <img src="https://i.pinimg.com/originals/22/81/36/228136787949a85c103a630c753726aa.gif" alt="">
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: purple;
    }
    div img {
        height: 80%;
        border-radius: 2rem;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }
</style>