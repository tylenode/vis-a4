import Image from 'next/image'

// Assets
import StepChart from './components/stepChart';
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
      {`Climate Change is real.`}
      </p>

      <div className="big">
        Persuasive Visualization
      </div>
      <hr className="solid-line"></hr>
      <CO2Slider></CO2Slider>

      <div className="big">
        Deceptive Visualization
      </div>
      <hr className="solid-line"></hr>

    </section>
  )
}
