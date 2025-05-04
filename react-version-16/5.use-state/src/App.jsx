
// const App = () => { 
//     var user = 'Amrita'

import { useState, useSyncExternalStore } from "react"

//     const abc = () => {
//         user ='wewe';
//     }

//     return (
//         <div>
//             <h1>hello {user}</h1>
//             <button onClick={abc}>Change user </button>
//         </div>
//     )
// }


//this will not work because we are using react, so react meh hum direct kuch bhi nhi kr skte, to do this task
//we will use useState hook, because we are changing the state of an element


const App = () => {
    const[name, setName] = useState('Amrita')


    return(
        <div>
            <h1>user name {name}</h1>
            <button onClick={ () =>
                    setName('Kataria')
            }>change Name</button>
        </div>
    )
}

export default App