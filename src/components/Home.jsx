import {Screen} from './Screen'
export const Home = () => {
    const name = "Sebas Prada"
    const role = "Frontend Developer"
  return (
    <Screen title= 'Inicio'>
        <section className= "Hero">
            <div className= "avatar">ER</div>
            <h2>{name}</h2>
            <p className="herp-role">{role}</p>
            <p>
                Mi primer portafolio con jsx.

            </p>
        </section>

    </Screen>
  )
}
