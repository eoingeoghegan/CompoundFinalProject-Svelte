<!-- Login view, showing navabr and login form-->


<script lang="ts">
  import LoginForm from "./LoginForm.svelte";
  import Navbar from "$lib/ui/Navbar.svelte";
</script>

<Navbar />
<section class="hero is-fullheight has-background-black">
  <div class="hero-body">
    <div class="container">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-light has-text-centered">Login</h3>
        <LoginForm />
      </div>
    </div>
  </div>
</section>
