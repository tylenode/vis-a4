import Image from 'next/image'

// Assets
import CO2Slider from './components/co2Slider';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Persuation | Deception
      </h1>
      <div className="text">By Ian Lee</div>
      <br></br>

      <p className="mb-4 normal">
        {`
        Visualizations often blur the line between truth and misrepresentation as they reflect the narrative of their creator. In this analysis,
        we explore the Monthly Atmospheric Carbon Dioxide Concentration dataset from IMF (Internal Monetary Funds).`}
      </p>

      <div className="big">
        Dataset
      </div>
      <hr className="solid-line"></hr>


      <p className="mb-4 normal">
        {`
      The dataset represents the CO2 concentration measured in Parts Per Million (ppm) from year 1958 to now.
      The source of the data is from National Oceanic and Atmospheric Administration (NOAA). Global Monitoring Laboratory: `}
      <a className="link" href="https://gml.noaa.gov/ccgg/trends/">Trends in Atmospheric Carbon Dioxide Data</a>

      {` and Scripps Institution of Oceanography, Carbon Dioxide Measurements: `}
      <a className="link" href="https://scrippsco2.ucsd.edu/">Carbon Dioxide Measurements.</a>
      </p>

      <div className="big">
        Proposition
      </div>
      <hr className="solid-line"></hr>

      <p className="mb-4 normal">
      {`Greenhouse gases like CO2 is climing up at an alarming rate.`}
      </p>

      <div className="big">
        Proponent's Perspective
      </div>
      <hr className="solid-line"></hr>
      <CO2Slider></CO2Slider>
      <figcaption className="text">
        [Figure 1] 
        Percent increase in atmospheric CO2 concentration from year 1958-2024, using 1958 as the comparison baseline (the first recorded year in the IMF dataset). Interact with the slider to observe change.
      </figcaption>
      <h3 className='text-space'>Design Decisions:</h3>
      <ul className="normal">
            <li>
              <span className="u">Data Transformation to Aggregate By Year</span> Score: 2
              <ul>
                <li>Score: 2 (Fully Earnest)</li>
                <li>
                  Rationale: The original dataset records the concentration data in months. This makes it challenging to observe macro-trends that tend to be more appealing to the general audience, since climate change is an event that has more noticeble effect over a longer-horizon.

                </li>
              </ul>
            </li>

            <li>
              <span className="u">Dynamic Color Encoding </span>
              <ul>
                <li>Score: 2 (Fully Earnest)</li>
                <li>Score: 2</li>
              </ul>
            </li>

            <li>
              <span className="u">Interactive Slider From Left to Right </span> Score: 2
            </li>

            <li>
              <span className="u">Relate to Readers with Emojis </span> Score: 0
            </li>

        </ul>


      <div className="big">
        Opponent's Perspective
      </div>
      <hr className="solid-line"></hr>

    </section>
  )
}
