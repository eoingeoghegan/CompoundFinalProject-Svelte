export interface Session {
  name: string;
  _id: string;
  
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export type Workout = {
  _id: string;
  title: string;
  userid: string;
  __v?: number;
}

export type Exercise = {
  _id: string;
  title: string;
  equipment: string;
  weight?: number | "";
  sets?: number | "";
  reps?: number | "";
  workoutid: string;
  __v?: number;
}

