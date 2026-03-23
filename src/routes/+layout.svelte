<script lang="ts">
  import { loggedInUser } from "$lib/runes.svelte";
  import Header from "$lib/ui/Header.svelte";
  import Menu from "$lib/ui/Menu.svelte";
</script>

<div class="container">
  {#if loggedInUser.email}
    <Menu />
    <Header />
  {/if}
  <slot />
</div>