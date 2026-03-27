<script lang="ts">



 let title = $state("");

   async function addWorkout() {
    console.log(`Just added: ${title}`);
   
  }
</script>

<section>
    <div class="field">
    <label class="label" for="title">Enter title:</label>
    <input bind:value={title} class="input" id="title" name="title" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <button onclick={() => addWorkout()} class="button">Submit</button>
    </div>
  </div>
</section> 