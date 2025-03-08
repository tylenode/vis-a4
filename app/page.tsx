import Image from 'next/image'

// Assets
import CO2Slider from './components/co2Slider';

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
      The dataset represents the CO₂ concentration measured in Parts Per Million (ppm) from year  to now.
      The source of the data is from National Oceanic and Atmospheric Administration (NOAA). Global Monitoring Laboratory: `}
      <a className="link" href="https://gml.noaa.gov/ccgg/trends/">Trends in Atmospheric Carbon Dioxide Data</a>

      {` and Scripps Institution of Oceanography, Carbon Dioxide Measurements: `}
      <a className="link" href="https://scrippsco2.ucsd.edu/">Carbon Dioxide Measurements.</a>
      </p>

      <div className="big">
        Opinion
      </div>
      <hr className="solid-line"></hr>

      <p className="mb-4 normal">
      {`Carbon Dioxide concentration in our atmosphere is rising at an alarming rate.`}
      </p>

      <div className="big">
        Proponent's Perspective
      </div>
      <hr className="solid-line"></hr>
      <CO2Slider></CO2Slider>
      <figcaption className="text">
        [Figure 1] 
        Percent increase in atmospheric CO₂ concentration from year 1960-2024, using 1960 as the comparison baseline (first start-of-a-decade in the IMF dataset). Interact with the slider to observe change.
      </figcaption>
      <h3 className='text-space'>Design Decisions:</h3>
      <ul className="normal">
            <li>
              <span className="u">Data Transformation to Aggregate By Year</span> Score: 2
              <ul>
                <li>Score: 2 (Fully Earnest)</li>
                <li>
                  Rationale: The original dataset records the concentration data in months. This makes it challenging to observe macro-trends that tend to be more appealing to the general audience, since climate change is an event that has more noticeble effect over a longer-horizon.
                  Therefore, I decided to aggregate the data by year. The transformation is logical, easily intepretable, and noted in both the graph title and the caption, making this a fully earnest design choice.
                </li>
                <li>
                  Strength: Condensing the data into years make it much mor easily interpretable (66 years vs. approximately 66x12 months of data points).
                </li>
                <li>
                  Interesting Observation: The IMF data first recorded full year for CO₂ concentration data is actually 1959. Because as humans we have an implicit <b className='green'>round number preference </b>
                  and beecause the difference in data between 1959 and 1960 is miniscule, I decided to use 1960 as my basis and specified my rationale in the caption.
                </li>
              </ul>
            </li>

            <li>
              <span className="u">Dynamic Color Encoding </span>
              <ul>
                <li>Score: 2 (High-to-fully Earnest)</li>
                <li>
                  Rationale: Climate change affect us universally. To highlight this sense of importance, I borrow from the <b className='blue'>traditional color connotations</b> embedded in our cultures:
                  the traditional use of red for danger and green for baseline and safety helps users easily ground themself and align themselves with our proposition. I consider this highly earnest
                  because I am moving linearly across a conventionally accepted color scale for magnitude/severity (from green to yellow to red). Though, this is not fully earnest per se because
                  it puts in the readers' head an alignment in values with our proposition. I like the design choice, though, precisely it is easy to get the big idea right away.
                </li>
                <li>
                  Strength: Dynamic makes the graph enjoyable and visually appealing. The hearbeat animation on the background also echoes a sense of urgency to reinforce our proposition.
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
                  Strength: Aligns well with the dynamic color gradient to convey urgency.
                </li>
                <li>
                  Delta: Can benefit from a brief description of CO₂ concentration range for different emojis. Though, sometimes a visualization is really "enough said" due to their intuition.
                </li>
              </ul>
            </li>
        </ul>


      <div className="big">
        Opponent's Perspective
      </div>
      <hr className="solid-line"></hr>

    </section>
  )
}
