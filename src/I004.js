import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import './Inqstyles.css';

class I004 extends Component {

  renderEssay = () => {
    return (
      <div className="appear grid-break">
        <h3>
        In continuation of the <Link to='003'>previous essay</Link>, inqstudio hereby presents <i>Battle Royale: Weights and Measures Edition</i>, where the world's remaining measurement systems compete for recognition from a sole arbiter. The metric system may be great for science and post-feudal taxation, but is it <i>universally</i> superior? The best unit for any given job is, in fact, context-dependent. We must act ourselves: what is really being compared, and why is that comparison valuable? How much does our system need to scale? At what level of granularity might we most efficiently communicate useful information? Several units may enter the Thunderdome—but only one may leave.
        <br/><br/>
        TEMPERATURE — Champion: Fahrenheit
        <br/>
        Tell me: if a man is a true believer in all things Science, why doesn't he use Kelvin? It is the official SI base unit, after all—why wouldn't a true scientificist describe the outdoor temperature in the manner of all things cosmic, and in relation to his schooled knowledge of absolute zero? A modern man would step outside briefly in the morning, and return to warn his family: "It's quite cold outside, you know. Might get down to 255 degrees Kelvin!" or, "Blazing hot out there—a real scorcher. It might get up to 310 degrees today," and yet he doesn't. Why? Because he would sound ridiculous; because Kelvin isn't even remotely scaled for human use on a day-to-day basis. Celsius is fine, but no one uses it much past forty degrees—and if you live anywhere north of Florida, you're now dealing with a measurement system that uses negative numbers [a nonstarter as far as I'm concerned]—not very helpful or convenient over the course of a winter. For lack of many other options, Fahrenheit is champion: a system of sensible granularity, without need of decimals (except in the case of fevers). Zero and one hundred represent the extremes of human endurance: in temperatures below zero, or above one hundred, you can reasonably expect a human to die within a few hours without water or shelter. Therefore, in Fahrenheit, the use of the words "negative" or "one hundred and" demand extra effort to communicate vital information that would otherwise be mundane. I have vocalized extra syllables to prevent your death! Not because I am inconvenienced by your measurement system.
        <br/><br/>
        WEIGHT — Champion: Stone
        <br/>
        Pounds probably suffer from being overly granular; no one really needs to know your exact weight in pounds, especially because your weight is likely fluctuating somewhere in a five-pound range. The fact that kilograms are just slightly less granular doesn't make them a whole lot better; if you tell someone you weigh seventy kilos, no one is really visualizing the weight of 70 liters of water—they're thinking about your weight in reference to their own weight, and of people they've observed. This is why the UK system of Stone is the champion for human weight. Why? It is a compact description of a person's <i>weight class</i>, which has already found its ideal use in combat sports. If someone tells you they want to lose three and a half pounds, well, they probably just have mild body dysmorphia—but losing a stone would demonstrate a real change in clothing fit, musculature, and facial definition; they are claiming a desire to move to the <i>next weight class</i>, and honestly, you don't need a whole lot more granularity for human bodies than that.
        <br/><br/>
        HEIGHT AND LENGTH — Champion: Feet and Inches
        <br/>
        Meters were developed with no regard for human proportion—the height of a person might be 1.78 meters, and the height of a room closer to 2.5. The width of a doorway? That'll be zero-point-eight meters, thank you. The metric system absolutely suffers at the human scale, which is why metric users often describe their height in centimeters. Still—180 centimeters is a bizarre level of granularity for height, and decimeters aren't much better: the difference between 17 and 18 decimeters in height is too large a jump to be useful. Give me feet and inches any day; not only is the inch a perfectly reasonable level of granularity, we can also group the vast majority of adults into the five-foot-something range. Children are like, three or four feet tall, but they grow so fast that we get to use the phrase, “My gosh! You've grown a foot since I last saw you!” I don't know what they say in metric, but I guarantee it sounds ridiculous: “You must have grown 30 centimeters!?” I scoff at your obtuse phrasing. The metric system only finds its mark at engineering scales—watches, ball bearings, engine parts. In larger domains, like interior architecture, we benefit from using a base twelve system, where space can be more easily divided into halves, thirds, and quarters.
        <br/><br/>
        VOLUME — Champion: Liters (Probably)
        <br/>
        I'm just going to give it to liters for this one. I still don't fully understand or use gallons, pints, and quarts—and although teaspoons, tablespoons, and cups work well enough in cooking, the fact that they scale upward actually isn't very helpful at all. There are too many to remember, and I don't really need to know that 16 cups equal a gallon—not unless I'm trying to cook for a dozen people. Any line of reasoning I try to make in favor of imperial dry volume measurements begins to sound like a fourth-grade word problem: “Alright, if I want to make forty-eight cupcakes, and a dozen cupcakes require four cups of flour, how many gallons of flour do I need?” Easy—the answer is one gallon—but do they even sell flour by the gallon? Of course not! They sell it by weight, and a two-pound bag of flour yields about six and two-thirds cups. Pathetic.
        <br/><br/>
        AREA — Champion: Hectares
        <br/>
        My ongoing startup project <a href="http://adaptivecity.io/">Adaptive</a> has me reviewing the literature for urban economics, where the hectare has proven to be super useful for measuring and understanding density. The hectare is ideal because it's about the size of a city block, which is oft-repeated in by planners anyway; a Manhattan block actually takes up two hectares, while those in Brooklyn are often exactly one or one-and-a-half. In Paris and Rome, blocks range from about one-half to one hectare. This is, of course, a happy accident: block size has nothing to do with the circumference of the world, and because metric measurements run between orders of magnitude, we are simply lucky that hectares happen to be commensurate. 
        <br/><br/>
        It bears mentioning that hectares are just a little over two <i>acres</i>, which represented the amount of land tillable by one man behind one ox in one day. In the business of farming, for some centuries, you were likely to also use <i>furlongs, oxgangs, virgates,</i> and <i>carucates</i>. All of these measures were specific to oxen and farmland, and immediately helpful for gauging the outputs of your estate.
        <br/><br/>
        HONORABLE MENTIONS:
        <br/>
        <b>Talents:</b> The <i>talent</i> was used for weight by the Mesopotamians in the third millenium BC; I include it here because it used a sexagesimal system, where a talent was equal to 60 <i>minas</i>, which in turn were subdivided into 60 <i>shekels</i>. The talent eventually crossed over into currency as a means of designating large sums of gold and silver, and likewise, the sexagesimal system was so useful and intuitive that Babylonians, Sumerians, Phoenicians, Hebrews, and the Greeks all used some variation on the talent, and with the same subdivisions. The talent should probably be the real winner for weight: a poorly sourced Wikipedia entry claims that the Byzantine emperor Basil II counted his wealth in talents, meaning that the measure was in common use for <i>thousands of years.</i>
        <br/><br/>
        <b>Tonnes:</b> Weight classes for "things that can kill you." A single ton of anything is enough to crush a man; Great White sharks, for instance, weigh about a ton; cars weigh several tons, and elephants are about six.
        <br/><br/>
        <b>Grams:</b> Both the chemist and the drug dealer (who are sometimes one and the same) make skillful use of the gram. However, only the drug dealer is capable of translating between imperial and metric with ease. He might receive drugs in pounds from his distributor, but use grams for distribution. For some drugs, the gram is a perfect portion for human consumption. For others, like weed, an eighth-ounce is ideal for moderate consumption over the course of a week.
        </h3>
      </div>
    )
  }

  render() {
    return (
        <div>
          <Helmet>
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:site" content="@FUTUREDOME3000" />
            <meta name="twitter:title" content="004: At Scale of Men" />
            <meta name="twitter:description" content="In continuation of the previous essay, inqstudio hereby presents Battle Royale: Weights and Measures Edition, where the world's remaining measurement systems compete for recognition from a sole arbiter." />
            <meta name="twitter:image" content="https://www.inqstudio.com/assets/004_card.jpg" />
          </Helmet>
          {this.renderEssay()}
        </div>
    );
  }
}

export default I004;