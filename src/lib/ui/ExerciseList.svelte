<script lang="ts">
  
// works if comment out, save then uncomment while logged into the app.
let { exercises = [], } = $props();

    
</script>
<section>
  <div class="box">
    <table class="table is-fullwidth is-striped is-hoverable">
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Equipment</th>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
      </thead>

      <tbody>
        {#each exercises as exercise (exercise._id)}
          <tr>
            <td>{exercise.title}</td>
            <td>{exercise.equipment}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.sets}</td>
            <td>{exercise.reps}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>