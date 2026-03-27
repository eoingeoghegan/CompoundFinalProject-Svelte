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

  import {compoundService} from "$lib/services/compound-service"; 

  let email = $state("");
  let password = $state("");
  let message = $state("");

  async function login() {
    
    let session = await compoundService.login(email, password);
    console.log("Session received:", session);
    if (session) {
      loggedInUser.email = email;
      loggedInUser.name = session.name;
      loggedInUser._id = session._id;
      localStorage.compound = JSON.stringify(loggedInUser);
      console.log(`Session: ${JSON.stringify(session)}`);
      goto("/dashboard");
    } else {
      email = "";
      password = "";
      message = "Invalid Credentials";
    }
  }
</script>

{#if message}
  <Message {message} />
{/if}
<form on:submit|preventDefault={login}>
  <UserCredentials bind:email bind:password />
  <button class="button is-success is-fullwidth">Log In</button>
</form>


 
      
     
   
  