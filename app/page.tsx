import Image from 'next/image'

// Assets
import CO2Slider from './components/co2Slider';
import oppose from 'app/assets/oppose.png';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Persuation | Deception
      </h1>
      <div className="name">By Ian Lee</div>
      <br></br>

      <p className="mb-4 normal">
        {`
        Visualizations often blur the line between truth and misrepresentation as they are reflections of their creators' narratives. In this analysis,
        we explore the Monthly Atmospheric Carbon Dioxide Concentration dataset from IMF (Internal Monetary Funds) and create two visualizations representing the two ends of an opinion.`}
      </p>

      <div className="big">
        Dataset
      </div>
      <hr className="solid-line"></hr>


      <p className="mb-4 normal">
        {`
      The dataset represents the CO₂ concentration measured in Parts Per Million (ppm) from year 1958 to now, with 1959-2024
      data being full-year (covering all twelve months of the year). The source of the data is from National Oceanic and Atmospheric Administration (NOAA). Global Monitoring Laboratory: `}
      <a className="link" href="https://gml.noaa.gov/ccgg/trends/">Trends in Atmospheric Carbon Dioxide Data</a>

      {` and Scripps Institution of Oceanography, Carbon Dioxide Measurements: `}
      <a className="link" href="https://scrippsco2.ucsd.edu/">Carbon Dioxide Measurements.</a>
      </p>

      <div className="big">
        Opinion
      </div>
      <hr className="solid-line"></hr>

      <p className="mb-4 normal">
      {`Carbon Dioxide concentration in our atmosphere has been rising consistently at an alarming rate.`}
      </p>

      <div className="big">
        Proponent's Perspective
      </div>
      <hr className="solid-line"></hr>
      <CO2Slider></CO2Slider>
      <figcaption className="text">
        [Figure 1] 
        Percent increase in atmospheric CO₂ concentration from year 1960-2024, using 1960 as the comparison baseline (first start-of-a-decade in the IMF dataset). Because seasonality introduces periodic flutuation in CO₂ concentration in a year,
        the average monthly concentration in ppm (parts per million) is used for comparison. Interact with the slider to observe changes across years.
      </figcaption>
      <h3 className='text-space'>Design Decisions:</h3>
      <ul className="normal">
            <li>
              <span className="u">Data Transformation to Display Average CO₂ Concentration across months of year</span>
              <ul>
                <li>Score: 2 (Fully Earnest)</li>
                <li>
                  Rationale: The original dataset records the concentration data in months. This makes it challenging to observe macro-trends that tend to be more appealing to the general audience, since climate change is an event that has more noticeble effect over a longer-horizon.
                  Therefore, I decided to first aggregate the data by year then divides by the twelve months to get a monthly average. The transformation is logical, easily intepretable, and noted in both the graph title and the caption, making this a fully earnest design choice.
                  This accounts for fluctuations from seasonality as well and help readers perform apple-to-apple comparison, which is a big plus.
                </li>
                <li>
                  Strength: Condensing the data into years make it much mor easily interpretable (66 years vs. approximately 66x12 months of data points).
                </li>
                <li>
                  Interesting Observation: The IMF data first recorded full year for CO₂ concentration data is actually 1959. But because as humans we have an <b className='green'>implicit round number preference </b>
                  and because the difference in data between 1959 and 1960 is miniscule, I decided to use 1960 as my basis and specified my rationale in the caption.
                </li>
              </ul>
            </li>

            <li>
              <span className="u">Dynamic Color Encoding and Varying Frequency Hearbeat </span>
              <ul>
                <li>Score: 2 (High-to-fully Earnest)</li>
                <li>
                  Rationale: Climate change affect us universally. To highlight this sense of importance, I borrow from the <b className='blue'>traditional color connotations</b> embedded in our cultures:
                  the traditional use of red for danger and green for baseline and safety helps users easily ground themself and align themselves with our proposition. I consider this highly earnest
                  because I am moving linearly across a conventionally accepted color scale for magnitude/severity (from green to yellow to red). Though, this is not fully earnest per se because
                  it puts in the readers' head an alignment in values with our proposition. I like the design choice, though, precisely it is easy to get the big idea right away.
                </li>
                <li>
                  Strength: Dynamic makes the graph enjoyable and visually appealing. The hearbeat animation on the background echoes a progressive sense of urgency to reinforce our proposition.
                  Colors make plain numbers alive and relevant.
                </li>
                <li>
                  Delta: More color-blind friendly color encoding choice. Red/green is traditional and works well, but there are alternatives.
                </li>
              </ul>
            </li>

            <li>
              <span className="u">Interactive Emoji Slider From Left to Right </span>
              <ul>
                <li>Score: -1 (Deceptive)</li>
                <li>
                  Rationale: I really enjoy this design because emojis are so relevant to us! They are accurate reflections of our emotions. Because
                  we generally <b className='red'>frame</b> climate change as a challenge that needs to be resolved, leveraging this connotation and aligning it with emotions of varying degree of urgency
                  help bring the proponent's message across. The deceptive part is how I define what area is poker-face, suprised, worried, and alarmed, and the jump From
                  a face emoji to an alarm emoji once again escalate this sense of urgency, when in reality the change is not really as drastic as the change in emoji. 
                  Nevetheless, this design choice is high-quality precisely due to its <b className='purple'>intuitive interpreation</b> and ability to relate with what the readers might be thinking in their head as they process the visualization.
                </li>
                <li>
                  Strength: Intuition in conveying emotions and helping readers settle on a stance for the topic. Emojis are clear, modern, and relevant to the general audience. 
                </li>
                <li>
                  Delta: Can benefit from a brief description of CO₂ concentration range for different emojis. Though, visualizations can be "enough said" when representations are already intuitive.
                </li>
              </ul>
            </li>
        </ul>


      <div className="big">
        Opponent's Perspective
      </div>
      <hr className="solid-line"></hr>
      <Image src={oppose} alt="Description of image"/>
      <figcaption className="text">
        [Figure 2] 
        Percentage of CO₂ in the atmosphere. This is derived by dividing parts per million (ppm) by 10,000. Start of each decade is shown in the chart.
      </figcaption>
      <h3 className='text-space'>Design Decisions:</h3>
      <ul className="normal">
            <li>
              <span className="u">Data Transformation to Derive Relative Percentage Instead of Absolute Numerical Data</span>
              <ul>
                <li>Score: -2 (Fully Deceptive)</li>
                <li>
                  Rationale: Despite the inherent value of the data was not modified, the choice of representing the stat as a relative instead of absolute, concrete number, especially when the resulting relative percentage amounts to almost insignficant is hugely deceptive by design. I was inspired by the concepts of
                  <a href="https://www.renascence.io/journal/magnitude-bias-misjudging-the-magnitude-of-events#:~:text=Magnitude%20Bias%20is%20a%20cognitive,the%20context%20or%20relative%20proportions." className='blue'> "magnitude bias"</a>, which is a cognitive bias when people weight the magnitude disproprtionally
                  without fully internalizing the context. This is abusing the inverse of this bias: when people tend to <b className='orange'>frame</b> small numbers as unimportant, even when in reality
                  they are an equivalent representation of the fundamental value of the thing they care about. For example, a person can earn 200K a year, that would amount to close to 0 percent of U.S. GDP,
                  but people tend to frame their salary in terms of concrete, big number more than a small, dismissible relative ratio. Hence, the choice of representing this data as small ratios is effectively deceptive, especially
                  because the word concentration implies proportion by default and lends itself to be reasonably represented as ratios. These, coupled with the fact that people find it hard 
                  to care enough about a small increase (another analogy is in ML, the vanishing gradient problem, when the gradient is too small to amount to any learning, so it was washed away to oblivion naturally), make it is hard to discern the deception at play here.
                </li>
                <li>
                  Strength: Ease of derive and interpret, making this a simple, effective deception.
                </li>
              </ul>
            </li>

            <li>
              <span className="u">Over-condensation of datapoints</span>
              <ul>
                <li>Score: -1 (Fully Deceptive)</li>
                <li>
                  Rationale: The proponent's argument includes the word "consistently" [increasing]. How can you truly and confidently tell if a trend
                  is ongoing and consistent if you only have one datapoint? Two datapoints? And in our case, eight datapoints when you can have ~64 datapoints (one per year).
                  We shrinked our datapoint set by hinting in the title "decade by decade" and showing only start of the decade years. This reduces the likelihood
                  for any meaningful trend to be surfaced and confirmed with absolute confidence.

                  The most deceptive part of this is: it looks perfectly logical to skip over datapoints; our title hints it, it makes sense to use start of the decade
                  because we like to reference them when referencing time periods, and the visualization went the extra mile to put down a legend noting that 2024 is not a full
                  decade before 2020. This is almost like a mirror to the MIT COVID-19 misinformation propagation paper I read as a reading, where "experts" were so good
                  at the actual data analysis, presentation, compilation, etc. that even when they spit out false or modified information, the visualization looks genuine
                  and credible, precisely because the recreational covid data "experts" were like actual government experts trying to be meticulous about representing the data.
                  I think this level of attention (such as adding a legend or a datapoint that aren't realy needed) triggers a false sense of trust from the reader, which along
                  with the minimized set of datapoints availale for reasoning, make this visualization deceptive.
                </li>
                <li>
                  Strength: Ease of derive and interpret, making this a simple, effective deception.
                </li>
              </ul>
            </li>


            <li>
              <span className="u">Deceptive Framing by Deceptive Slogan</span>
              <ul>
                <li>Score: -2 (Fully Deceptive)</li>
                <li>
                  Rationale: Putting this picture of a nose and some breath of air almost gives the false impression that we are in a science class trying
                  to learn about the composition of air more than fighting to prove greenhouse gases like CO2 is ascending at a worrying rate. In essence,
                  this framing, coupled with the previous design decision of representing value as small, insignficant ratio almost gives reader the
                  impression that "oh, the air I end up breathing had this much carbon dioxide before; it doesn't seem like it jumped much and I am not affected by it that much".
                  In essence, it shifts the perspective from a global crisis with potential catastrophic consequences like hurricanes, flooding, wild fire,
                  and literally ground-breaking events like earthquakes to something deeply personal. "Breath easy" shifts the problem from collective and large-scaled to individual and
                  delayable. While this doesn't directly discourage or attack the proponent's stance, it directly weakens the "alarming" aspect of the increase; it weakens the urgency
                  by framing the problem as a concern for one's individual well-being, stating "earth is fine". I really enjoy this framing and how a simple graphic can change the attitude
                  and amount of care we give to parsing data and intepreting its visualization.
                </li>
                <li>
                  Strength: Just a picture can transforms our perspective. Courtesy of google search (free for noncommerical use).
                </li>
              </ul>
            </li>

        </ul>

    </section>
  )
}
