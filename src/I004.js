import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Inqstyles.css';

class I004 extends Component {

  renderEssay = () => {
    return (
      <div className="appear grid-break">
        <h3>
        As a continuation of <Link to='/003/'>my last essay</Link>, I hereby present <i>The Olympics of Weights and Measures</i>, where the world's remaining measurement systems compete for dominance on the world stage. External to science and post-feudal taxation, there are numerous contexts where the use of alternative units is a regular benefit; likewise, the metric system was not designed at all for humans—but many traditional units were. In general, when determining the best unit we must consider: what is really being compared, and why is that comparison valuable? How much does the system need to scale, and at what level of granularity, to be most convenient for users who need to communicate useful information quickly and efficiently? Let's find out:
        <br/><br/>
        TEMPERATURE — Champion: Fahrenheit
        <br/>
        Tell me: if a man is a true believer in all things Science, why doesn't he use Kelvin? It is the official SI base unit, after all—why wouldn't a true scientificist describe the outdoor temperature in the manner of all things cosmic, and in relation to his schooled knowledge of absolute zero? A modern man would step outside briefly in the mornings, and return to warn his family: "It's quite cold outside, you know. Nearly 255 degrees Kelvin!" or, "Blazing hot out there, you wouldn't believe. It might get up to 310 degrees today," and yet he doesn't. Why? Because he would sound ridiculous; because Kelvin isn't even remotely scaled for human use on a day-to-day basis. Celsius is fine, but no one uses it much past thirty degrees—and if you live anywhere north of Florida, you're now dealing with a measurement system that uses negative numbers [a nonstarter as far as I'm concerned], which is not very helpful or convenient over the course of a winter. Fahrenheit emerges the true victor: a system of sensible granularity, without need of decimals (except in the case of fevers). Zero and one hundred represent the extremes of human endurance: in temperatures below zero, or above one hundred, you can reasonably expect a human to die within a few hours without water or shelter. Therefore, in Fahrenheit, the use of the words "negative" or "one hundred and" demand extra effort to communicate vital information that would otherwise be mundane. I am producing extra syllables to prevent your death! Not because I am inconvenienced by your measurement system.
        <br/><br/>
        WEIGHT — Champion: Stone
        <br/>
        Pounds probably suffer from being overly granular; no one really needs to know your exact weight in pounds, especially because your weight is likely fluctuating somewhere in a five-pound range. The fact that kilograms are just slightly less granular doesn't make them a whole lot better; if you tell someone you weigh seventy kilos, no one is really visualizing the weight of 70 liters of water—they're thinking about your weight in reference to their own weight, and of people they've observed. This is why the UK system of Stone is the champion for human weight. Why? It is a compact description of a person's <i>weight class</i>, which has already found its ideal use in combat sports. If someone tells you they want to lose three and a half pounds, well, they probably just have mild body dysmorphia—but losing a stone would demonstrate a real change in clothing fit, musculature, and facial definition; they are claiming a desire to move to the <i>next weight class</i>, and honestly, you don't need a whole lot more granularity for human bodies than that.
        <br/><br/>
        HEIGHT AND LENGTH — Champion: Feet and Inches
        <br/>
        Meters were developed with no regrad for human height—the height of a person might be 1.78 meters, and the height of a room closer to 2.5. The width of a doorway? That'll be point-eight meters, thank you. The metric system absolutely suffers from a problem of human scale, which is why metric users will describe height in centimeters. Still—180 centimeters is a bizarre level of granularity for height, and decimeters aren't much better: the difference between 17 and 18 decimeters in height is too large of jump to be useful. Feet and inches reign supreme; not only is the inch a reasonable level of granularity between humans, we can also group the vast majority of adults into the five-foot range. Children are like, three or four feet tall, but they grow so fast that we get to use the phrase, "My gosh! You've grown a foot since I last saw you!" I don't know what they say in metric, but I guarantee it sounds ridiculous: "You must have grown 30 centimeters!?" I scoff at your obtuse phrasing. The metric system is really best for engineering scales—watches, ball bearings, engine parts. Anything larger, like interior architecture, benefits from base twelve or base sixteen measurement systems, where components can be easily divided into halves, quarters, and eighths. 
        <br/><br/>
        VOLUME — Champion: Liters (Probably)
        <br/>
        I'm just going to give it to liters for this one. I still don't fully understand or use gallons, pints, and quarts—and although teaspoons, tablespoons, and cups work well enough in cooking, the fact that they scale upward actually isn't very helpful at all. I don't really need to know that 16 cups equal a gallon—not unless I'm trying to cook for a dozen people. But any line of reasoning I try to make in favor of imperial dry volume measurements will begin to sound like a fourth-grade word problem: "Alright, if I want to make forty-eight cupcakes, and a dozen cupcakes require four cups of flour, how many gallons of flour do I need?" Easy—the answer is one gallon—but do they even sell flour by the gallon? Of course not—they sell it by weight, and a two pound bag of flour yields about 6-2/3 cups. Deeply embarrassing.
        <br/><br/>
        AREA — Champion: Hectares
        <br/>
        My latest project, Adaptive City, has had me reviewing literature on city planning and economics, where the hectare proves to be very useful, in particular for measuring and understanding urban density. By using the hectare, you can settle on a relatively round number of people, usually between 100 and 500, per unit. It's large enough to provide an accurate sample size, because it is about the size of a block, which is oft-repeated in city layouts anyway. A Manhattan block actually takes up two hectares, while those in Brooklyn are often exactly one or one-and-a-half. In Paris and Rome, blocks range from about one-half to one hectare; this is, of course, a happy accident: block size has nothing to do with the circumference of the world, and because metric measurements run between orders of magnitude, we are simply lucky that hectares happen to be commensurate. 
        <br/><br/>
        Fun fact: hectares are just a little over two <i>acres</i>, which represented the amount of land tillable by one man behind one ox in one day. In the business of farming, for some centuries, you were likely to also use <i>furlongs, oxgangs, virgates,</i> and <i>carucates</i> when referring to areas of land. All of these measures were specific to oxen and farmland, and immediately helpful for gauging the outputs of your estate.
        <br/><br/>
        HONORABLE MENTIONS:
        <br/>
        <b>Talents:</b> The <i>talent</i> was used for weight by the Mesopotamians in the third millenium BC; I include it here because it used a sexagesimal system, where a talent was equal to 60 <i>minas</i>, which in turn were subdivided into 60 <i>shekels</i>. The talent eventually crossed over into money as a means of designating large sums of gold and silver, and likewise, the sexagesimal system was so useful and intuitive that Babylonians, Sumerians, Phoenicians, Hebrews, and the Greeks all used some variation on the talent, and with the same subdivisions. The talent should probably be the real winner in weight: a poorly sourced Wikipedia entry claims that the Byzantine emperor Basil II counted his wealth in talents, meaning that the measure was in common use for <i>thousands of years.</i>
        <br/><br/>
        <b>Tonnes:</b> Weight classes for cars. We don't really care whether its a short ton or metric, we can basically understand the ton as an order of magnitude for "things that can kill you". We know that a single ton of anything is enough to crush a human; Great White sharks, for instance weigh about a ton; cars weigh several tons, and elephants are about six tons.
        <br/><br/>
        <b>Grams:</b> A drug dealer will make skillful use of the grams; however, he is adept at translating between imperial and metric with ease. He will often receive drugs in pounds or kilos from their own distributor, but use grams as a means of distribution. For some drugs, the gram has perfect granularity for human consumption. For others, like weed, an eighth-ounce is often ideal for moderate consumption over the course of a week.
        </h3>
      </div>
    )
  }

  render() {
    return (
        <div>
            {this.renderEssay()}
        </div>
    );
  }
}

export default I004;