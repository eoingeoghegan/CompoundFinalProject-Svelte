<script lang="ts">
/**
 * shows an error message in browser
 */
  let { message } = $props();
</script>

<article class="message is-danger">
  <div class="message-body">
    {message}
  </div>
</article>
