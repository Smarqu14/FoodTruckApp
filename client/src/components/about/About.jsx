import React, { Component } from "react";

const data = [
  {
    header: "TacoTruck",
    subheader1: "Buen Sabor",
    subheader2: "Delicioso",
    paragragh:
      "Welcome to TacoTruck, thank you for giving us the opportunity to serveyou. Our goal is to provide natural and fresh home-style Mexican food with the best quality. We are proud to be a part of this beautiful community. Your patronage is appreciated. Thank you very much for being our guest.",
  },
  {
    header: "Up to 365 days/year",
    paragragh:
      "Welcome to TacoTruck, thank you for giving us the opportunity to serveyou. Our goal is to provide natural and fresh home-style Mexican food with the best quality. We are proud to be a part of this beautiful community. Your patronage is appreciated. Thank you very much for being our guest.",
  },

  {
    header: "Ready in 20 minutes",
    paragragh:
      " You're only twenty minutes away from your delicious and super healthy meals for pickup Over 20 years of experience to ensure that you're 100% happy.",
  },
  {
    header: "100% Organic",
    paragragh:
      "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
  },
  {
    header: "Order for pick up",
    paragragh:
      "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
  },
];

const About = () => (
  <section className="section-about">
    <div className="row">
      <h1>{data[0].header}</h1>
      <h2>
        {data[0].subheader1} &mdash; {data[0].subheader2}
      </h2>
      <p className="long-copy-about">{data[0].paragragh}</p>
    </div>

    <div className="row">
      <div className="container-about">
        {data.map((item, index) => {
          if (index !== 0) {
            return (
              <div>
                <i className="ion-ios-infinite-outline icon-big" />
                <h3>{item.header}</h3>
                <p>{item.paragragh}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  </section>
);

export default About;
