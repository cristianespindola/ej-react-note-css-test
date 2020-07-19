import React from 'react';
import note from '../notes.json'
import Nota from '../component/Nota.js'
import Modal from '../component/Modal.js'
import '../App.css'
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          notes: note,
          showModal: false,
          selectedNote: null,
        };
    }

    addNota = (notaAct) => {
        let newNotes;

        if(note.id) {
            newNotes = this.state.notes.map(n => {
            if (n.id === notaAct.id) {
                return { ...notaAct }
            }
            return n;
            });
        } else {
            newNotes = [{ ...notaAct, id: this.state.notes.length + 1 }, ...this.state.notes];
        }
         this.setState({ notes: newNotes, selectedNote: null });

    }

    closeModal = () => {
        this.setState({ showModal: false });    
    }

    editNota = (noteAct) => {
        this.setState({
            selectedNote: noteAct,
            showModal: true,
        })
    }

    removeNota = (id) => {
        const newNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes: newNotes });
    }

    openModal = () => {
        this.setState({ showModal: true });
    }
    
    render() {
        const { notes, showModal, selectedNote } = this.state; 
        return (
          <>
            <div className="container">
              {notes.map(note => (
                  <Nota key={note.id} nota={note} editNote={() =>this.editNota(note)} removeNote={this.removeNota}/>
              ))}
            </div>

            <div className="btn-add-note">
                <img src="./add.svg" alt="add new note" className="icon--add" onClick={this.openModal} />
            </div>
            {showModal && <Modal closeModal={this.closeModal} addNote={this.addNote} selectedNote={selectedNote} />}
          </>
        );
    }
    
}

export default Home;