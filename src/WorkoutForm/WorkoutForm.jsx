import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useWorkoutContext from '../Components/Hooks/useWorkoutContext';
import './WorkoutForm.css'

const WorkoutForm = ({workoutRecord,setWorkoutRecord}) => {
    const {dispatch} =useWorkoutContext();
    const [title,setTitle]=useState('')
    const [reps,setReps]=useState('')
    const [load,setLoad]=useState('')
    const [error,setError]=useState(null)

    const handleSubmit= async (e)=>{
        e.preventDefault()

        const workout ={title,reps,load}

        const response = await fetch('/api/workouts/',{
            method:'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json()

        if(!response.ok){
            setError(result.error)
            alert('All fields are required')
        }
        if(response.ok){
            setTitle('')
            setReps('')
            setLoad('')
            setError(null)
            dispatch({type:"CREATE_WORKOUT",payload:result})
            console.log("new data added")
        }

    }
  return (
    <div className='form'>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control onChange={(e)=> setTitle(e.target.value)} value ={title} type="text" placeholder="Enter title" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Reps</Form.Label>
      <Form.Control onChange={(e)=> setReps(e.target.value)} value ={reps} type="number" placeholder="Enter Reps" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Load (in Kg)</Form.Label>
      <Form.Control onChange={(e)=> setLoad(e.target.value)} value ={load} type="number" placeholder="Enter Load" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default WorkoutForm