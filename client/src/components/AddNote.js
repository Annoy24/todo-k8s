import React,{useContext,useState} from 'react'
import noteContext from '../context/noteContext'

const AddNote = (props) => {
    const context = useContext(noteContext)
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})
    
    const handleClick =(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Note Successfully","success")
    }
    const onchange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div className='container my-3'>
                <h2>Add Notes</h2>
                <form className='container my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' value={note.title} minLength={5} required onChange={onchange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={note.description} name='description' minLength={5} required onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" value={note.tag} name='tag' onChange={onchange} />
                    </div>
                    <button type="submit" disabled={(note.title.length<5 || note.description.length<5)} className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddNote