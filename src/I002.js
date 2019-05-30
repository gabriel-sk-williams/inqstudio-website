import React, { Component } from 'react';
import './Inqstyles.css';

class I002 extends Component {

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
        <q>
        In this series of essays, inqstudio explores more precise frameworks for the study of sustainability. We start by taking a soft focus on the normative systems and theoretical underpinnings typically associated with sustainability, examining their shortcomings, and pressing forward on new frameworks for discussion and practical implementation.
        </q>
        <br/><br/>
        The word 'sustainability' carries a lot of weight. When it comes to cities, cars, energy, and environmental policy, it’s on the tip of everyone’s tongue. It’s also somewhat misunderstood—and so embedded in progressive philosophy—that it deserves some analysis to bring its true meaning to light.
        <br/><br/>
        Two major treatments on meaning and language come to mind: one of them would be Immanuel Kant’s Critique of Pure Reason (1781), and the other lies, well, somewhere in the depths of mid-19th century Post-Structuralism. There is some tension between the two systems as we’ll see them here, but they are also two sides of the same coin—and both are also indispensable to having any real discussion about sustainability on local or world stages.
        Should be pretty straightforward, we promise.
        <br/><br/>
        <b>part one: noumena</b>
        <br/><br/>
        Immanuel Kant coined the term noumenon to describe the concepts that represent and categorize the ideas we derived from the world. For instance: according to Kant, we can’t possibly describe every dog on Earth with a single word, but we try anyway. We use the word “dog” when we’re talking about some subset of the Canine family, and most people get the picture, because dogs are pretty common. If a dog walked into your house and you were interacting with it, Kant would say that dog, in particular, was a phenomenon, an actual instance, of the noumenon “dog.”
        <br/><br/>
        So phenomena are the actual instances of things, noumena are the high-level concepts describing them. They're very often the same word, as it was in the case just described. We rely on additional language to instantiate a phenomenon from the noumenon from which it is derived. If someone asked you: “Hey uh, who came over to your house today?”, and you replied: “Dog,” you’d sound nutty—mostly because English sounds ridiculous without articles—but also because you tried to use a general, high-level concept (a noumenon) to describe a real-life phenomenon. We need to use details and all types of explanatory language to elaborate on a phenomenon if the other person wasn’t there to experience the exact same thing you did.
        <br/><br/>
        phenomenon; the "thing-as-it-appears," that strange dog, who entered your home somehow, which      you are petting right now
        noumenon; the "object-in-itself," the concept dog, attempting to describe all dogs, from every universe and from every possible timeline.
        <br/><br/>
        Why is this important? Well, because patriarchy, racism, fake news, fascism, and of course, sustainability are all noumena. We have no perfect collective experience of these concepts, and language—according to Kant—is fundamentally incapable of capturing the true essence of all the phenomena these words are trying to describe. Human experience is but a sliver of reality; language is but a sliver of all possible meaning. The noumenon is unknowable. I might have seen a Norwegian lundehund one time, but you've only ever experienced traditional American breeds; since our subjective experiences color our understandings differently, neither of us have a complete or even parallel understanding of what that noumenon truly represents.
        <br/><br/>
        “Hey uh, why do you think the human experience is fraught with existential despair right now in the face of political extremism, social disconnect, and structural violence against people born lacking significant material advantages?”
        “Dog.”
        <br/><br/>
        Everyone uses these terms differently as a function of their own experience, and likewise, there is a lot of disagreement about the full scope of their meaning. These words describe concepts but they aren’t concrete phenomena. They certainly hint at some universal experience, but never truly communicate a pure, platonic form. Of course, those who experience something like racism many times over have a much more complete understanding of what it looks like; those who haven't struggle to integrate it into their worldview. We live in a world where ignorance appears more rampant, undoubtedly because noumena are moving so freely. People are often right and wrong at the same time.
        <br/><br/>
        With regard to sustainability: it’s a personal least-favorite word of mine, not least for its awkward affixes and general inelegance. The zeitgeist is unwilling to acknowledge what a deceptively complex idea it is; instead, it gets compartmentalized and tossed out as a sort of knee-jerk response to things like Republican deregulation and anything perceived as not being explicitly pro-environment. More on this later.
        <br/><br/>    
        <b>part two: post-structuralism</b>
        <br/><br/>
        Almost two hundreds years later, in the early 1900’s, philosophers started looking more closely at language and meaning in the context of Structuralism, which discards the idea of universal platonic concepts, and says that we really only understand the meaning of words as they relate to other words. No concept is original; it merely inhabits pre-existing structures. We can’t understand the concept of democracy without building onto the structure of the word government, which in turn is built onto so much extant scaffolding: violence, collective decision-making, human social relations, etc.
        <br/><br/>
        Some decades later, the French Post-Structuralists of the 1960’s came along and deconstructed Structuralism itself. A good explanation comes from Corey Mohler:
        “Post-structuralism is an internal, structuralist critique of structuralism itself. [Derrida] claims that even the structure of the words is not adequate to understand the meaning of a word, since the meaning of a word always depends on its context, both current and historical, and that context is never stable. Therefore it is impossible for words to have fixed meanings or be understood completely.”
        <br/><br/>
        Post-structuralism, therefore, injects new layers into our collective conception of “sustainability.” As far as language is concerned, older proxies—rainforest destruction, the “hole in the ozone,” acid rain, global warming—have generally been discarded in worldly discourse in favor of “climate change.” The politic landscape is changing too; Tesla is arguably the most powerful private company ever to take the reigns on sustainability, whereas the American parties are polarizing more than ever before. Whose policies are genuinely helpful, and whose actions are concerned more with garnering votes and capital? Who is simply paying lip service to popular conceit?
        <br/><br/>
        Communication is rendered all the more difficult by the personalized meanings we attach to the words we use; they are not only context-dependent, but dependent on the individual using them. In a post-structuralist world—context, connotation, power, hierarchy, and even enunciation collide when we try to agree on new ideas and their place in society.
        Is it even possible to agree on what “sustainability” really even means? We all have some vague ideas, sure, but there is very little social value in going the extra mile to really talk or learn about it. One may find some great broad-scope ideas in McDonough’s Cradle to Cradle, but the time required to chug through The Journal of Industrial Ecology every month is simply not worth the effort. As a result, meaningful discussion on the whole is reduced to overt simplifications and virtue signaling. What gives?
        part three: a sustainable definition
        <br/><br/>
        <b>part three: a sustainable definition</b>
        <br/><br/>
        There are ideas in game theory advancing the notion that a democracy, over time, will tend toward ignorance. Since you, on an individual level, gain very little value from researching all the votes your Senator made last year, you’re better off choosing a side based on 1) your personal values and 2) as a means of maintaining credibility within your social circle (which is how most of us choose a political stance, anyway). No need to change your vote based on critical research—just find an media outlet that generally aligns with your worldview, and it’ll happily confirm your biases every time you tune in. After a while, you’ll barely need to do any real intellectual soul-searching at all—about half the country will generally agree with you anyway. All you have to do is posture defiantly when the other team signals the wrong thing.
        <br/><br/>
        Since sustainability is currently associated with the progressive side of the political spectrum, environmental issues are much more polarized than they should be, and the complexities of a nascent science are reduced to virtue signaling about what needs be done. Those on the left are inclined to believe in sustainability as a matter of factual imperative, while those on the right are inclined to reject it on the basis of conservative values.
        <br/><br/>
        There is both a general failure to agree on what sustainability is, but also how to get there, and we lack a certain diversity of ideas on the issue. Black-and-white ultimatums are met with empirical skepticism; some say that climate change will bring the apocalyptic destruction of civilization as we know it; others believe that we could very easily adjust to changes in climate. What exactly are we sustaining, with sustainability? The “environment,” or our quality of life? Which is more important, and which is more tightly integrated into our definition?
        <br/><br/>
        In 2018, it feels as if no one has much to say about sustainability, beyond “making sure the Earth doesn’t get a few degrees hotter, at all costs” but certainly—a number of intellectuals have made an attempt at defining the term. The most famous, in academic circles, was offered in 1987 by the Brundtland Commission, a committee appointed by the UN as means of rallying countries together on the issue:
        <br/><br/>
        <i>
        "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs."
        </i>
        <br/><br/>
        We find a number of problems with this definition, not least, firstly, that it reduces sustainability to a human-centric resource-allocation problem. Secondly: “future generations”? How many? Are we talking about the next fifty years or the next fifty generations? Time is left open-ended, and every following measure of sustainability breaks down. Should we be striving to create sustainable Earthly systems until the Sun explodes? If so, what are the real barriers and goals associated with humanity meeting its own basic needs until solar collapse?
        <br/><br/>
        While agreeing on a definition is half the battle—the other half really is figuring what to do about it. Sustainability is popularly conceived as a problem of policy, which is why politics tends to bubble to the surface in these essays. Sustainability is indeed a problem of collective-decision making, complete with coercion, data analysis, free-rider problems, and old-fashioned public debate. We’ll do our best to come to progressively more refined conclusions; you can just keep on virtue-signaling.
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

export default I002;