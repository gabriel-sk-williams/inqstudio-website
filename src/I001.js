import React, { Component } from 'react';
import './Inqstyles.css';

class I001 extends Component {

  constructor () {
    super();

    this.state = {
      sources: 
        [{
          source: "'The ecosystem: an evolving concept viewed historically,'",
          author: "AJ Willis, (1997) Function Ecology",
          index: 0,
        },{
          source: "'Biomass dynamics in a Moose Population,'",
          author: "Botkin, Jordan, and Wolfe (1971) Ecology Vol. 52, No. 1",
          index: 1,
        },{
          source: "'Paradise Lost: Biosphere Retooled as Atmospheric Nightmare,'",
          author: "William J. Broad (1996) New York Times",
          index: 2,
        },{
          source: "'Global Lithium Availability,'",
          author: "Gruber et al. (2011) Journal of Industrial Ecology Vol. 15, Issue 5",
          index: 2,
        }]
    }
  }

  renderSources = () => {
    return (
      <div className="grid-break">
        <h3>Sources:</h3>
        {
          this.state.sources.map((src, i) => (
            <h3 key={i}>
              {i+1}{" "}—{" "}
              <i>{src.source}</i>{" "}
              {src.author}<br/><br/>
            </h3>
          ))
        }
      </div> 
    );
  }

  super = (int) => {
    return ( <sup>{int}</sup> );
  }
  
