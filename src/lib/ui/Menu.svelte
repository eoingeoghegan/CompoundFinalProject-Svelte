<script lang="ts">
/**
 * Menu is saved in layout, when user successfulyy logs in they are presented with a nav bar with
 * logged in users email in logout button.
*/
  import { loggedInUser } from "$lib/runes.svelte";
</script>

<nav class="navbar is-full-width">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        
        <img src="/compound-logo.png" alt="logo" />
      </a>
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item  button"  href="/dashboard"> Dashboard </a>
        <a class="navbar-item button" href="/tracker"> Tracker </a>
        <a class="navbar-item button" href="/logout"> Logout [{loggedInUser.email}]</a>
      </div>
      <div></div>
    </div>
  </div>
</nav>
