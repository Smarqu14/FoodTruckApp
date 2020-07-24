import React, { Component } from 'react';

const About = () => (
  <section className="section-about">
    <div className="row">
      <h1>TacoTruck</h1>
      <h2>Buen Sabor &mdash; Delicioso</h2>
      <p className="long-copy-about">
        Welcome to TacoTruck, thank you for giving us the opportunity to
        serveyou. Our goal is to provide natural and fresh home-style Mexican
        food with the best quality. We are proud to be a part of this beautiful community. Your patronage is appreciated.
        Thank you very much for being our guest.
      </p>
    </div>

    <div className="row">
      <div className="container-about">
        <div>
          <i className="ion-ios-infinite-outline icon-big" />
          <h3>Up to 365 days/year</h3>
          <p>
            Never cook again! We really mean that. Come eat your authentic mexican food . We open everyday 365 days/year. You can also choose to order more flexibly if that's your style.!
          </p>
        </div>
        <div>
          <i className="ion-ios-stopwatch-outline icon-big" />
          <h3>Ready in 20 minutes</h3>
          <p>
            You're only twenty minutes away from your delicious and super
            healthy meals for pickup. Over 20 years of experience to ensure that you're 100% happy.
          </p>
        </div>
        <div>
          <i className="ion-ios-nutrition-outline icon-big" />
          <h3>100% organic</h3>
          <p>
            All our vegetables are fresh, organic and local. Animals are raised
            without added hormones or antibiotics. Good for your health, the
            environment, and it also tastes better!
          </p>
        </div>
        <div>
          <i className="fas fautensils">Icon</i>
          <h3>Order for pick up</h3>
          <p>
            We don't limit your creativity, which means you can order whatever
            you feel like. You can also choose from our menu containing over 100
            delicious meals. It's up to you!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
