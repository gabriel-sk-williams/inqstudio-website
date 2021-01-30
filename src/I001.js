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
        },{
          source: "'Biomass dynamics in a Moose Population,'",
          author: "Botkin, Jordan, and Wolfe (1971) Ecology Vol. 52, No. 1. A study on wolf populations in relation to their prey, moose, on Michigan’s Isle Royale National Park, where the authors found an antithesis to natural equilibrium: population counts for either species, swinging wildly between prosperity and near-starvation.",
        },{
          source: "'Paradise Lost: Biosphere Retooled as Atmospheric Nightmare,'",
          author: "William J. Broad (1996) New York Times",
        },{
          source: "'Global Lithium Availability,'",
          author: "Gruber et al. (2011) Journal of Industrial Ecology Vol. 15, Issue 5",
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
    return <sup>{int}</sup>;
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
        <br/>
        I.<br/>
        The modern conception of an 'ecosystem' is relatively new. The term only first appeared in Oxford's Ecology journal in 1935, in a publication titled <i>The Use and Abuse of Vegetational Concepts and Terms.</i> The essay, written by English botanist Sir Arthur George Tansley, is recognized as the originating force behind the idea that organisms and plant life are part of greater self-regulating systems—"ecosystems"—which form the “basic units of nature.” A theory of an 'ecological system' may seem like a natural idea now, but it was Tansley who first gave it name and scope, and therefore the basis for study in the name of Science. Nearly everything else had been reduced to some systemic theory by then, in accordance with various rational principles; Nature was merely one of several remaining frontiers. Tansley writes:
        <br/><br/><i>"...the constant interchange of the most various kinds within each system, not only between the organisms but between the organic and the inorganic. These </i>ecosystems,<i> as we may call them, are of the most various kinds and sizes. They form one category of the multitudinous physical systems of the universe, which range from the universe as a whole down to the atom. <br/><br/> The whole method of science, as H. Levy has most convincingly pointed out, is to isolate systems mentally for the purposes of study, so that the series of isolates we make become the actual objects of our study, whether the isolate be a solar system, a planet, a climatic region, a plant or animal community, an individual organism, an organic molecule or an atom. Actually the systems we isolate mentally are not only included as parts of larger ones, but they also overlap, interlock and interact with one another. The isolation is partly artificial, but is the only possible way in which we can proceed."{this.super(1)}</i><br/><br/>
        The rest is what we call history. "Vegetational Concepts" became, according to popular legend, the fertile topsoil for the science of Ecology and its subsequent offshoots. Ecosystems theory is still taught in public schools today. No doubt you have already imagined by now a textbook diagram in your head: the sun, the soil, some grass, and certainly some type of animal taking the time to defecate and pass its nutrients along to the greater Cycle of Nature.
        <br/><br/>
        Tansley's ecosystem theory rendered Nature legible, above all else—and what is scientific knowledge if not a task of legibility? It is a process of observation, analysis, and cataloguing of all the elementary components of the planet—physical, chemical, biological—which underwrite our mastery of progressively more complex systems. Science is not only a method for understanding the world, but for shaping the world itself to conform to human observation. Through Science, Man compels the world to his will.
        <br/><br/>
        II.<br/>
        Is there a beast of Science yet we fail to subjugate? A single canon which Man, having both the determination and value-imputed capital, has left unfinished in spite of himself?
        <br/><br/>
        There seems to be one, in any case: when are we going to tackle climate change?
        <br/><br/>
        Sure, we all give our best individual efforts—cycling, <i>re-</i>cycling; we purchase energy-efficient bulbs and locally source our coffee. I have personally done my part to shame the unenlightened on Twitter, as many others have done—but the real work of building a better world remains to be done. At this point we're just kind of waiting around for the massive engine of the Industrialized First World to kick into gear and start doing something sustainable.
        <br/><br/>
        The Science is there, certainly. There is another diagram out there somewhere, about how its going to take much more than individual action to make a dent. The components of global climate catastrophe are clearly delineated therein: we've got "consumer capitalism" at the top, with all its factories and overwrought shopping malls. Connected to that, we have emissions and externalities: carbon dioxide, pollution, deforestation, among other offenders, arranged in a semicircle. From there we have arrows pointing to all the second-order effects, and more arrows connecting <i>those</i> effects to some harrowing representation of a post-apocalyptic Earth. If it's a thorough diagram, "The Greenhouse Effect" will be included in proper diagrammatic form, alongside "Extreme Weather Events" and its requisite iconography.
        <br/><br/> 
        If only our politicians were so enlightened as to understand how clearly the problems map to the solution. If only they too spoke the language of Science, the modern nation-state might administer the consecutive and decisive blows to global warming—some combination of carbon taxation, renewable energy subsidy, and elite sustainability summits.
        <br/><br/>
        In addition: <i>obviously</i>—we should drive electric cars to consume less oil and produce fewer emissions; <i>of course</i> we should build more energy-efficient buildings and walkable cities. We should encourage the good type of growth, not the bad kind, and everything should be powered by wind and sun. Go forth and vote! Recycle your plastics! Our singular goal, as directed by Science, is the reduction of carbon emissions, which in turn will slow the heating of the earth and return our planet to its natural state of equilibrium. Our technology will mimic the flows of the natural world—like ecosystems, if you will—where waste and consumption flow together in cyclical harmony.
        <br/><br/>
        III.<br/>
        By the 1970's ecologists were pushing increasingly large data sets into FORTRAN, as a means of relating <i>"the computational complexities involved in testing alternative schemes of harvest and management... unmanageable without a computerized model to calculate the dynamics of population and biomass."</i>{this.super(2)} Tansley's models have proven too primitive, and ecosystems largely illegible. Where we thought we might find balance, we found volatility instead—and it didn't make any reducible sense, not yet, and not with any of the clarity we had come to expect from other fields. Ecology soon transmuted its own ethos, and a new field was borne out of the old. Now it was called "Systems Ecology," which sought to feed massive repositories of environmental minutiae into computers to form “a holistic view of the interactions within and between biological and ecological systems.” If the scientific method was to be trusted (and it should be), then no system was truly beyond comprehension. When rudimentary models were insufficient, one need only add more data to produce a more perfect formula.
        <br/><br/>
        As global environmental movements gained steam, so too did scientific funding. Systems Ecology bore another offshoot in the 1980's, with sharper focus on "sustainability"—also a relatively new term. "Industrial Ecology," now, had similar scope and processes as before, but this time dedicated moreso to carbon accounting than to biomass. Now you had industrial ecologists carefully measuring the inputs, outputs, and relations between factory and firm, rather than wolf and moose, but nevertheless with the ultimate goal of deriving a clarifying model.
        <br/><br/>
        Was the science not ready by the next decade? The ecological scientific community received funding to build its own self-contained ecosystem, the BioSphere II, in Oracle, Arizona, with its first long-term experiment set to run from 1991 to 1993. BioSphere II represented the apotheosis of ecological inquiry; if it could support four scientists inside its glass dome enclosure—within a self-contained <i>ecosystem</i>—and do so easily, then Ecology could finally join validated ranks of complete and modern science.
        <br/><br/>
        The project was nonetheless a resounding failure. The atmosphere inside the dome suffered rampant CO2 fluctuations; nitrous oxide levels steadily rose as oxygen levels fell, from 21 to 14 percent. Most of the vertebrates and pollinating insects in the dome soon died, and the cockroach population exploded. By 1993, millions of Arizona's native longhorn crazy ants had ascended to dominance, and they had eaten through the outer walls of Biosphere II at its conclusion.{this.super(3)}
        <br/><br/>
        IV.<br/>
        It's not so easy to simply engineer a sustainable future—because much like the BioSphere, in retrospect, there is mounting evidence that sustainability is 1) far more complex than we currently give credit, and 2) nigh impossible to implement successfully at almost any reasonable standard. The darkest numbers—representing consumption, waste, temperature—continue to march ever upwards. There is no real evidence that a truly sustainable world is anything more than a modern-day myth.
        <br/><br/>
        For now, the established dogma for contesting global climate change is a set of lukewarm ideas at best. Some are champions for solar panels, which demand such enormous energy inputs that they might never make up their original carbon investment. Renewable energy in general is often highly dependent on regional conditions, with scant infrastructure in place to transfer energy efficiently over long distances. Meanwhile, American cities are full-blown ecological disasters, beginning and ending with our reliance on the personal automobile. The American car industry lobbied its way into dominance from the 1940’s, and with the assistance of Eisenhower’s Cold War America, exacted a political <i>coup de grace</i>: the Interstate Highway Act of 1954. From then on, the American way of life was literally cemented into place. The new highway systems bulldozed through minority-owned communities and exploded outwards into middle-class suburbia. Today’s most fashionable response, the electric vehicle, still devotes two tons of steel to every purchaser and relies on conventional battery storage—a massive resource sink in its own right. The widespread adoption of electric vehicle batteries would require massive lithium imports from large-scale mining operations in underdeveloped countries, which may or may not possess enough reserves to last the next 80 years.{this.super(4)} Even then, two-thirds of the energy used to charge electric vehicles is derived from coal or natural gas anyway.
        <br/><br/>
        ...
        <br/><br/>
        The ancients conceived of a Gordian Knot, so twisted and complex as to be impossible to untie. Should anyone arrive claiming to be Alexander, to tell us we can simply slice right through it—should we believe them? How can we reasonably evaluate so noble a document as the Paris Agreement, where the industrialized nations of the world contribute $100 billion per year to impoverished ones in pursuit of the Truly Sustainable, having no stake in the outcome, and with the unassailable faith that so much wealth could never be squandered.
        <br/><br/>
        Is there a chance we reckon with the impossible? There were Renaissance inventors who became obsessed with the possibility of creating a <i>perpetuum mobile</i>—a perpetual motion machine. Did they ever stop to consider the limits of their own knowledge, and their place in history? Have we ever stopped to think about ours? We likely should. There <i>are </i>limits—not just to Science, or State capacity—but there are also frontiers. We'll be exploring both.
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