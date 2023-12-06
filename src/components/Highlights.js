import des1 from "../icons_assets/greek salad.jpg"
import des2 from "../icons_assets/lemon dessert.jpg"
import des3 from "../icons_assets/bruchetta.svg"

function Highlights(){
    return(
        <section className="Highlights">
            <section className="high1">
                <h1>Specials</h1>
                <button type="button">Menu</button>
            </section>
            <section className="high2">
                <card style={{animationDelay:'0.3s'}}>
                    <img src={des1}/>
                    <section className="SpecialName">
                        <h2>PT salad</h2>
                        <h4>3.99€</h4>
                    </section>
                    <section className="DescriptionCard">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu massa, iaculis et molestie quis, volutpat non dolor. Praesent convallis, nisl ac fermentum finibus,
                         ipsum dolor placerat est, in dapibus risus libero quis quam.</p>
                    <a>Order it -></a>
                    </section>
                </card>
                <card>
                    <img src={des2}/>
                    <section className="SpecialName">
                        <h2>Lemon Des</h2>
                        <h4>1.99€</h4>
                    </section>
                    <section className="DescriptionCard">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu massa, iaculis et molestie quis, volutpat non dolor. Praesent convallis, nisl ac fermentum finibus,
                         ipsum dolor placerat est, in dapibus risus libero quis quam.</p>
                    <a>Order it -></a>
                    </section>
                </card>
                <card>
                    <img src={des3}/>
                    <section className="SpecialName">
                        <h2>Bruchetta</h2>
                        <h4>7.99€</h4>
                    </section>
                    <section className="DescriptionCard">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu massa, iaculis et molestie quis, volutpat non dolor. Praesent convallis, nisl ac fermentum finibus,
                         ipsum dolor placerat est, in dapibus risus libero quis quam.</p>
                    <a>Order it -></a>
                    </section>
                </card>
            </section>
        </section>
    )
}
export default Highlights