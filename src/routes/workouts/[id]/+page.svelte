<script lang="ts">
  import { onMount } from "svelte";
  import { compoundService } from "$lib/services/compound-service";
  import ExerciseList from "$lib/ui/ExerciseList.svelte";
  import type { Exercise } from "$lib/types/compound-types";
  import {subTitle} from "$lib/runes.svelte";
  subTitle.text ="Exercises"

  let exercises: Exercise[] = [];

  onMount(async () => {
    exercises = await compoundService.getExercises("69c68daf4b5cdbb791beebee");
    console.log("Exercises are: ", exercises);
  });
</script>

<section>
  <ExerciseList {exercises} />
</section>