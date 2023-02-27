import { React, useEffect } from 'react'
import WorkoutForm from '../../WorkoutForm/WorkoutForm';
import WorkoutDetails from '../WorkoutDetails/WorkoutDetails';
import useWorkoutContext from '../Hooks/useWorkoutContext';
import './Home.css'


const Home = ({Record,setRecord}) => {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => { 
      const response = await fetch('/api/workouts/')
      const result = await response.json();
       console.log(result);
      if (response.ok) {
        dispatch({ type: "SET_WORKOUT", payload: result })
      }
      console.log(workouts);
    }

    fetchWorkouts()
  }, [])
  return (
    <div className='Home'>
        <WorkoutForm Record={Record} setRecord={setRecord}/>
      <div className="workout">
        {workouts && workouts.map((item) => (
          <WorkoutDetails key={item._id} workout={item} setRecord={setRecord}/>
        ))}
      </div>
    </div>

  )
}

export default Home;