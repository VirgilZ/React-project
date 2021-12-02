import React from 'react';
import "./Barre.css";

const useState = React.useState
const useEffect = React.useEffect

export default function Intro() {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    localStorage.setItem("exampleBoxeData", JSON.stringify(boxes))
  }, [boxes])

  return (
    <>
      <AddBoxeForm setBoxes={setBoxes} />
      <ul className='boxtaille'>
        {boxes.map(boxe => <Boxe setBoxes={setBoxes} id={boxe.id} name={boxe.name} width={boxe.width} height={boxe.height}/>)}
      </ul>
    </>
  )
}

function AddBoxeForm(props) {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [name, setName] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    props.setBoxes(prev => prev.concat({width, height,name}))
    setWidth("")
    setHeight("")
    setName("")
  }

  return (
    <form onSubmit={handleSubmit} className='formulaire'>
      <fieldset>
      <legend>En saisissant les valeurs ci dessous , nous allons pouvoir vous proposer le box adapté à vos besoins</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Nom"/>
        <input value={width} onChange={e => setWidth(e.target.value)} placeholder="Largeur"/>
        <input value={height} onChange={e => setHeight(e.target.value)} placeholder="Hauteur"/>
        <button>Ajouter un nouveau meuble à mon box</button>
      </fieldset>
    </form>
  )
}
function Boxe(props) {
  function handleDelete() {
    props.setBoxes(prev => prev.filter(boxe => boxe.id = props.id))
  }

  return (
    <li className='reponse'>{props.name} fait {props.width}m de largeur et {props.height}m de hauteur.
      <button onClick={handleDelete}>Supprimer</button>
    </li>
  )
}