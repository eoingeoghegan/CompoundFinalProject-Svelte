<script lang="ts">
  
// works if comment out, save then uncomment while logged into the app.
let { workouts = [], } = $props(); 
    
</script>
<section>
  <div class="columns is-multiline is-variable is-4">
    {#each workouts as workout (workout._id)}
      <div class="column is-3">
        <div class="box has-text-centered">
          <h2 class="title is-5 mb-4">
            {workout.title}
          </h2>

          <div class="buttons">
            <a class="button is-primary" href="/workouts/{workout._id}">Open</a>
            <a class="button is-link" href="/workouts/{workout._id}/edit">Edit</a>
            <a class="button is-danger" href="/workouts/{workout._id}/delete">Delete</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
