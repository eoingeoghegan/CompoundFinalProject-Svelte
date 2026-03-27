<!--Dahsboard View  which imports the subTitle rune, and displays the predefined workout cards
The menu navbar renders here also as saved in layout when successfully logged in.--> 
<script lang="ts">
  import { onMount } from "svelte";
  import { loggedInUser, subTitle } from "$lib/runes.svelte";
  subTitle.text = "Exercises";



  import {compoundService} from "$lib/services/compound-service";

  import ExerciseList from "$lib/ui/ExerciseList.svelte";
   
   import type { Exercise } from "$lib/types/compound-types";

   

  let exercises: Exercise[] = [];
  

  

  onMount(async () => {
  if (!loggedInUser?._id) return;

  exercises = await compoundService.getExercises(loggedInUser._id);
  console.log("Exercises are: ", exercises);
  });

  
</script>


<section>
  <ExerciseList {exercises} />
</section>
