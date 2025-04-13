import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getTimeAgo = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return interval === 1
        ? `${interval} ${unit} ago`
        : `${interval} ${unit}s ago`;
    }
  }

  return "Just now";
};

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Ankita Shelke",
      rating: 5,
      date: "2025-02-10",
      review:
        "Working at NextDev Labs has been an amazing experience! They provide end-to-end solutions in web development, app development, and branding with graphic design. The positive work culture and supportive team make it a joy to be here.",
      profilePic:
        "https://lh3.googleusercontent.com/a/ACg8ocI7X012M7XlDwgtkbPaCcLZ-8yFMFLyNp26oVAMA8EqpO9WBg=s64-c-rp-mo-br100",
    },
    {
      name: "Mira Khopade",
      rating: 5,
      date: "2025-02-15",
      review:
        "NextDev Labs is one of the best companies to work with! Their expertise in web and app development, along with graphic design for brand development, is top-notch. The work environment is very supportive, and the amenities are great!",
      profilePic:
        "https://lh3.googleusercontent.com/a-/ALV-UjVRJZExEZlaQ3UC57ew9pwPy34qVe38VaABJbF4_nPUJTPBkqo=s64-c-rp-mo-br100",
    },
    {
      name: "Virat Kohli",
      rating: 5,
      date: "2025-02-20",
      review:
        "One of the best workplaces in the industry! The team at NextDev Labs delivers top-notch web and app development services, along with creative graphic design solutions. The friendly environment and modern facilities make it a great place to work.",
      profilePic:
        "https://lh3.googleusercontent.com/a-/ALV-UjUjUU4vjjPmkyQeCo-4TrAJWV6bzauKabVcFdoBMuYeQsN3RQCp=s64-c-rp-mo-br100",
    },
    {
      name: "Vaishnavi Ghule",
      rating: 5,
      date: "2025-02-25",
      review:
        "I feel lucky to be part of NextDev Labs! They are highly skilled in web development, app development, and graphic design for branding. The office has a great vibe, and the facilities provided are really good. Highly recommend it!",
      profilePic:
        "https://lh3.googleusercontent.com/a/ACg8ocIJhg3YwEYaI2Y7OSwkwKu_DqKjdqNzS6K7JxRr4PX1-P4WFw=s64-c-rp-mo-br100",
    },
    {
      name: "Harshal Deshpande",
      rating: 5,
      date: "2025-01-15",
      review:
        'Great Place to Work "NextDev Labs is a fantastic company to work for—supportive leadership, a collaborative environment, and plenty of growth opportunities. A great place to build your career!"',
      profilePic:
        "https://lh3.googleusercontent.com/a-/ALV-UjWoQ-qUeIDK1HMO-s2r4Q5BSqdIytTNkY_UlQnEOFTGN6Mvt4dn=s64-c-rp-mo-br100",
    },
    {
      name: "Vaibhavi Shinde",
      rating: 5,
      date: "2025-02-18",
      review:
        "NextDev Labs provided exceptional website development services. Their innovative design and user-centric approach have greatly improved our online engagement.",
      profilePic:
        "https://lh3.googleusercontent.com/a-/ALV-UjV7dNti0U2T4vye2cIa3fm86etlf7puDF4mRABteaCi3HqpwKaR=s64-c-rp-mo-br100",
    },
    {
      name: "Manav Pandya",
      rating: 5,
      date: "2025-01-20",
      review:
        "NextDev Labs delivered an outstanding React website—fast, responsive, and visually impressive. The team was professional, on time, and highly skilled. Highly recommended!",
      profilePic:
        "https://lh3.googleusercontent.com/a-/ALV-UjUFBi_KfJm_ZBy3pYklnyO76IdG_ts9XqXljvN_y_LCNcX2c8U=s64-c-rp-mo-br100",
    },
    {
      name: "SAGAR SD",
      rating: 5,
      date: "2025-02-22",
      review:
        "NextDev Labs developed a robust application with an intuitive web portal for admin management. Their team's professionalism and technical skills are outstanding.",
      profilePic:
        "https://lh3.googleusercontent.com/a/ACg8ocJlXXe-GFM-2_LiTj_he1gR9U3kamSr-8Yqo_s-1g5031x8Gw4=s64-c-rp-mo-br100",
    },
    {
      name: "Chetrali Gaikwad",
      rating: 5,
      date: "2025-02-28",
      review:
        "NextDev Labs stands out among web development companies. Their expertise and dedication ensured our project was completed on time and beyond expectations.",
      profilePic:
        "https://lh3.googleusercontent.com/a/ACg8ocKvd3MC6gGY04UWhIlajktBony0LkmM_NzCjpW51nbBWubvwA=s64-c-rp-mo-br100",
    },
    {
      name: "DURWANKOOR BORADE",
      rating: 5,
      date: "2025-02-05",
      review:
        "NextDev Labs delivered an exceptional application featuring a user-friendly web portal for admins. Their attention to detail and commitment to quality are impressive.",
      profilePic:
        "https://lh3.googleusercontent.com/a-/ALV-UjX9W3HMrTmT7O2XU_p-32pLu1WdurK8Mrbm0UD09GR5WF3RXWQ=s64-c-rp-mo-br100",
    },
    {
      name: "Sujit Bhale",
      rating: 5,
      date: "2025-02-12",
      review:
        "NextDev Labs is a leading website development company. Their creative solutions and technical proficiency brought our vision to life seamlessly.",
      profilePic:
        "https://lh3.googleusercontent.com/a/ACg8ocK9wN85_KnYBLZxb8JLXONUr7k6fun_jXsOJZiBLWXIMdqZrw=s64-c-rp-mo-br100",
    },
    {
      name: "Shraddha Shelke",
      rating: 5,
      date: "2025-02-08",
      review:
        "Highly recommend NextDev Labs for web development. Their team's professionalism and commitment resulted in a website that has enhanced our digital footprint.",
      profilePic:
        "https://lh3.googleusercontent.com/a-/ALV-UjXhY12Y9uFDl2tKnPjjNU3cuTeXVRUTvPQAwKLtk1Axioa4jTQ=s64-c-rp-mo-br100",
    },
  ];

  const [expandedReviews, setExpandedReviews] = useState(
    Array(reviews.length).fill(false)
  );

  const toggleExpand = (index) => {
    setExpandedReviews((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviewGrid">
        <div className="rating-summary">
          <div className="rating-title">Excellent</div>
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((item, key) => (
              <img
                key={key}
                src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                alt="star"
                className="star-icon"
              />
            ))}
          </div>
          <div className="review-count">
            Based on{" "}
            <a
              href="https://www.google.com/search?sca_esv=4f5a3464f54e4b81&rlz=1C1ONGR_enIN1058IN1058&sxsrf=AHTn8zqNsKwfERboJo4PjVIklkTOJ3yiLA:1744268897449&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzWboPxipJmOXguvJBau99YKLDQDCfjUgCOPuppUaGQIR3ZTL77yBsWm_pvA4Y-m97SXxxfpAJL8I1G1eXn1cDVmtNo82&q=nextdev+labs+Reviews&sa=X&ved=2ahUKEwi0y5mA9MyMAxXvk1YBHccjH_0Q0bkNegQILBAE&biw=1707&bih=772&dpr=1.13"
              target="_blank"
              rel="noopener noreferrer"
            >
              20 reviews
            </a>
          </div>
          <div className="google-logo">
            <img
              src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
              alt="Google"
            />
          </div>
        </div>
        <div className="reviews-slider">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="review-slide">
                <div className="review-card">
                  <div className="review-header">
                    <img
                      src={
                        review.profilePic || "https://via.placeholder.com/50"
                      }
                      alt={review.name}
                      className="profile-pic"
                    />
                    <div className="reviewer-info">
                      <div className="reviewer-name">{review.name}</div>
                      <div className="review-date">
                        {getTimeAgo(review.date)}
                      </div>
                    </div>
                    <img
                      src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                      className="google-icon"
                      alt="Google"
                    />
                  </div>

                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <img
                        key={item}
                        src={
                          item <= review.rating
                            ? "https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                            : "https://cdn.trustindex.io/assets/platform/Google/star/e.svg"
                        }
                        alt="star"
                        className="star-icon"
                      />
                    ))}
                  </div>

                  <div className="review-content">
                    <div
                      className={`review-text ${
                        expandedReviews[index] ? "expanded" : "collapsed"
                      }`}
                    >
                      {review.review}
                    </div>

                    {review.review.length > 120 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="toggle-button"
                      >
                        {expandedReviews[index] ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .reviews-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
        }

        .reviews-title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #333;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: 1fr 4fr;
          gap: 20px;
        }

        .rating-summary {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .rating-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 6px;
        }

        .stars-container {
          display: flex;
          gap: 12px;
          margin-bottom: 10px;
        }

        .review-count {
          margin-bottom: 20px;
        }

        .review-count a {
          text-decoration: underline;
          color: inherit;
        }

        .google-logo img {
          width: 110px;
          height: 35px;
        }

        .reviews-slider {
          position: relative;
          margin: auto;
          max-width: 800px;
        }

        .review-slide {
          padding: 10px;
        }

        .review-card {
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          height: auto;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .profile-pic {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .reviewer-info {
          flex: 1;
        }

        .reviewer-name {
          font-weight: bold;
          font-size: 14px;
          color: #000;
        }

        .review-date {
          color: #777;
          font-size: 12px;
        }

        .google-icon {
          width: 20px;
          height: 20px;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
          margin: 12px 0;
        }

        .star-icon {
          width: 17px;
          height: 17px;
        }

        .review-content {
          margin-top: 10px;
        }

        .review-text {
          font-size: 14px;
          color: #333;
          line-height: 1.5;
        }

        .review-text.collapsed {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        .toggle-button {
          margin-top: 6px;
          font-size: 12px;
          color: #1a73e8;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .reviews-container {
            padding: 40px 20px;
          }
        }

        @media (max-width: 768px) {
          .reviewGrid {
            grid-template-columns: 1fr;
          }

          .rating-summary {
            margin-bottom: 30px;
          }
        }

        @media (max-width: 640px) {
          .reviews-container {
            padding: 30px 15px;
          }

          .reviews-title {
            font-size: 24px;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default GoogleReviews;
