


const Card = (props) => {
  return (
<div
id='card'
className="h-70 w-65 m-5 flex-wrap  ">
    <img 
className='bg-cover h-full w-full'
src={props.Poster}></img>

<div className="flex flex-col flex-warp">
  <p >{props.Title}</p>
<p>{props.Year}</p>
</div>
</div>
  )
}

export default Card