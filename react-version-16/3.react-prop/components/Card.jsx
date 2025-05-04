// const Card = (props) => {
//     return(
//         <div>
//           <h1>HI, I am {props.name} from {props.college}</h1>
//         </div>
//     )
// }

// export default Card;

const Card = ({name, college}) => {
    return(
        <div>
          <h1>HI, I am {name} from {college}</h1>
        </div>
    )
}

export default Card;
