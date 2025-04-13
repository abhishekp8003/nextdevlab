import React, { useRef } from "react";

const Faq = () => {
  const faqData = [
    {
      category: "Website Development",
      questions: [
        {
          question: "What platforms do you use for website development?",
          answer:
            "We build websites using React, WordPress, and Shopify, tailored to your business needs.",
        },
        {
          question: "How long does it take to develop a website?",
          answer:
            "WordPress and Shopify websites take 2 days to a week, while React-based sites depend on complexity.",
        },
        {
          question: "Do you offer SEO optimization for websites?",
          answer:
            "Yes! We use `next-seo` and proven SEO strategies to enhance your site's visibility.",
        },
        {
          question: "Can you redesign my existing website?",
          answer:
            "Absolutely! We modernize outdated websites with better design, performance, and features.",
        },
        {
          question: "Do you provide website maintenance?",
          answer:
            "Yes, we offer ongoing support, updates, and security maintenance for all websites.",
        },
      ],
    },
    {
      category: "Application Development",
      questions: [
        {
          question: "What technologies do you use for app development?",
          answer:
            "We develop apps using Flutter and React Native for Android and iOS platforms.",
        },
        {
          question: "How long does it take to develop an app?",
          answer:
            "The timeline depends on complexity, but we aim for efficient development with a structured process.",
        },
        {
          question: "Can you convert my website into a mobile app?",
          answer:
            "Yes, we can turn your website into a fully functional app using Flutter or React Native.",
        },
        {
          question: "How do you ensure app security?",
          answer:
            "We implement secure coding practices, encryption, and regular security audits.",
        },
        {
          question: "Do you offer post-launch support for apps?",
          answer:
            "Yes, we provide bug fixes, updates, and new feature additions after launch.",
        },
      ],
    },
    {
      category: "Marketing & Branding",
      questions: [
        {
          question: "What marketing services does NextDev Labs offer?",
          answer:
            "We provide Meta campaigns, Google Ads, SEO, branding, and social media marketing.",
        },
        {
          question: "Can you help with brand identity creation?",
          answer:
            "Yes! We design logos, brand guidelines, and marketing assets for strong brand recognition.",
        },
        {
          question: "How do you track campaign performance?",
          answer:
            "We use analytics tools to monitor engagement, conversions, and ROI for continuous optimization.",
        },
        {
          question: "Do you provide content creation for marketing?",
          answer:
            "Yes, we create engaging blogs, ad creatives, and social media content to drive growth.",
        },
        {
          question: "What industries do you specialize in for marketing?",
          answer:
            "We work across various industries, including tech, e-commerce, real estate, and more.",
        },
      ],
    },
    {
      category: "Workflow & Pricing",
      questions: [
        {
          question: "What happens if I need changes after development?",
          answer:
            "Minor changes take 1 to 3 days, while major changes can take 7 days to 2 weeks, depending on complexity.",
        },
        {
          question: "Can the pricing change after the project starts?",
          answer:
            "Yes, if additional features or workflow changes are required, pricing will be adjusted accordingly.",
        },
        {
          question: "Do you use pre-made templates or custom designs?",
          answer:
            "We use premium templates for faster development, but we also offer fully custom designs.",
        },
        {
          question: "Can you speed up development if I have a tight deadline?",
          answer:
            "Yes, but faster development may require more developers, which can affect the pricing.",
        },
        {
          question: "How do I get a project quote?",
          answer:
            "Contact us with your requirements, and we'll provide a custom quote based on features and complexity.",
        },
      ],
    },
  ];

  const sliderRef = useRef(null);

  const scrollTo = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Navigation Buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {faqData.map((cat, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            style={{
              margin: "0 10px",
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: "#f0f0f0",
            }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          width: "100vw",
          height: "100%",
        }}
      >
        {faqData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            style={{
              width: "100vw",
              flex: "0 0 100vw",
              scrollSnapAlign: "start",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              {category.category}
            </h2>
            <div
              id={`accordion-${categoryIndex}`}
              className="axil-accordion--2"
              style={{
                maxWidth: "700px",
                margin: "auto",
              }}
            >
              {category.questions.map((item, questionIndex) => {
                const questionId = `question-${categoryIndex}-${questionIndex}`;
                const collapseId = `collapse-${categoryIndex}-${questionIndex}`;

                return (
                  <div className="card" key={questionId}>
                    <div className="card-header" id={`heading-${questionId}`}>
                      <a
                        href="#"
                        className="btn btn-link d-block text-start collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        {item.question}
                      </a>
                    </div>
                    <div
                      id={collapseId}
                      className="collapse"
                      aria-labelledby={`heading-${questionId}`}
                      data-bs-parent={`#accordion-${categoryIndex}`}
                    >
                      <div className="card-body">{item.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
