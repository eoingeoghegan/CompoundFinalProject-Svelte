// Runes can be used anywhere in the app

export const subTitle = $state({ text: "" });
export const loggedInUser = $state({ 
    email: "",
    name: "",
    _id: ""
 });

 export const currentWorkouts = $state({ workouts: [] as Workout[] });