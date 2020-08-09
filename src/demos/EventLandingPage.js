import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import About from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Brand from "components/features/VerticalWithAlternateImageAndText.js";
import Specialist from "components/blogs/ThreeColSimpleWithImage.js";
import Club from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";

export default () => (
  <AnimationRevealPage>
    <About />
    <Brand />
    <Specialist />
    <Club />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
