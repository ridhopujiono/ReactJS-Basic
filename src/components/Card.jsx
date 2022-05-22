import React from "react";

function Card(props){
    const content = props.content;
    return (
        <div className="card">
            <img src={content.imageSource} alt="" className="card-img-top"/>
            <div className="card-body">
                {content.titlePost}
                <br />
                <small className="text-muted">
                    {content.publishedPost}
                </small>
            </div>
        </div>
    )
}

export default Card;