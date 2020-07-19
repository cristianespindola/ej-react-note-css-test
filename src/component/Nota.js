import React from 'react'; 

class Nota extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nota: props.nota,
        };
      }
    
    editNota = () => {
        this.props.editNote()
    }

    removeNota = () => {
        this.props.removeNote(this.state.nota.id)
    }

    render() {
        return (
            <div className={`notas notas--${this.state.nota.color}`}>
                <div className="accion">
                    <img src="./edit.svg" alt="edit" className="icono" onClick={this.editNota}/>
                    <img src="./delete.svg" alt="edit" className="icono" onClick={this.removeNota}/>
                </div>
                <p className="text">{this.state.nota.text}</p>
            </div>
        )
      }
}

export default Nota;