import {useContext} from 'react'
import { WorkoutContext } from '../Context/WorkoutContext'

const useWorkoutContext = () => {
 
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error("useWorkoutContext must be used inside WorkoutContextProvider")
    }
    
    return context
    
  
}

export default useWorkoutContext