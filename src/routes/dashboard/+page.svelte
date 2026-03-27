<!--Dahsboard View  which imports the subTitle rune, and displays the predefined workout cards
The menu navbar renders here also as saved in layout when successfully logged in.--> 
<script lang="ts">
  import { onMount } from "svelte";
  import { loggedInUser, subTitle } from "$lib/runes.svelte";
  subTitle.text = "Dashboard";

  import PredfinedCards from "$lib/ui/PredfinedCards.svelte";

  import WorkoutForm from "./WorkoutForm.svelte";

  import WorkoutList from "$lib/ui/WorkoutList.svelte";

  import {compoundService} from "$lib/services/compound-service";

   
   import type { Workout } from "$lib/types/compound-types";

   

  let workouts: Workout[] = [];
  $inspect("Logged in yet ? : ", loggedInUser);

  

  onMount(async () => {
  if (!loggedInUser?._id) return;

  workouts = await compoundService.getWorkouts(loggedInUser._id);
  console.log("Workouts are: ", workouts);
  });

  
</script>


<PredfinedCards />

<section>
  <p>Create your own Workouts</p>
<WorkoutForm  />
</section>


<section>
  <WorkoutList {workouts} />
</section>
