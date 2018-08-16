import React from 'react';
import Media from './media';
import './playlist.css';
import Figure  from '../../icons/components/figure'




function Playlist(props)  {

       console.log(props.data);

       const playlist = props.data.categories

        return ( <div> 
{
    playlist.map((data) => {
        return (
            <div className="row" key={data.id}>
            <h2>{data.title}</h2>
                <h3>{data.description}</h3>
                <div className="Playlist"  key={data.id}>
                            <Figure.Play
                                size={16}
                                color='#333'
                            />
                            <Figure.Pause
                                size={16}
                                color='#333'
                            />
                            <Figure.Fullscreen
                                size={16}
                                color='#333'
                            />
                            <Figure.Volume
                                size={16}
                                color='#333'
                            />

                 <div>           

                {
                data.playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })   
                }
                </div>
                </div>
</div>
        )
    })

}
           

        </div>)
    }

export default Playlist;