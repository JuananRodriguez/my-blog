import React from 'react';

class PostItem extends React.PureComponent{


    render(){
        return(
            <div className={"post-item-wrapper"}>
                <div className={"post-item-header"}>
                    <h4>Título</h4>
                </div>
                <div className={"post-item-body"}>
                    <p>Aquí va el resumen</p>
                </div>
                <div className={"post-item-footer"}>
                    <p>Aquí va el footer</p>
                </div>
            </div>
        )
    }
}

export default PostItem;