<script lang="ts">
  import SignupForm from "./SignupForm.svelte";
  import Navbar from "$lib/ui/Navbar.svelte";
</script>

<Navbar />
<section class="hero is-fullheight is-default is-bold has-background-black">
  <div class="hero-head"></div>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-4 is-offset-4">
          <h1 class="title has-text-centered">Signup to Compound</h1>
          <SignupForm />
        </div>
      </div>
    </div>
  </div>
</section>
