import Button from "./Button.jsx";
import Image from "../assets/images/heroimage.png"
import Background from "../assets/images/background.png"
import SearchBar from "../assets/images/searchbar.png"
import Ring from "../assets/images/ring.png"
import Star from "../assets/images/star.png"
import Learn from "../assets/images/learn.png"
import Write from "../assets/images/write.png"
import Grow from "../assets/images/grow.png"

const Hero = () => {

    const h1Style = {
        fontSize: '3.75rem',
        lineHeight: '4.0625rem',
        fontFamily: '"Open Sans"',
        fontWeight: '600',
        textAlign: 'center',
        width: '100%',
        zIndex: '5'
    };

    const pStyle = {
        fontSize: '1.25rem',
        lineHeight: '2rem',
        fontFamily: '"Open Sans"',
        fontWeight: '600',
        color: 'hsl(250, 25%, 82%)',
        zIndex: '5'
    };

    const pStyleFooter = {
        fontSize: '1rem',
        lineHeight: '1rem',
        fontFamily: '"Open Sans"',
        fontWeight: '600',
        color: 'hsl(250, 25%, 82%)',
        zIndex: '5'
    };

    const highlightStyle1 = {
        color: 'hsl(200, 89%, 54%)',
        fontFamily: 'Roboto',
        zIndex: '5'// Change this to whatever color you like
    };
    const highlightStyle2 = {
        color: 'hsl(36, 95%, 48%)',
        zIndex: '5' // Change this to whatever color you like
    };

    return (
        <div id="home" style={{ marginTop: '150px' }}>
            <div style={{ zIndex: '5' }}>
                <div style={{ zIndex: '5' }} className="relative z-1 mx-auto text-center">
                    <h1 style={h1Style}>
                        <span style={highlightStyle2}>Unlock</span> your words
                    </h1>
                    <h1 style={h1Style}>
                        Unleash your potential
                    </h1>
                    <h1 style={h1Style}>
                        using <span style={highlightStyle1}>ScribAid</span>
                    </h1>
                    <p style={pStyle} className="mx-auto mt-6 mb-5">
                        powered by Gemini ✧
                    </p>

                    <Button style={{ zIndex: '5' }} title="TRY NOW" />


                </div>

                <div className="relative z-1 mx-auto text-center" style={{ marginBottom: '220px' }}>
                    <div className="mt-10" style={{
                        display: 'inline-block',
                        width: '500px',
                        height: '500px'
                    }}>
                        {/* First div */}
                        <div style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid #FFFFFF',
                            width: '100%',
                            height: '100%',
                            zIndex: '3',  // Higher z-index for the first div
                            position: 'relative'  // Ensure the parent div has position set
                        }}>
                            <img src={Image} alt="Descriptive text" style={{
                                width: '100%',
                                height: '100%',
                                display: 'block'
                            }} />
                        </div>

                        {/* Second div */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '20px',
                            zIndex: '1',  // Lower z-index for the second div

                            display: 'block',
                            opacity: '0.8' // Adjust opacity as needed
                        }}>
                            <img src={Background} alt="Descriptive text" style={{
                                width: '65%',
                                height: '65%',
                                display: 'block',
                            }} />
                        </div>

                        {/* Third div */}

                        <div style={{
                            position: 'absolute',
                            top: '225px',
                            right: '457px',
                            zIndex: '3',  // Lower z-index for the second div
                            width: '36%', // Adjust size as needed
                            height: '36%', // Adjust size as needed
                            display: 'block',
                        }}>
                            <img src={SearchBar} alt="Descriptive text" style={{
                            }} />
                        </div>

                        {/* Fourth div */}

                        <div style={{
                            position: 'absolute',
                            top: '50px',
                            right: '100px',
                            zIndex: '0',  // Lower z-index for the second div
                            width: '50%', // Adjust size as needed
                            height: '50%', // Adjust size as needed
                            display: 'block',
                            opacity: '0.8'
                        }}>
                            <img src={Ring} alt="Descriptive text" style={{
                            }} />
                        </div>

                        {/* Fifth div */}

                        <div style={{
                            position: 'absolute',
                            bottom: '350px',
                            right: '300px',
                            zIndex: '0',  // Lower z-index for the second div
                            opacity: '0.5'
                        }}>
                            <img src={Star} alt="Descriptive text" style={{
                                width: '100%',
                                height: '100%',
                            }} />
                        </div>




                    </div>


                </div>
                <div id="features" styles={{
                    marginTop: '160px',
                    zIndex: '50',
                }}>
                    <h1 style={h1Style} >Features</h1>
                </div>

                <div className="relative z-1 mx-auto text-center mt-6">
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
        width: '100%',
    }}>
        {/* Divs for each image with reduced margin and adjusted flex */}
        <div style={{
            flex: '1',  // Keeps the images evenly spaced
            margin: '-2px',  // Reduced margin between the images
            borderRadius: '20px',
            overflow: 'hidden',
        }}>
            <img src={Write} alt="Descriptive text" style={{
                width: '100%',
                height: '100%',
                display: 'block'
            }} />
        </div>

        <div style={{
            flex: '1',  // Keeps the images evenly spaced
            margin: '0 5px',  // Reduced margin between the images
            borderRadius: '20px',
            overflow: 'hidden',
        }}>
            <img src={Learn} alt="Descriptive text" style={{
                width: '100%',
                height: '100%',
                display: 'block'
            }} />
        </div>

        <div style={{
            flex: '1',  // Keeps the images evenly spaced
            margin: '0 5px',  // Reduced margin between the images
            borderRadius: '20px',
            overflow: 'hidden',
        }}>
            <img src={Grow} alt="Descriptive text" style={{
                width: '100%',
                height: '100%',
                display: 'block'
            }} />
        </div>
    </div>
</div>

                
                <div className="text-center mt-8 mb-16"styles={{
                    marginTop: '100px',
                }}>
                    <p style={pStyleFooter}>GenAI Genesis 2024</p>
                </div>






            </div>
            {/* outer div */}
        </div>
    );
}

export default Hero;