<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import IoIosHome from "svelte-icons/io/IoIosHome.svelte";
  import FaTractor from "svelte-icons/fa/FaTractor.svelte";
  import IoMdChatbubbles from "svelte-icons/io/IoMdChatbubbles.svelte";
  import IoMdMegaphone from "svelte-icons/io/IoMdMegaphone.svelte";

  onNavigate((navigation) => {
    //@ts-ignore
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      //@ts-ignore
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let mobileMenuOpen = false;
  let userMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function toggleUserMenu() {
    userMenuOpen = !userMenuOpen;
  }

  function closeUserMenu() {
    userMenuOpen = false;
  }
</script>

<header>
  <nav class="variant-filled-primary">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Logo -->
        <div
          class="flex items-center absolute inset-y-0 left-0 pl-2 sm:static sm:inset-auto sm:pl-0"
        >
          <div class="text-black-200 text-lg font-bold">Demeter</div>
        </div>

        <!-- Links de navegação -->
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center"
        >
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <a
                href="/"
                class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black-700 hover:text-white"
                >Home</a
              >
              <a
                href="/produtos"
                class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black-700 hover:text-white"
                >Máquinas</a
              >
              <a
                href="/anunciar"
                class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black-700 hover:text-white"
                >Anunciar</a
              >
              <a
                href="/historico"
                class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black-700 hover:text-white"
                >Histórico</a
              >
              <a
                href="/chat"
                class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-black-700 hover:text-white"
                >Chat</a
              >
            </div>
          </div>
        </div>

        <!-- Ícone de notificações e menu de login -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Ícone de notificações -->
          <button
            type="button"
            class="relative rounded-full bg-black-800 p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black-800"
          >
            <span class="sr-only">Ver notificações</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Menu de login (desktop) -->
          <div class="hidden sm:block relative ml-3">
            <button
              type="button"
              class="relative flex rounded-full bg-black-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black-800"
              id="user-menu-button"
              aria-expanded={userMenuOpen}
              on:click={toggleUserMenu}
            >
              <span class="sr-only">Abrir user menu</span>
              <img
                class="h-8 w-8 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User"
              />
            </button>

            <div
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              class:hidden={!userMenuOpen}
              id="user-menu"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-black-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0">Meu Perfil</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-black-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1">Configurações</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-black-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2">Sair</a
              >
            </div>
          </div>

          <!-- Botão do menu mobile -->
          <div class="flex sm:hidden">
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-black-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              on:click={toggleMobileMenu}
            >
              <span class="sr-only">Abrir menu</span>
              {#if !mobileMenuOpen}
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              {:else}
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              {/if}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div class={mobileMenuOpen ? "block" : "hidden"} id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Ícone de usuário (mobile) -->
        <div class="flex items-center rounded-md px-3 py-2 justify-center">
          <button
            type="button"
            class="relative flex rounded-full bg-black-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black-800"
            id="user-menu-button"
            aria-expanded={userMenuOpen}
            on:click={toggleUserMenu}
          >
            <span class="sr-only">Abrir user menu</span>
            <img
              class="h-8 w-8 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="User"
            />
          </button>

          <div
            class="absolute right-0 z-10 mt-2 w-48 origin-bottom-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
            class:hidden={!userMenuOpen}
            id="user-menu"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-black-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0">Meu Perfil</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-black-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-1">Configurações</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-black-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2">Sair</a
            >
          </div>
        </div>
        <!-- Links de navegação (mobile) -->
        <a
          href="/"
          class="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-black-700 hover:text-white flex items-center"
        >
          <span
            class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2"
          >
            <div class="h-6 w-6 flex items-center justify-center">
              <IoIosHome />
            </div>
          </span>
          Home
        </a>
        <a
          href="/produtos"
          class="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-black-700 hover:text-white flex items-center"
        >
          <span
            class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2"
          >
            <div class="h-6 w-6 flex items-center justify-center">
              <FaTractor />
            </div>
          </span>
          Máquinas
        </a>
        <a
          href="/anunciar"
          class="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-black-700 hover:text-white flex items-center"
        >
          <span
            class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2"
          >
            <div class="h-6 w-6 flex items-center justify-center">
              <IoMdMegaphone />
            </div>
          </span>
          Anunciar
        </a>
        <a
          href="/historico"
          class="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-black-700 hover:text-white flex items-center"
        >
          Histórico
        </a>
        <a
          href="/chat"
          class="block rounded-md px-3 py-2 text-base font-medium text-black-300 hover:bg-black-700 hover:text-white flex items-center"
        >
          <span
            class="inline-flex items-center justify-center h-8 w-8 rounded-full variant-filled-primary mr-2"
          >
            <div class="h-6 w-6 flex items-center justify-center">
              <IoMdChatbubbles />
            </div>
          </span>
          Chat
        </a>
      </div>
    </div>
  </nav>
</header>

<style>
</style>
