<script lang="ts">
    import IoIosPricetag from 'svelte-icons/io/IoIosPricetag.svelte';
    import IoIosSpeedometer from 'svelte-icons/io/IoIosSpeedometer.svelte';
    import IoIosCalendar from 'svelte-icons/io/IoIosCalendar.svelte';
    import MdLocalGasStation from 'svelte-icons/md/MdLocalGasStation.svelte';
    import GiSteeringWheel from 'svelte-icons/gi/GiSteeringWheel.svelte';
</script>

<div class="mt-4">
    <h2 class="text-md font-semibold text-slate-900 text-center m-5">Características Principais</h2>
    <div class="md:flex">
        <ul class="list-none list-inside space-y-2 md:grid md:grid-cols-2 md:gap-x-28 lg:gap-x-48 xl:gap-x-40 md:gap-y-4 md:mx-auto md:justify-between">
            <li class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                    <div class="h-6 w-6">
                        <IoIosPricetag/>
                    </div>
                </span>
                Marca: <span class="font-semibold">New Holland</span>
            </li>
            <li class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                    <div class="h-6 w-6">
                        <IoIosSpeedometer/>
                    </div>
                </span>
                Potência: <span class="font-semibold">150 HP</span>
            </li>
            <li class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                    <div class="h-6 w-6">
                        <MdLocalGasStation/>
                    </div>
                </span>
                Tipo de Combustível: <span class="font-semibold">Diesel</span>
            </li>
            <li class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                    <div class="h-6 w-6">
                        <IoIosCalendar/>
                    </div>
                </span>
                Ano de Fabricação: <span class="font-semibold">2021</span>
            </li>
            <li class="flex items-center space-x-2">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2">
                    <div class="h-6 w-6">
                        <GiSteeringWheel/>
                    </div>
                </span>
                Direção: <span class="font-semibold">Hidráulica</span>
            </li>
        </ul>    
    </div>

    <h2 class="text-md font-semibold text-slate-900 text-center m-5">Características Completas</h2>
    <div class="hidden md:flex table-container mt-6 space-x-6 overflow-x-auto">
        <!-- Tabela de Informações do Anúncio -->
        <table class="table-auto w-1/2 border border-gray-200 rounded-md">
            <thead class="bg-gray-200">
                <tr>
                    <th colspan="2" class="px-4 py-2 text-center font-semibold">Informações do Anúncio</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Tipo de Operação</td>
                    <td class="px-4 py-2">Aluguel</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">País</td>
                    <td class="px-4 py-2">Brasil</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Estado</td>
                    <td class="px-4 py-2">São Paulo</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Cidade</td>
                    <td class="px-4 py-2">São Paulo</td>
                </tr>
            </tbody>
        </table>
    
        <!-- Tabela de Informações da Máquina -->
        <table class="table-auto w-1/2 border border-gray-200 rounded-md">
            <thead class="bg-gray-200">
                <tr>
                    <th colspan="2" class="px-4 py-2 text-center font-semibold">Informações da Máquina</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Modelo</td>
                    <td class="px-4 py-2">RF690</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Marca</td>
                    <td class="px-4 py-2">New Holland</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Ano de Fabricação</td>
                    <td class="px-4 py-2">2021</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Potência</td>
                    <td class="px-4 py-2">150 HP</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Tipo de Combustível</td>
                    <td class="px-4 py-2">Diesel</td>
                </tr>
                <tr class="bg-white even:bg-gray-200">
                    <td class="px-4 py-2 font-semibold">Direção</td>
                    <td class="px-4 py-2">Hidráulica</td>
                </tr>
            </tbody>
        </table>
    </div>    
</div>

