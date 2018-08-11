import React, { Component } from 'react'; // al agregar { y el nombre } nos permite exportar mas preciso lo que necesitamos y ahorrar código 
import PropTypes from 'prop-types';
import './media.css';


class Media extends Component {

    //Esta es la forma de ES6
   /* constructor(props){
        super(props)
        this.state = {
            author: props.author
        }
    
    }*/
    //Forma en ES7

    state = {
        author: 'Ricardo Celis'
    }

    handleClick = (event) => {
        //console.log(this.props.title)
        this.setState({
            author: 'RICARDO CELIS'
        })
    }
    render() {
       
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={ this.props.image }
                        alt=""
                        width={260}
                        height={160}
                        />
                        <h3 className="Media-title">{ this.props.title }</h3>
                        <p className="Media-author">{ this.state.author } </p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
}

//forma de exportarlo para usarlo en otras secciones
export default Media;