import React, { Component } from 'react';
import './Inqstyles.css';

class I003 extends Component {

  constructor () {
    super();

    this.state = {
      sources: 
        [{
          article: "'Why Denser Cities Are Smarter and More Productive'",
          source: "(2012) Richard Florida, CityLab",
          link: "https://www.citylab.com/life/2012/12/why-denser-cities-are-smarter-and-more-productive/4049/",
          index: 0,
        }, {
          article: "'Growth, innovation, and scaling, and the pace of life in cities'",
          source: "(2012) Bettencourt et al., Global Institute of Sustainability",
          link: "https://www.researchgate.net/publication/6390858_Growth_Innovation_Scaling_and_the_Pace_of_Life_in_Cities",
          index: 1,
        }, {
          article: "'Zoning in 20th-Century American Cities'",
          source: "(2016) Christopher Silver, Oxford Research Encyclopedia",
          link: "http://oxfordre.com/americanhistory/view/10.1093/acrefore/9780199329175.001.0001/acrefore-9780199329175-e-209",
          index: 2,
        }]
    }
  }

  renderSources = () => {
    return (
      <div className="grid-break">
        <h3>Sources</h3>
      </div> 
    );
  }

  superScript = (int) => {
    const sup = this.state.superLinks[int-1];
    return (
      <sup>
        <a rel="noopener noreferrer" 
           href={sup.link} 
           target="_blank"
           style={{color:"#77c9d4"}}>
          {int}
        </a>
      </sup>
    );
  }
  
