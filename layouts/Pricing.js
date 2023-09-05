import Link from "next/link";
import Cta from "./components/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, price_1_pre, price_2_pre, man, plans, call_to_action },
  } = data;
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${!plan.recommended ? "lg:px-0" : "col-recommended"
                  }`}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h2>{plan.title}</h2>
                  <h6 className="mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h6>
                  <div className="mt-5">
                    {price_1_pre}<span className="text-3xl text-dark">{plan.price_1}</span>{plan.price_1 >= 0 ? man : ""}
                  </div>
                  <div className="mt-5">
                    {price_2_pre}<span className="text-3xl text-dark">{plan.price_2}</span>{man}
                  </div>

                  <Link
                    className={`btn mt-5 ${plan.recommended ? "btn-primary" : "btn-outline-primary"
                      }`}
                    href={plan.button.link}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Link>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
