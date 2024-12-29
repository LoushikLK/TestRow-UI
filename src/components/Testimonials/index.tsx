import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 2,
    name: "John Doe",
    designation: "Founder @Formbold",
    content:
      "“TestRow’s expertise has been invaluable in ensuring our product’s success. Their team is professional, efficient, and highly skilled.”",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Musharof Chy",
    designation: "Founder @Rocketseat",
    content:
      "“With TestRow’s thorough testing services, we were able to launch our application confidently. Highly recommended!”",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Testimonials"
          paragraph="Testimonials from our satisfied clients."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