  renderEssay = () => {
    return (
      <div className="appear grid-break">
        <h3>
        I.<br/> 
        We get it—you're a scientist. or a lover of science. Anything you might find out of step with the Eternal Metrology must also be anti-science and immediately discarded, and maybe even mocked or chastised along the way.
        <br/><br/>
        After all, the metric system is perfect in its glorification of the essential building blocks of life! The meter: a perfect one-ten millionth of the distance from the equator to the north pole along a meridian. The kilogram: a cubic decimeter of water—also known as a liter. And Celsius: Oh! Tied to the fundamental physical constants of our earthly prison! Zero degrees would represent the exact freezing point of water, and one hundred the boiling. The critical phase changes of matter itself, embedded into our humble lexicon.
        <br/><br/>
        No doubt these are useful measurements, and likewise they have mass appeal; they represent humanity's slow and steady epistemological mapping of our universe. You, reader, see the metric system as our final evolution into a unified and universal standard of measures for scientists and nation-states.
        <br/><br/>
        Of course, we weren't always blessed with the metric system, in fact, most of human history is plagued by lesser systems up until the Enlightenment! One of the first prominent calls for a global standardization of measures came in 1783, from the British inventor James Watt, developer of the Watt steam engine, who envisioned a new system "which might link the density of water to length and mass." This was because Watt found collaboration with other scientific, developed nations significantly more difficult without common units that he could replicate easily. Meanwhile, Ken Alder estimates that people living in pre-revolutionary France (1780's) were using around eight hundred different measurement units, all with definitions that differed between municipalities. Without rigorous standardization—which was also problem in every other country—attempts at cooperation in trade or invention would almost always lose something in translation.
        <br/><br/>
        So far, so good. The world's leading scientists and nation-states agreed that universality would be good for trade and science, and the leaders of the French First Republic formally adopted the metric system in 1792. And yet—the people of France resisted. In fact, the metric system was so unpopular that Napoleon I, after twenty years, lifted the imposition of purely metric means on his people by passage of the mesures usuelles in 1812, which permitted the uses of traditional weights and measures, especially for small merchants (traditional measures were later abolished again in 1839). Why, you might ask, would people resist change in the name of progress? We already established, in the clearest Enlightenment logic, that a new and perfect system would enhance trade among commoners. Who would oppose the metric system out of anything other than ignorance?
        <br/><br/>
        II.<br/> 
        A simple answer is that nineteenth-century peoples were unused to top-down authority propagating down to the level of person-hood. Weights and measures are an extension of our natural use of language—and if we're to believe anything about what linguists have to say, it's that language is not easily changed by outside forces: ask any of the inventors of the many proposals for an English third-person gender neutral pronoun. For the a French peasant, the costs of a mandatory change to their language likely outweighed the benefits of switching to a foreign measurement system—and if you believe they didn't, you're arguing that trade was most certainly hindered by a lack of unified measurements, and implying a somewhat patronizing mistrust for the users and translators of those particular languages, are you not?
        <br/><br/>
        Let's imagine a traveling merchant in France. He takes fifty boisseaus (bushels) of grain from Nice to Lyon every week. Of course, Nice has their own unique take on the boisseau, but our merchant, being familiar with dealings in Nice, knows exactly what a Nice-boisseau looks like. He has formed personal relationships with farmers in Nice, whom he trusts will give him an accurate approximation of a boisseau when he arrives to buy their stock. The boisseau works well in Nice because the majority of the farmers use a wagon of reasonable size, which can be pulled a reasonable distance by a single horse and fits on the narrow dirt roadways in Nice. These wagons carry about ten bushels each; the merchant may even have a outfitted his caravan to more conveniently accommodate these Nice-bushels of grain.
        <br/><br/>
        He arrives each week in Lyon—where they almost exclusively use the minot for dry volumes—but the merchant has known this from his first visit. And likewise he knows and trusts the locals vendors in Lyon just as well as those in Nice. In fact, they already have their own hand-fashioned baskets ready at the markets, each of which are reasonably-sized—and just large enough for a young French woman to fill one up from his caravan and carry it both back to her own wagon. Our merchant doesn't feel the need to nickel-and-dime his patrons (if such a phrase even existed then), nor does he feel the need to impose the Nice-boisseau system on them. One works better for farmers in Nice, the other for families and vendors in Lyon.
        <br/><br/>
        But you, dear reader, lover of science and global trade, must be thinking: "You fool! Of course a merchant would find his own local system perfectly reasonable in his own tiny bubble of existence. He could never know the awesome scale of global trade and manufacturing, of standardized shipping containers and massive cranes lifting them onto gargantuan boats. If he could ever understand the impetuous drive of the future he would embrace it! This man would drive eighteen-wheeled freight from port to port, on smoothly-paved asphalt freeways, and never would he feel alienated from his former primitive, arcadian life!" 
        <br/><br/>
        III.<br/>
        Fair enough—I'll add another layer, containing an even simpler answer for ignoble peasant resistance: taxation. The military engine of the French First Republic and other emerging nation-states needed capital, and thus a more efficient means of extracting taxes from the populace. The metric system provided what no feudal measurement system could ever before: a system that flattened all barriers and connection to the center. A taxman could now carry his metric rule anywhere in the country and extract exactly the amount of taxes due to him. This was much more difficult before; the taxman was not a friend of the people in Nice and Lyon, nor had he established relationships of mutual trust with them; it was in fact substantially less convenient for him to encounter a local system of weights and measures, illegible to his authority, and then derive the true percentage of goods and services he would bring back to Paris. Indeed, informal measures made transacting all the more difficult for the nation-state. The same applied to profits from colonization—if the locals in say, Haiti, were left to manage their own sugar cane outputs in use of a vernacular measurement system, how could their managers be sure they were extracting the right amount for sale back to the motherland?
        <br/><br/>
        IV.<br/>
        If we can establish that the metric system is indeed a more perfect system for certain things—we can also make an argument that there might be measurement systems, unrelated to science and taxation, that might prove themselves more useful, or at least equally valid, on some occasion. No nation ever forced the use of the most perfect language—Esperanto—or the most perfect computer keyboard—the Dvorak—onto its populace, but if they had, would we be so proud as to consider every other language, and keyboard, inferior? Furthermore, what makes a measurement system useful on its own? I contend that the best measurement systems are truly context-dependent. What is being compared, and why is that comparison valuable? How much does the system need to scale, and at what level of granularity, to be most convenient for users who need to communicate useful information quickly and efficiently? As a means of discourse, I hereby present the Olympics of Weights and Measurements for Humans, not Water:
        <br/><br/>
        CATEGORY ONE, TEMPERATURE:
        <br/>
        Tell me: if a man is a true believer in all things Science, why doesn't he use Kelvin? It is the official SI base unit, after all—why wouldn't a true scientificist describe the outdoor temperature in the manner of all things cosmic, and in relation to his schooled knowledge of absolute zero? A modern man would step outside briefly in the mornings, and return to warn his family: "It's quite cold outside, you know. Nearly 255 degrees Kelvin!" or, "Blazing hot out there, you wouldn't believe. It might get up to 310 degrees today," and yet he doesn't. Why? Because he would sound ridiculous—because Kelvin isn't even remotely scaled for human use on an day-to-day basis. Celsius is fine, but no one uses it much past thirty degrees—and if you live anywhere north of Florida, you're now dealing with a measurement system that uses negative numbers (a nonstarter as far as measurements systems are concerned), which is not very helpful or convenient over the course of a winter. As you might imagine from the title of this essay, Fahrenheit emerges the true victor; a system of sensible granularity, without need of decimals. Zero and one hundred represent the extremes of human endurance: in temperatures below zero, or above one hundred, you can reasonably expect a human to die within a few hours without water or shelter. In Fahrenheit, the use of the words "negative" or "one hundred and" demand extra effort to communicate vital information that would otherwise be mundane. I am producing extra syllables to prevent your death! Not because I am inconvenienced by your measurement system.
        <br/><br/>
        CATEGORY TWO, WEIGHT:
        <br/>
        Pounds probably suffer from being overly granular; no one really needs to know your exact weight in pounds, especially because your weight is likely fluctuating somewhere in a five-pound range. The fact that kilograms are slightly less granular doesn't make them a whole lot better. If you tell someone you weigh seventy kilos, no one is really visualizing 70 liters of water. This is why the UK system of stone is the champion for Human Weight. Why? It is a compact description of a person's weight class, which has already found its ideal use in combat sports. If someone tells you they want to lose three and a half pounds, well, they probably just have body dysmorphia, but losing a stone would demonstrate a real change in clothing fit, musculature, and facial definition. They are claiming a desire to move to the next weight class, and honestly, you don't need a whole lot more granularity for human bodies than that.
        <br/><br/>
        CATEGORY THREE, HEIGHT AND LENGTH:
        <br/>
        Meters were developed without regard to human height—the height of a person might be 1.78 meters, and the height of a room closer to 2.5 meters. The width of a doorway? That'll be point-eight meters, thank you. The metric system absolutely suffers from a problem of human scale, which is why metric users will describe height in centimeters. Still—180 centimeters is a bizarre level of granularity for height, and decimeters aren't much better: the difference between 17 decimeters and 18 decimeters in height is too large of jump to be useful. Feet and inches reign supreme; not only is the inch a reasonable level of granularity between humans, we can group the vast majority of adults into the five-foot range. Children are like, three or four feet tall, but they grow so fast that we get to use the phrase, "My gosh! You've grown a foot since I last saw you!" I don't know what they say in metric, but I guarantee it sounds ridiculous. "You must have grown 30 centimeters!" just doesn't have the same ring. The metric system is really best for an engineering scale—watches, ball bearings, and engine parts. Anything larger, like interior architecture, benefits from base twelve or base sixteen measurement systems, where components are easily divided into halves, quarters, and eighths. 
        <br/><br/>
        CATEGORY FOUR, VOLUME:
        <br/>
        I'm just going to give it to liters for this one. I still don't fully understand or use gallons, pints, or quarts—and although teaspoons, tablespoons, and cups work well in cooking, the fact that they scale upward isn't very helpful at all. I don't really need to know that 16 cups equal a gallon—not unless I'm trying to cook for a dozen people. But any line of reasoning I try to make in favor of imperial dry volume measurements will begin to sound like a fourth-grade word problem: "Alright, if I want to make 48 cupcakes (two trays), and a dozen cupcakes require four cups of flour, how many gallons of flour do I need?" Easy—the answer is one gallon—but do they even sell flour by the gallon? No, of course not; they sell it by weight, and a two pound bag of flour will yield about 6-2/3 cups of flour. Deeply embarrassing.
        <br/><br/>
        HONORABLE MENTIONS:
        <br/>
        <b>Tonnes:</b> Weight classes for cars. We don't really care whether its a short ton or metric, we can basically understand the ton as an order of magnitude for "things that can kill you". We know that a single ton of anything is enough to crush a human; Great White sharks, for instance weigh about a ton; cars weigh several tons, and elephants are about six tons.
        <br/><br/>
        <b>Grams:</b> A drug dealer will make skillful use of grams, and much like our French merchant, is adept at translating between imperial and metric with ease. They'll often receive drugs in pounds or kilos from their own distributor, but use grams as a means of distribution. For some drugs, the gram has perfect granularity for human consumption. For others, like weed, an eighth-ounce is often ideal for moderate consumption over the course of a week.
        <br/><br/>
        <b>Hectare:</b> In my recent study of literature on urban planning and economics, I have taken a liking to the hectare, in particular for measuring and understanding urban density. By using the hectare, you can settle on a relatively round number of people, usually between 100 and 500, per unit. It's large enough to provide an accurate sample size, because it is about the size of a block, which is oft-repeated in city layouts anyway. A Manhattan block actually takes up two hectares, while those in Brooklyn are often exactly one or one and a half. In Paris and Rome, blocks range from about one-half to one hectare. This is, of course, a happy accident. Block size has nothing to do with the circumference of the world, and because metric measurements run between orders of magnitude, we are simply lucky that hectares happy to be commensurate. By contrast: hectares are a little over two acres, which was the amount of land tillable by one man behind one ox in one day. Furlongs, oxgangs, virgates, and carucates were all specific to oxen farming.
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