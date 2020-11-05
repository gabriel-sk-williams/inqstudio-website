import React, { Component } from 'react';
import './Inqstyles.css';

class I003 extends Component {

  constructor () {
    super();

    this.state = {
      sources: 
        [{
          source: "",
          author: "Apparently it's a 27'x27'x27' cube. No, I will not convert that to metric.",
          index: 0,
        },{
          source: "'The Measure of All Things,'",
          author: "(2002) Ken Alder",
          index: 1,
        },{
          source: "'Seeing Like A State: How Certain Schemes to Improve the Human Condition Have Failed,'",
          author: "(1999) James C. Scott",
          index: 2,
        },{
          source: "",
          author: "Always looking to recommend Paul Farmer's 'Structural Violence' for a thorough analysis of France's historical domination in Haiti.",
          index: 3,
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
        <i>
        That's right kids, today's essay is all about units! Of measurement! Despite what you've been told in school, the metric system is not always perfect. Alternative units and systems can sometimes provide superior utility in the appropriate context. If you recoil at the mere mention of imperial or even vernacular measurement systems, this essay is for you—the dogmatic acolytes of metric.
        </i>
        <br/><br/>
        I.<br/>
        Really—the metric ton of CO2 has got to be one of the worst ways to conceive of pollution. The weight of gas isn't useful to anyone! I have no idea what a ton of gas looks like—nobody does.{this.super(1)} I mean, I get it—rendering greenhouse gases as some massive abstract cube in the sky is some attempt at reinforcing the <i>gravity</i> of climate change. But the way we actually measure climate change—in degrees—doesn't seem much better! All the varied and complex systems existing on this Earth, and we reduce it all to the chunkiest of units." <i>Two</i> degrees of global warming, you say!? How massive! An unimaginable increase. Apocalyptic, in fact, two degrees of anything!" A scientist emerges, sweating, from the lab, two fingers upright. We wonder why there are so many skeptics. But—if we're to respect the work of most scientists, two degrees is likely a real threat—just not a great way to signal our impending doom. We can barely even feel a difference of two degrees, much less understand the damage it will do.
        <br/><br/>
        In matters of suitability, the metric system does, in fact, fall short! I'm not arguing that the American Imperial system is somehow universally superior (although sometimes it really is), nor is this an attempted takedown of science and their units. For many applications, metric is likely the best option! But to make the metric system our singular, universal measurement system destroys the potential usefulness of alternative units—especially in situations where scale and relevance are paramount, but unserved by metric at that order of magnitude.
        <br/><br/>
        II.<br/>
        I can hear someone wailing: "But the metric system is perfect in its glorification of the essential building blocks of life: The meter! A perfect one-ten millionth of the distance from the equator to the north pole along a meridian. The kilogram! A cubic decimeter of water. And oh, Celsius! Tied to the fundamental physical constants of our earthly prison! Zero degrees would represent the exact freezing point of water, and one hundred the boiling. The critical phase changes of matter itself, embedded into our humble lexicon."
        <br/><br/>
        We weren't always blessed with the metric system: in fact, most of human history was plagued by <i>lesser</i> systems until the Enlightenment. One of the first prominent calls for a global standardization of measures came in 1783, from the British inventor James Watt—developer of the Watt steam engine—who envisioned a new system, one "which might link the density of water to length and mass." This was because Watt found collaboration with other scientific nations significantly more difficult without common units, especially those he could not easily replicate. He wasn't at all misguided: the people of pre-revolutionary France were using around eight hundred different measurement units,{this.super(2)} all with definitions that differed between municipalities. Without rigorous standardization, attempts at trans-national cooperation were very likely to lose something in translation.
        <br/><br/>
        The world's leading scientists and nation-states agreed: universal measures would be good for trade and science. The leaders of the French First Republic formally adopted the metric system in 1792. And yet—the people of France resisted. In fact, the metric system was so unpopular that Napoleon I, after twenty years, lifted the imposition of purely metric means on his people by passage of the <i>mesures usuelles</i> in 1812, which permitted the use of traditional weights and measures, especially for small merchants. <i>Mesures usuelles</i> were permitted until 1839, when they were again abolished in the name of progress.
        <br/><br/>
        Intellectuals and emperors alike were certain that a new and perfect system would enhance trade. We can be sure it did so for science—but why would the common folk resist? Who would oppose the metric system out of anything other than ignorance?
        <br/><br/>
        III.<br/> 
        One simple answer is that nineteenth-century peoples were unused to top-down authority; the modern nation-state was only beginning to flex its muscles at the individual level. Weights and measures are, after all, an extension of our natural use of language, and therefore might not so easily be changed from the outside (see any proposal for an English gender-neutral pronoun). For the French peasant, the cost of a mandatory change to their <i>language</i> likely outweighed the benefits of switching to an alien measurement system.
        <br/><br/>
        We can easily imagine a traveling merchant in France, who takes fifty <i>boisseaus</i> (bushels) of grain from Nice to Lyon every week. Nice has their own local measurement units, but our merchant, being familiar with dealings in Nice, knows exactly what a Nice-boisseau looks like. He has formed personal relationships with farmers in Nice, whom he trusts will give him an accurate approximation of a <i>boisseau</i> when he arrives to buy their stock. Furthermore, the <i>boisseau</i> works well in Nice because the majority of the farmers use a wagon that can be pulled by a single horse and fits on the city's narrow dirt roadways. These wagons may have carried a solid ten bushels each, but in metric they now carry 126.9528 litres—and how widely available were precise metric containers back then anyway?
        <br/><br/>
        The merchant arrives each week in Lyon—but here, they almost exclusively use the <i>minot</i> for dry volume. The merchant, of course, has known this from his first visit, and likewise he knows and trusts the local vendors in Lyon just as well as those in Nice. In fact, the market-goers already have their own hand-fashioned baskets ready at the markets, each of which are just large enough for a young French woman to fill from his caravan and carry it back home. Our merchant doesn't feel the need to nickel-and-dime his patrons (if such a phrase even existed then), nor does he feel the need to impose the Nice-boisseau system on them. One works better for farmers in Nice, the other for families and vendors in Lyon.
        <br/><br/>
        Lovers of science and global trade now shout, veins throbbing and spittle accumulating at the mouth: "You fool! Of course a merchant would find his own local system perfectly reasonable, in his own tiny bubble of existence. He could never know the awesome scale of global trade and manufacturing, of standardized shipping containers and massive cranes to lift them onto cargo ships. If he could ever understand the impetuous drive of the future he would embrace it! This man would drive eighteen-wheeled freight from port to port, on smoothly-paved asphalt freeways, and never would he feel alienated from his former primitive, arcadian life!" 
        <br/><br/>
        IV.<br/>
        An even simpler answer for ignoble peasant resistance is taxation; the military engine of the French First Republic and other emerging nation-states needed capital, and thus a more efficient means of extracting taxes from the populace. The metric system provided what no feudal measurement system ever could before: a system that flattened all barriers to the administrative center.{this.super(3)} The tax man could now carry a metric rule anywhere in the country and obtain exactly his taxes due. This had been much more difficult in a vernacular world: the taxman was not a friend of the people in Nice and Lyon, nor had he established relationships of mutual trust with them; it was, in fact, substantially less convenient for him to encounter a local system of weights and measures—illegible to his authority—and derive the real percentage of goods and services he would take back to Paris. Indeed, informal measures made extraction all the more difficult for the nation-state. The same applied to profits from colonization: if the locals in say, Haiti, were left to manage their own sugar cane outputs by use of indigenous measurement, how could their controllers be sure they were returning the maximum possible product to the motherland?{this.super(4)}
        <br/><br/>
        No nation ever forced the use of the most perfect language—Esperanto—or the most perfect computer keyboard—the Dvorak—onto its populace, but if one had, would they be so proud as to consider every other language, and keyboard, inferior? We do so with metric. In my next essay we'll dive a little deeper into why I like certain units better than others. Until then!
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

export default I003;