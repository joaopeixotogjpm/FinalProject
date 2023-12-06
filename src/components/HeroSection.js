function HeroSection(){
    return <section className="HeroSection">
                <section className="hsection_one">
                    <h1>Little Lemon</h1>
                    <h3>Portugal</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo in dolor non suscipit. Duis erat augue, mollis nec metus nec, efficitur suscipit urna.
                        Proin elementum, sapien pulvinar fringilla tincidunt, erat quam aliquet ante, a tristique arcu sem id lectus. Pellentesque sodales massa ipsum, quis consequat justo
                        vehicula sit amet.
                    </p>
                    <button type="button">Reserve Now!</button>
                </section>
                <section className="hsection_two">
                    <aside><img src={require("../icons_assets/restauranfood.jpg")}/></aside>
                </section>
            </section>
}
export default HeroSection;