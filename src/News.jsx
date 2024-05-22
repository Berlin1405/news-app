export default function News(props)



{
       
    return(
        <div className="news">
           <div className="news-img">
            <img src="{props.article.urlToImage}"  />
            
            
            </div> 
            <h1>Title</h1>
            <p>asdfghjkl</p>
            <a href="#">Read more</a>
            <div className="source">
                <p>th</p>
                <p>luhag</p>
            </div>


           
           
           
           
           
           
           
           </div>
    )
}