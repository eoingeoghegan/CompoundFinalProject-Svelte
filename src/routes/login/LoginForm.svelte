<!--
login form for the application.

It imports:
- loggedInUser for currently logged-in user's email.,  Message:display error messages, 
- UserCredentials containing the email and password input fields.

state (email, password, message) store the user's input and any error message.

When the "Log In" button is clicked, the login() function runs.

If login is successful the user's email is saved to loggedInUser and
- the app directs to the dashboard page

If login fails: the input fields are cleared and an error message is displayed.
-->
<script lang="ts">
  import { loggedInUser } from "$lib/runes.svelte";
  import { goto } from "$app/navigation";
  import Message from "$lib/ui/Message.svelte";
  import UserCredentials from "$lib/ui/UserCredentials.svelte";

  let email = $state("");
  let password = $state("");
  let message = $state("");

  async function login() {
    const success = true;
    if (success) {
      loggedInUser.email = email;
      goto("/dashboard");
    } else {
      email = "";
      password = "";
      message = "Invalid Credentials";
    }
  }
</script>

<div class="box">
  {#if message}
    <Message {message} />
  {/if}
  <UserCredentials bind:email bind:password />
  <button onclick={() => login()} class="button is-primary">Log In</button>
</div>
