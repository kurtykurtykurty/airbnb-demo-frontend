import React from "react";
import { NextPage, Section, ScrollWrapper } from "../Section";
import Card from "./Card";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";

export default function() {
  return (
    <div className="container">
      <Section name="Popular reservations around the world">
        <ScrollWrapper>
          <div className="col-xs-6 col-xs-4 col-lg-3">
            <Card
              img={img1}
              name="SPEAKEASY"
              caption="Chumley’s"
              price="About $60 per person"
            />
          </div>

          {/* ВТОРАЯ КАРТА */}

          <div className="col-xs-6 col-xs-4 col-lg-3">
            <Card
              img={img2}
              name="Korean gastropub"
              caption="Hanjan"
              price="About $50 per person"
            />
          </div>

          {/* ТРЕТЬЯ КАРТА */}

          <div className="col-xs-6 col-xs-4 col-lg-3">
            <Card
              img={img3}
              name="German american"
              caption="Prime Meats"
              price="bout $55 per person"
            />
          </div>

          {/* ЧЕТВЕРТАЯ КАРТА */}

          <div className="col-xs-6 col-xs-4 col-lg-3">
            <Card
              img={img4}
              name="Fine seafood"
              caption="Seaprice"
              price="About $70 per personn"
            />
          </div>
        </ScrollWrapper>
        <NextPage />
      </Section>
    </div>
  );
}
