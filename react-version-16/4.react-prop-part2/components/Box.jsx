
function Box({title, children}){
   return (
    <div>
        {children}
        <h1> hi,  {title} </h1>
        
    </div>
   )
}

export default Box;