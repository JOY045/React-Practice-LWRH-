const Hero = (props) => {
    return (
        <div>
            <h1>
                {
                    props.item.name
                }
            </h1>
            <h1>
                {
                    props.item.age
                }
            </h1>
            <h1>
                {
                    props.item.address.city
                }
            </h1>
        </div>
    );
};

export default Hero;