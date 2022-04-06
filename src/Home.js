import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://blog-images.pharmeasy.in/2021/05/04135934/01-BANNER-2-1.jpg"
                //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="amazon prime background"
            />

            {/* Product id, title, price, rating, image*/}
            <div className="home__row">
                <Product 
                    id="98765"
                    title=" PharmEasy: Online Pharmacy & Medical Store in India | 50 Lakhs+ Customers."
                    price={470.98}
                    rating={4}
                    image="https://cdn01.pharmeasy.in/dam/products_otc/I40123/dettol-antiseptic-liquid-bottle-of-60-ml-2-1628057309.jpg" 
                />
                <Product 
                    id="48375"
                    title="PharmEasy: Online Pharmacy & Medical Store in India | 50 Lakhs+ Customers."
                    price={497.99}
                    rating={4}
                    image="https://cdn01.pharmeasy.in/dam/products_otc/T64756/bibo-cough-syrup-natural-product-zero-side-effects-premium-ayurveda-immunity-protector-20-herbs-and-honey-100ml-bottle-2-1632778565.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="345678"
                    title="Sony PS5"
                    price={499.99}
                    rating={5}
                    image="https://cdn01.pharmeasy.in/dam/products_otc/329404/depura-kids-nano-vitamin-d3-drops-for-kids-400-ui-per-05-ml-dropper-for-appropriate-dosage-2-1632774462.jpg" 
                />
                <Product 
                    id="1232343"
                    title="PharmEasy: Online Pharmacy & Medical Store in India | 50 Lakhs+ Customers."
                    price={479.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg" 
                />
                <Product 
                    id="1232343"
                    title="PharmEasy: Online Pharmacy & Medical Store in India | 50 Lakhs+ Customers."
                    price={419.95}
                    rating={5}
                    image="https://cdn01.pharmeasy.in/dam/products_otc/N70299/everherb-shilajit-500mg-natural-vigour-improvement-strength-stamina-for-men-bottle-of-60-2-1632777386.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123234"
                    title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                    price={486.00}
                    rating={5}
                    image="https://cms-contents.pharmeasy.in/carousel_item/8ffa5e74d9b-5605efb5a7b-Sugarfree-(2).jpg" 
                />
            </div>

            <h2>
                Category 2
            </h2>
            <div className="home__row">
                <Product 
                    id="98765"
                    title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
                    price={470.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg" 
                />
                <Product 
                    id="48375"
                    title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
                    price={497.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="345678"
                    title="Sony PS5"
                    price={499.99}
                    rating={5}
                    image="https://www.psu.com/wp/wp-content/uploads/2020/07/PS5-5-4-1024x576.jpg" 
                />
                <Product 
                    id="1232343"
                    title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
                    price={479.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg" 
                />
                <Product 
                    id="1232343"
                    title="Lib Tech TRS HP Snowboard Mens"
                    price={419.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71kHW-r%2BSGL._AC_SL1500_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123234"
                    title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                    price={486.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg" 
                />
            </div>
        </div>
    )
}

export default Home;
