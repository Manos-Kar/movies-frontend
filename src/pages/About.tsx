import React from "react";
import PageTitle from "../components/PageTitle";

function About() {
  return (
    <div className="pageComponent">
      <PageTitle title="ABOUT" />
      <div className="aboutSection">
        <p className="aboutParagraph">
          Manos Karystinos is a Greek filmmaker and software developer, born in
          1990 in Komotini. Although his academic background is in Civil
          Engineering — having studied at Aristotle University of Thessaloniki —
          his path soon led him to the arts. While still a student, he immersed
          himself in amateur theater, before turning his focus fully to cinema.
          The urge to tell stories visually became the driving force of his
          career, leading him to direct a series of short films that reflected
          his early explorations of human psychology, relationships, and
          atmosphere.
        </p>
        <p className="aboutParagraph">
          His early shorts, including Let Me Sleep and PAPARIA, were created
          with little more than passion, borrowed equipment, and the help of
          friends, yet they revealed his commitment to cinematic storytelling
          even under the harshest constraints. These projects laid the
          foundation for his debut feature, Dark Illusion (2014). Dark Illusion
          was a psychological thriller made with almost no budget, yet it
          achieved what many thought impossible. The film premiered at the 55th
          Thessaloniki International Film Festival, where it won the Audience
          Award (Michael Cacoyannis / Fischer). Its success carried it to
          screenings at international film festivals, where it stood out as an
          uncompromising, atmospheric work, created outside the usual industry
          structures.
        </p>

        <p className="aboutParagraph">
          After his feature debut, Manos continued to explore different forms of
          storytelling through short films such as Strawberries (2019), which
          combined intimate themes with an experimental edge. Beyond his own
          projects, he worked in various capacities within the Greek film
          industry, notably as an assistant director. These experiences allowed
          him to see filmmaking from multiple perspectives — balancing artistic
          vision with the realities of production, learning how to manage teams,
          budgets, and creative processes in a rapidly changing cinematic
          landscape. His style as a filmmaker is marked by a fascination with
          psychological tension, hidden emotions, and the blurred line between
          reality and illusion. Whether working with micro-budgets or more
          structured productions, Manos approaches cinema as both craft and
          experiment, constantly searching for new ways to translate inner
          states into visual and emotional experiences for audiences.
        </p>
        <p className="aboutParagraph" style={{ fontWeight: "bold" }}>
          Current work
        </p>
        <p className="aboutParagraph">
          Since 2020, Manos has been living in Gothenburg, Sweden, where he
          works as a software developer and serves as CTO at a Legal Tech
          startup. His journey into technology may seem far from cinema, but in
          practice it reflects the same qualities that drove his film career:
          problem-solving, creativity, and the courage to build something new
          from scratch. In Sweden, he has been combining his technical expertise
          with his artistic background, moving fluidly between the precision of
          code and the imagination of storytelling. While his professional focus
          is currently in software and digital innovation, Manos continues to
          develop new film ideas and projects, staying connected to cinema as
          both an art form and a lifelong passion. For him, the two worlds —
          film and technology — are not separate, but complementary. His
          experience in engineering and coding sharpens his structured approach
          to filmmaking, while his sensibility as a director keeps his work in
          tech grounded in human stories and the complexity of real life.
          Looking ahead, Manos envisions projects that merge these worlds:
          cinema made with new tools, and technology informed by narrative depth
          and human perspective. Whether in front of a computer screen in
          Gothenburg or behind a camera on set, his goal remains the same: to
          craft stories that move people and to explore the spaces where art and
          innovation intersect.
        </p>
      </div>
    </div>
  );
}

export default About;
