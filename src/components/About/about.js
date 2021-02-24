import React from 'react';
import { useHistory } from 'react-router-dom';
import './about.css';
import eva from '../../assets/graphics/eva-cortado.jpg'
import footer from '../../assets/graphics/graphics-footer.svg'
import header from '../../assets/graphics/graphics-header.svg'
import navIcon from '../../assets/graphics/navicon.svg'

function About() {

    const history = useHistory();

    return (
        <div className='about-container'>

            <img src={header} className='header' alt='header'/>
            <img src={footer} className='footer' alt='footer'/>

            <div className='btn-container'>
                <img src={navIcon} onClick={ () => history.push(`/nav`) } alt='icon'/>
            </div>

            <div className='text-container'>
                <h1 className='about-title'>Vårt kaffe</h1>

                <p className='about-bold-text'>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>

                <p className='about-normal-text'>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>

                <p className='about-normal-text'>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
            </div>

            <div className='about-pic-container'>
                <img src={eva} alt='eva' className='pic' />
                <h3 className='eva-text big'>Eva Cortado</h3>
                <p className='eva-text'>VD & Grundare</p>
            </div>

        </div>
    );
}

export default About;


