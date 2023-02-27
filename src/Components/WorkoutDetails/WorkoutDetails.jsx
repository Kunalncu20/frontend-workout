import {React} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import useWorkoutContext from '../Hooks/useWorkoutContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './WorkoutDetails.css'
import { useNavigate } from 'react-router-dom';






const WorkoutDetails = (props) => {
    const navigate = useNavigate();
    const {workout,setRecord} =props;
    const {dispatch} = useWorkoutContext()
    const handleClick = async()=>{
       const response = await fetch('/api/workouts/' + workout._id,{
        method:'DELETE'
       })
       const result = await response.json();

       if(response.ok){
        dispatch({type:'DELETE_WORKOUT',payload:result})
       }
    }
    const showUpdateForm=()=>{
      setRecord(workout);
      navigate('/updateForm');
    }
   
  return (
    <>
    {/* <div>
      <UpdateForm/>
    </div> */}
    <div className='card'>
    <Card style={{ width: '18rem' }}>
    <Card.Header className='heading'><strong>{workout.title}</strong></Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item><strong >Reps:</strong>{workout.reps}</ListGroup.Item>
      <ListGroup.Item><strong>Load:</strong>{workout.load}</ListGroup.Item>
      <ListGroup.Item><strong>Created:</strong>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</ListGroup.Item>
    </ListGroup>
    <div className="btns">
   <span className='del'><Button onClick={handleClick} variant="primary">Delete</Button></span>
   <span className='del'><Button onClick={showUpdateForm} variant="warning">Update</Button></span>
    </div>
  </Card>
    </div>
    </>
  )
}

export default WorkoutDetails