  renderEssay = () => {
    return (
      <div className="appear grid-break">
        <h3>
        <q>
        Oh ye seekers after perpetual motion, how many vain chimeras have you pursued? Go and take your place with the alchemists.
        </q>
        <br/>
        <p className="tab">—Leonardo da Vinci, 1494</p>
        <br/><br/>
        I.<br/>
        The term 'ecosystem' first appeared in a 1935 publication titled <i>The Use and Abuse of Vegetational Concepts and Terms.</i> The essay, written by Arthur Tansley, is recognized as the first to theorize the idea that organisms and plant life are part of greater self-regulating systems—ecosystems—which form the “basic units of nature.” He further noted that “there is a constant interchange of the most various kinds within each system, not only between the organisms but between the organic and inorganic.”{this.super(1)}
        <br/><br/>
        It's no oversimplification to say that his work became the foundation for the science of ecology and subsequent offshoots; ecosystem theory is still taught in public schools today. In retrospect, Tansley's work is a quintessential byproduct of Enlightenment thinking: Man, having fully catalogued the elementary components of his world via biology, chemistry, and physics, can go on to master more complex systems by mapping and linking their constituent parts. For the Modern man, "mastery" was merely a task of legibility: the process of shaping the world to conform to his scientifically-driven worldview. The scientific method created the means for Man to compel the world to his will. Yet, among the few remaining systems we have failed to subjugate, climate change remains a slippery beast. Despite our best individual efforts—recycling, bicycling, buying energy-efficient bulbs, protesting on Facebook—the specter of global warming remains a menace, one that finds its home in a bleak and seemingly unavoidable future. Balanced atop a temporal fulcrum point, history might tip in the wrong direction if no action is taken. But how does one fight the future?
        <br/><br/>
        Prevailing strategic theory would seem entrenched in the same mindset as the mid-century ecologists, outlining the culpable agents of global climate catastrophe—carbon, smog, deforestation—and arranging them into an archetypal diagram: a superhot post-apocalyptic Earth in the center, and all of its causal components percolating into it. With the components of our demise neatly arranged, we can, from the top down, begin to oversee our solutions from an omniscient perspective. From that ivory tower, individual action would be insufficient; we are convinced that the nation-state is the only entity capable of administering the remedy—for without carbon taxes, subsidies for renewable energy, and elite bi-annual sustainability summits, capitalist consumerism would surely become the engine of our own destruction.
        <br/><br/>
        Thus our answer to global warming is easily organized into legible points of attack: we should drive electric cars to consume less oil and produce fewer emissions; we should build more energy-efficient buildings and walkable cities; everything, if possible, should be powered by clean, renewable energy. Recycle your plastic! We might accomplish the now singular goal of reducing carbon emissions, which in turn will slow the heating of the earth and return our planet to its natural state of balance. We like to believe that our technologies, and the worldly systems they affect, should mimic the flows of the natural world—an ecosystem, if you will—where waste and consumption flow together in cyclical balance. One might detect some hubris in our faith; a deeper look at our convictions reveal some unseemly demons.
        <br/><br/>
        II.<br/>
        By the 1970’s, more advanced ecological studies revealed that the natural systems we believed to be held in arcane balance are, in fact, violently unpredictable. In 1971, an ecologist named Daniel Botkin composed a study on wolf populations in relation to their prey, moose, on Michigan’s Isle Royale National Park. His findings contradicted prevailing wisdom: rather than a state of equilibrium, Botkin found that population counts for either species swung wildly between prosperity and near-starvation.{this.super(2)} A happy, holistic balance, endemic to our perception of the natural world, was nowhere to be found.
        Subsequent studies by other ecologists unveiled incomprehensible complexity where once we had settled for gross simplification. The scientific community began to redevelop Tansley’s primitive models for ecosystems, giving way to a new field, Systems Ecology, which sought to feed massive repositories of environmental data into computers to form “a holistic view of the interactions within and between biological and ecological systems.” This was driven, of course, by the underlying notion that no system was truly beyond comprehension—if early, rudimentary models were insufficient, one need only add more data to produce a more perfect formula.
        <br/><br/>
        By 1987, the ecological community sought to design and build its own self-contained ecosystem: BioSphere II, in Oracle, Arizona. Its first long-term experiment ran from 1991 to 1993, seeking to support four scientists within its glass dome enclosure. The project suffered rampant CO2 fluctuations; nitrous oxide levels steadily rose, while oxygen levels fell from 21 to 14 percent. After most of the vertebrates and pollinating insects died, the cockroach population inside the dome exploded. By 1993, millions of Arizona's native longhorn crazy ants had ascended to dominance, eventually eating through the outer walls of Biosphere II.{this.super(3)}
        <br/><br/>
        Some years earlier, in 1989, the term 'Industrial Ecology' had been coined to identify a new science dedicated to sustainability, accounting for the many interlocking systems (factories, energy, transportation) that were central to the emerging dilemma of global warming. This science of sustainability, however, suffers from many of the same issues as classical ecology. In fact, there is mounting evidence that sustainability is 1) widely misunderstood, conceptually, and 2) nigh impossible to implement at a high standard of execution. Creating a perfectly sustainable system is the modern-day myth of a <i>perpetual motion machine</i>; a great Gordian Knot for the Information Age.
        <br/><br/>
        III.<br/>
        For now, the established dogma for contesting global climate change is a set of lukewarm ideas at best. We are champions for solar panels, which demand such enormous energy inputs that they might never make up their original carbon investment; renewable energy is often highly dependent on regional conditions, with little infrastructure in place to transfer energy efficiently over long distances. Meanwhile, American cities are full-blown ecological disasters, beginning and ending with our reliance on the personal automobile. The American car industry lobbied its way into dominance from the 1940’s, and with the assistance of Eisenhower’s Cold War America, exacted their <i>coup de grace</i>: the Interstate Highway Act of 1954. From then on, the American way of life was literally cemented into place; the new highway system bulldozed through minority-driven communities and exploded outwards into middle-class suburbia. Today’s most fashionable response, the electric vehicle, still devotes two tons of steel to every person of driving age; battery storage is inefficient at best—their widespread adoption would require massive lithium imports from large-scale mining operations in underdeveloped countries, which may or may not possess enough reserves to last the next 80 years.{this.super(4)} Even then, two-thirds of the energy used to charge electric vehicles is derived from coal or natural gas anyway.
        <br/><br/>
        An impossible knot indeed; the world elite would have you believe they can simply slice right through it! If only every country agreed to the Paris Summit, we richer countries might pour $100 billion per year into impoverished ones, having no stake in the outcome, and with the faith that so much wealth is impossible to squander, especially when the constituency overwhelming supports its redistribution.
        <br/><br/>
        This isn't to say that people who support measures for sustainable progress are wrong—pushing for reformations with hopes of improving the well-being of future generations is, by any agreeable measure, a morally <i>good</i> thing. Scientists are vital engineers in this process, but not the visionaries we might actually need. Industrial ecologists derive their credibility from pure mathematics, but not from any other rigorous philosophy, and—all the same—sustainability may be a myth, and the sentiment that human society might exist in perfect harmony with the Earth, a fantasy. The State will not save the world, and science might not either. The Earth itself is its own engine of disruptive innovation: by seeing it otherwise, our generation seeks to create a perpetual motion machine for the Modern Age.
        </h3>
      </div>
    )
  }

  render() { 
    return (
      <div>
          {this.renderEssay()}
          {this.renderSources()}
      </div>
    );
  }
}

export default I001;