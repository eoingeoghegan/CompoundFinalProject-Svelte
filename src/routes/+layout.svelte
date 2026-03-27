<script lang="ts">
  import { browser } from "$app/environment";
  import { loggedInUser } from "$lib/runes.svelte";
  import Header from "$lib/ui/Header.svelte";
  import Menu from "$lib/ui/Menu.svelte";

  if (browser) {
    const savedLoggedInUser = localStorage.donation;
    if (savedLoggedInUser) {
      const session = JSON.parse(savedLoggedInUser);
      loggedInUser.email = session.email;
      loggedInUser.name = session.name;
      loggedInUser._id = session._id;
    }
  }
</script>


<div class="container">
  {#if loggedInUser.email}
    <Menu />
    <Header />
  {/if}
  <slot />
</div>