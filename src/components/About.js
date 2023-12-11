import imgA from '../icons_assets/Mario and Adrian A.jpg'
import imgB from '../icons_assets/Mario and Adrian b.jpg'
function About(){
    return(<section className='About'>
    <section className='AboutText'>
        <h1>Owners</h1>
        <h2>Me & You</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo in dolor non suscipit.
             Duis erat augue, mollis nec metus nec, efficitur suscipit urna. Proin elementum, sapien pulvinar fringilla tincidunt,
            erat quam aliquet ante, a tristique arcu sem id lectus. Pellentesque sodales massa ipsum, quis consequat justo vehicula sit amet.</p>
    </section>
    <section className='AboutImg'>
        <img className='imgA' src={imgA} style={{width:'400px'}}/>
        <img className='imgB' src={imgB} style={{width:'400px',position:'absoloute'}}/>
    </section>
    </section>)
}
export default About