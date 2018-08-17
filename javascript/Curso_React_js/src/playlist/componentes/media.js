import React, { PureComponent } from 'react'; // al agregar { y el nombre } nos permite exportar mas preciso lo que necesitamos y ahorrar código 
import PropTypes from 'prop-types';
import './media.css';


class Media extends PureComponent {

    //Esta es la forma de ES6
   /* constructor(props){
        super(props)
        this.state = {
            author: props.author
        }  
    }
    
    handleClick = (event) => {
        //console.log(this.props.title)
        this.setState({
            author: 'RICARDO CELIS'
        })
    }
    */
    //Forma en ES7

    state = {
        author: 'MIGUEL COBAS'
    }

    
    render() {
       
        return (
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={ this.props.cover }
                        alt=""
                        width={260}
                        height={160}
                        />
                        <h3 className="Media-title">{ this.props.title }</h3>
                        <p className="Media-author">{ this.props.author } </p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
}

//forma de exportarlo para usarlo en otras secciones
export default Media;