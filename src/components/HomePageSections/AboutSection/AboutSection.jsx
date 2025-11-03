import VerticalTitle from "../../VerticalTitle/VerticalTitle.jsx";
import "./AboutSection.css";
import { CircleChevronRight } from 'lucide-react';

const AboutSection = () => {

    return (
        <div className="about-section">
            {/* <h2 className="title">About Me</h2> */}
            <VerticalTitle text="About Me" placement={"left"} />
            <div className="content">
                <div className="position">
                    {/* <div className="arrow">
                        <CircleChevronRight />
                    </div>
                    <p className="about-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae facilis perferendis illo deserunt magni nobis ex voluptates voluptas temporibus sed nulla iusto cum fugit quo numquam doloremque ad similique, explicabo neque quod ea suscipit! Numquam, vero nam quas, ipsam quisquam molestiae corrupti quos unde dolorem ad impedit. Saepe illum at, obcaecati impedit molestias nam dolores? Incidunt reprehenderit, modi at illum dolorem quo voluptatem, voluptates sequi officiis nostrum laborum culpa rerum sed voluptatibus, maiores commodi nobis cupiditate voluptatum. Saepe possimus laborum soluta! Molestias et nihil, velit commodi beatae, doloremque eum, vitae necessitatibus dolore repellat officia provident! Quae soluta velit odio.
                    </p> */}

                    <div>
                        <h3 style={{ textTransform: "uppercase" }}>Hi, I'm Amanda, I love making things that help people do their thing.</h3>
                    </div>
                    <div>
                        <p>I'm a junior frontend developer bla bla bla...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;