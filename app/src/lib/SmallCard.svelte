<script>
    export let title = 'Title';
    export let brand = 'Brand';
    export let image = '';
    export let price = '';
</script>

<a href="/produtos">
    <div class="custom-shadow hover-up relative m-2 flex w-full max-w-56 max-h-80 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <div class="relative mx-4 mt-3 flex h-60 overflow-hidden rounded-lg">
            <img class="object-contain w-full h-full rounded-lg" src="{image}" alt="{brand}" />
        </div>
        <div class="mt-4 px-5 pb-5">
            <div class="title_card">
                <h5 class="text-xl tracking-tight text-slate-900">{title}</h5>
            </div>
            <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span class="text-base font-semibold text-slate-900">{price}</span>
                </p>
                <div class="flex items-center">
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="mr-2 ml-3 rounded variant-filled-primary px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
            </div>
        </div>
    </div>
</a>

<style>
    .hover-up {
        transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
    }

    .hover-up:hover {
        transform: scale(1.01);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .title_card {
        height: 3.9rem;
        overflow: hidden;
        word-break: break-all;
    }

    .custom-shadow {
        box-shadow: 0 0 3px #eaeaea;
    }

</style>
