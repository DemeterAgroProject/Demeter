<script lang="ts">
    import { goto } from '$app/navigation';

    const login = () => {
        goto('/login');
    }
    
</script>

<div class="header">
    
    <button class="btn variant-filled-primary" on:click={login}>Login</button>
</div>

<style>
    .header {
        display: flex;
        justify-content: flex-end;
        padding: 10px;
    }

</style>