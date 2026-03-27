<script lang="ts">
  import { goto } from "$app/navigation";
  import { loggedInUser } from "$lib/runes.svelte";

  loggedInUser.email = "";
  loggedInUser.name = "";
  loggedInUser._id = "";
  localStorage.removeItem("compound");
  goto("/");
</script>