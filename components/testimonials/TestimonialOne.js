import {useState} from 'react';
import TestimonialData from '../../data/Testimonials.json';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from './TestimonialCard';

const TestimonialOne = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const changeActive = (index) => {
        setActiveTestimonial(index);
    };

    return (
        <div className="axil-testimonial-area ax-section-gap bg-color-lightest">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                                            <SectionTitle
                        title="What Our Clients Say"
                        subtitle="Testimonials"
                        description="Discover how NextDev Labs has helped businesses transform their digital presence with cutting-edge web and app solutions. See what our clients have to say about working with us!"
                        color="primary-color"
                        alignment="center"
                        />

                    </div>
                </div>
                <div className="testimonial-activation">
                    <div className="row axil-testimonial-single">
                        {TestimonialData?.map((testimonial, index) => (
                            <TestimonialCard
                                key={`twstimonial-${index}`}
                                column="col-lg-6 mt--60 mt_sm--30 mt_md--30"
                                testimonialClass="axil-testimonial testimonial axil-control"
                                data={testimonial}
                                index={index}
                                activeIndex={activeTestimonial}
                                changeActive={changeActive}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialOne;
