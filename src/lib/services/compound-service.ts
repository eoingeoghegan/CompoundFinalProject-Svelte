import axios from "axios";
import type { Session, User, Workout, Exercise } from "$lib/types/compound-types";
import { loggedInUser, currentWorkouts } from "$lib/runes.svelte";

export const compoundService = {
  //baseUrl: "http://localhost:3000",
  baseUrl: "https://compoundfinalproject.onrender.com",
  /**
   * 
   *
   */
  async signup(user: User): Promise<boolean> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users`, user);
      return response.data.success === true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  /**
   * Sends a POST request to the backend `/api/users/authenticate` endpoint
   * with the email and password. If the login is successful,
   * returns a object with the user's name and ID.
   * Else it returns null.
   *
   */
  async login(email: string, password: string): Promise<Session | null> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
       console.log("server response:", response.data);
        if (response.data) {
          const session: Session = {
            name: response.data.firstName + " " + response.data.lastName,
           _id: response.data._id
         };
      return session;
    }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },


   async getWorkouts(userId: string): Promise<Workout[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/workouts?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getWorkoutById(id: string): Promise<Workout | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/workouts/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

async createWorkout(workout: { title: string; userid: string }): Promise<Workout | null> {
  try {
    const response = await axios.post(`${this.baseUrl}/api/workouts`, workout);
    return response.data;
  } catch (error) {
    console.log("Error creating workout:", error);
    return null;
  }
},

async refreshCompoundInfo() {
    if (loggedInUser._id) {
    currentWorkouts.workouts = await this.getWorkouts(loggedInUser._id);
    
    }
  },


  async getExercises(workoutId: string): Promise<Exercise[]> {
  try {
    const response = await axios.get(`${this.baseUrl}/api/exercises?workoutId=${workoutId}`);
    console.log("EXERCISE DATA FROM SERVICE", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
},
};