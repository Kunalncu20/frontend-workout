import {React,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import useWorkoutContext from '../Hooks/useWorkoutContext';
import { useNavigate } from 'react-router-dom';


const UpdateForm = (props) => {
    const navigate = useNavigate();
    const {Record}=props;
    const [show, setShow] = useState(true);
    const {dispatch} = useWorkoutContext()

    const [title,setTitle]=useState(Record.title)
    const [reps,setReps]=useState(Record.reps)
    const [load,setLoad]=useState(Record.load)

    
    
    const handleClose = async() => {
        // console.log("Hello");
        // e.preventDefault()
        
        const updatedWorkout ={title,reps,load}
        
        const response = await fetch('/api/workouts/' + Record._id,{
            method:'PATCH',
            body: JSON.stringify(updatedWorkout),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        console.log(result)
        if(response.ok){
            dispatch({type:'UPDATE_WORKOUT',payload:result})
        }
        setShow(false)
        navigate('/');
    }
    // const handleSubmit= async (e)=>{

    // }
    return (
        <>
            <Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicReps">
                        <Form.Label>Reps</Form.Label>
                        <Form.Control onChange={(e) => setReps(e.target.value)} value={reps} type="number" placeholder="Enter Reps" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLoad">
                        <Form.Label>Load (in Kg)</Form.Label>
                        <Form.Control onChange={(e) => setLoad(e.target.value)} value={load} type="number" placeholder="Enter Load" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="secondary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
                    </Form>
        </>
    );
}

export default UpdateForm