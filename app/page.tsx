import Image from 'next/image'

// Assets
import covidSpiral from 'app/assets/covid-spiral.png';
import sketch1 from 'app/assets/sketch1.png';
import sketch2 from 'app/assets/sketch2.png';
import sketch3 from 'app/assets/sketch3.png';

// Step chart
import StepChart from './components/stepChart';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Re-designing The New York Times' Pandemic Visualization
      </h1>
      <div className="text">By Ian Lee</div>
      <br></br>

      <p className="mb-4 normal">
        {`
        Featured in a New York Times article by Dr. Jeffrey Shaman, a renowned  scientist at Columbia University,
        the visualization below presents patterns of new COVID-19 cases from early 2020 to early 2022. 
        It maps the evolution of the pandemics radially, with each quadrant representing a quarter of the year and time progressing clockwise.
        We will explore the design trade-offs considered in this visualization and offer a re-design addressing pitfalls.`}
      </p>

      <div className="big">
        Original Design
      </div>
      <hr className="solid-line"></hr>

      <Image src={covidSpiral} alt="Description of image"  
      
        style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}/>
      
      <div className="my-8">
          <h2><b>Observations</b></h2>
          <hr className="solid-line"></hr>

          <ul className="normal">
            <li>Huge increase (approximately 50%) in new cases from late 2021 to early 2022, which correlates precisely to the rise of the omicron variant.</li>
          </ul>


          <ul className="normal">
            <li>The pandemic reported cases in the US began seemingly at around March 2022. Based on the red coloring.</li>
          </ul>


          <ul className="normal">
            <li>During the summers, new cases trough, and this visualization highlights the seasonality that new cases tend to thin during summer months. 
            For example, the number of cases between 2021 July and later 2021 winter months is quite significant.</li>
          </ul>
      </div>

      <div className="my-8">
          <h2><b>Intended Audience</b></h2>
          <hr className="solid-line"></hr>
          <div className="normal">
          This original visualization is intended for the general public. Instead of focusing on specific numbers, averages, or standard deviations, this original visualization abstracts the data into trends. This approach makes it easier for the average American to digest and comprehend the information about the pandemic's spread.
          </div>
      </div>

      <div className="my-8">
          <h2><b>Publication Medium</b></h2>
          <hr className="solid-line"></hr>
          <div className="normal">
          By publishing as a part of an opinion article written by Dr. Jefferey Shaman,  an infectious disease modeler and epidemiologist at Columbia University whose team built one of the first models of COVID-19, this visualization gains credibility and trust of the scientist community as well as the general public who values science and objectivity in data.
          </div>
      </div>

      <div className="my-8">
          <h2><b>Design Tradeoffs and Constraints</b></h2>
          <hr className="solid-line"></hr>


          <ul className="normal">
            <li>Strengths of this visualization include simplifying the axes, which prioritizes the representation of trends over precise months or new case numbers. In additions, the use of vivid color red correlates with danger, which aligns well with the connotation of new cases in a pandemics.</li>
          </ul>

          <ul className="normal">
            <li>Constraints, however, include the use of a radial layout to represent time, which deviates from the linear representation the general public is accustomed to, such as putting time strictly on the x-axis in a traditional bar graph or scatter plot. Also, there is a perceptual lack of radial symmetry at the lower left, third quadrant. This is directly related to a strong limit of this visualization: scalability. What if a specific interval has an extreme surge of new cases? The radial presentation forces the designer to add space in-between swirls to ensure representation clarity, which contributes to the perceptual confusion. Additionally, I almost missed the 7-day average label because it was not at the legends, which is a more common area to place metadata or label descriptions.</li>
          </ul>

          <ul className="normal">
            <li>Deltas include: adding a subtext under legend as a description, such as: 'The thickness of the graph represents the number of new cases; the thicker the line, the more new cases at that time.' This helps guide readers through the narrative of the graph.</li>
          </ul>

          <ul className="normal">
            <li>Overall, the tradeoffs of this original design prioritizes trend discovery and visual novelty over data precision and ease of quantitative interpretation for readers. These deliberate design decisions provide opportunities for redesign.</li>
          </ul>
      </div>

      <div className="big">
        Sketches
      </div>
      <hr className="solid-line"></hr>

      <div>
        <figcaption className="text">Sketch 1: Cross-Year Volume Comparison</figcaption>
        <Image src={sketch1} alt="Cross-Year COVID New Cases Volume Visualization"   
          style={{
          width: '80%',
          height: '70%',
          objectFit: 'cover'
        }}/>
        <ul className="normal">
            <li>
              <span className="u">Rationale</span>: The original visualization "loops" time radially. This adds frictions to the reading experience.
              For example, when trying to pinpoint the time of a specific datapoint, the reader has to first identify
              which loop they are in, then identify the quadrant, then identify the month from the twelve radial axes,
              each of which has varied length. Inspired to address these frictions, I made this sketch so user can easily answer
              the question "Which year", "which month", and "how many new cases" at a glance instead of jumping through simple,
              but optimizable logic loops to get to the answer.
            </li>
            <li>
              <span className="u">Strength</span>: What I really like about this sketch is the emphasis on <b className="green">consistent representation</b>. I made the design choice
              to have a x-axis representing number of new cases per year. This allows <b className="blue">modularity</b> in the reading experience. As a reader,
              I can isolate and lock in on one year's data to understand that year's pattern. In addition, I ensured the maximum of
              x-axes across years is <i>consistent</i>. This gives a big-picture context as the reader is locking into one year,
              and additionally I exclusively label each year's max along that year's x-axis, further enriching the context
              to help reader navigate the broader cross-year pattern of the pandemic. I also like how this sketch has space
              to denote the events in the chart, adding a <b className="orange">story-telling</b> element to this visualization.
            </li>

            <li>
              <span className="u">Deltas</span>: This design sacrifices horizontal scalability. As there are more years,
              the graph grows wider, which depending on the display size of the device, can be challenging to present fully
              and must resort to scrolling.
            </li>

            <li>
              <span className="u">Next sketch</span>: Based on the horizontaly scalability limitation, I would like to explore
              a visualization form where the width is compact and constant, and the readers can see the data more explicit and quantitatively.
            </li>
        </ul>
      </div>

      <br></br>
      <div>
      <figcaption className="text">Sketch 2: Seasonal Tabular View</figcaption>
      <Image src={sketch2} alt="Description of image"   
        style={{
        width: '80%',
        height: '70%',
        objectFit: 'cover'
      }}/>
      <ul className="normal">
          <li>
            <span className="u">Rationale</span>: From my last sketch, I wanted to present a more compact visualization that can get the
            statistics directly to the readers, i.e. conveying the new cases numbers most frictionlessly. This inspires this tabular approach.
            Unlike the original visualization, which grouped months by quarters, I grouped the months by season to emphasize the seasonality
            in how the pandemic spread. I also aggregated the data by month instead of on presenting data on a daily basis, since readers
            will likely be more interested in the macro-pattern than, say, what the number of new cases is on a specific day in Feburary.
          </li>
          <li>
            <span className="u">Strength</span>: I really like the addition of seasonal symbols on the left to convey change of seasons.
            This is almost like telling a story of how the pandemics changes over seasons, echoing back to our <b className="orange">story-telling</b> element.
            The listing of months in a table is actually quite perfect, just like a calendar, borrowing from a concept almost all readers
            are familiar with. Also, this helps immensively in answering the question "How many additional new cases are different in 2020 vs. 2021 for the same
            month?"
          </li>

          <li>
            <span className="u">Deltas</span>: This design uses mixed units "K" and "M" to abbreviate the representation of the number of new cases. This can adpot
            a more <b className="green">consistent representation</b> to help users ground themself in a specific scale. In fact, I think the repetition of years
            can introduce data redundancy. Also, this tabular view doesn't give an easy way to immediately gauge a sense of change in # new cases across months,
            since the user would likely read horizontally and compare three months max at a time (a season at a time).
          </li>

          <li>
            <span className="u">Next sketch</span>: I want to explore another way to represent cross-year difference, minimizing data redundancy like in this sketch
            while also making it very esay to compare all the months across the year at a time, i.e concise data representation while also having the broder scope
            and context like in the first sketch.
          </li>
      </ul>

      </div>

      <br></br>
      <div>
      <figcaption className="text">Sketch 3: Multi-year Step Plot By Month</figcaption>
      <Image src={sketch3} alt="Description of image"   
        style={{
        width: '80%',
        height: '70%',
        objectFit: 'cover'
      }}/>
        <ul className="normal">
          <li>
            <span className="u">Rationale</span>: Based on my previous two sketches, I decided brevity, numerical data representation (for quantitative comparison),
            and temporal context (able to smoothly compare cross-month, cross-year without much deducing) are huge in crafting what I consider a high-quality visualizations.
            Hence, I decided to explore the use of a step chart. Using a step as a logical unit for comparison.
          </li>
          <li>
            <span className="u">Strength</span>: The <b className='purple'>interpretational flexibility</b> is huge in this design. As readers, we can read this visuaization
            horizontally to get cross-month changes in new cases (along with the concret numbers) for a single year, or cross-year changes by looking vertically.
            The use of only one pair of x-y axes is great, optimizing the ease of information intake and helping the readers to focus on the data, which sits
            at the center of the visualization, instead of spiraling like in the original. The <b className="green">consistent representation</b> in the data unit is great, too.
          </li>

          <li>
            <span className="u">Deltas</span>: A delta is the unit magnitude. What if the yearly datasets vary widely in the number of new cases? Because we only
            have one y-axis, we must update the tickmarks to accomodate both the min and max, i.e. both ends of the spectrum in the data. Additionally, two years can share
            similar number of cases for the same month, allowing the possibility of visual overlap between two years worth of data, though this can is trivial because the graph is continuous and readers should quite easily
            pinpoint the precise datapoint of a year (just follow the step).
          </li>
      </ul>
      </div>

    <div className="big">
      Final Design
    </div>
    <hr className="solid-line"></hr>
    <StepChart />
    <figcaption className="graph-text">Fig 1. Number of new COVID-19 cases in the U.S. across 2020-2022. The x-axis represents months and the y-axis represents the aggregated number of new cases in each month, in millions (M). The legends are interactive. Select a year from the legend to temporarily hide its data and emphasize other trends.</figcaption>

        <ul className="normal">
          <li>
            <span className="u">Rationale</span>: At its heart, this design reveals the striking reality that pandemics, despite their global impact,
            are not random events. Instead, they show discernible cyclical patterns influenced by seasons. My new design highlights a strong positive correlation
            between winter months and a pronounced surge in new cases of COVID (in 2020 and 2021), contrasting with the lower case number in the warmer months.
            The visual encodings used include: colors - I chose a progressive of colors from the spectrum to mirror the progression of the pandemic (green, for example, signals the beginning, and purple signals we are toward the end of the pandemic).
            In addition to colors, I aggregated the data by month. This data transformation aligns how readers usually care about macro-trends when it comes to a large-scale event such 
            as a pandemic, instead of knowing the exact number of cases on a specific day of a month. Furthermore, the axis units are in millions, a post-processing performed
            to ensure we respect the magnitude of datapoints and the range of the datasets across years and aligns with <b className="green">consistent representation</b>. Lastly, the use of shading fills the graph and 
            aligns well with Gestalt Principles of Perception: Closure, which describes our tendency to want to fill in the gap to create complete form.
            Adding the shades adds cognitive efficiency for the readers and adds to the aesthetic appeal and <b className="blue">modularity</b>  of the overall visualization.
            In terms of aspects of the design that can obscure the underlying data, the use of scale in the millions, in fact, can flattens the visual presence 
            of low datapoints in a dataset. For example, in Feb 2020, there are close to a hundred new cases, but on the graph, it appears as if there is none.
          </li>
          <br></br>
          <li>
            <span className="u">Reflection</span>: My final design addresses my critiques of the original New York Times' design by
            first presenting a linear, <b className='purple'>easily intepretatable</b> progression of time thorough my x-axis. Furthermore, my time representation is symmetric
            (each year shares the same set of months, and the spacing between datapoint to time point is equal and constant). Secondly, I specifically add an intentional repetition of the word "Year"
            to guarantee clarity in my data label, which is also centralized at the top, unlike in the original design where the annotations sit at the top left as well as near the center of the spiral.
            The process of "critique by redesign" immensively helped me identify the need for a conventionally intepretable timeline, quantitative numbers which adds flexibility in interpretation,
            as well as the importance of being able to single out a specific year for both viewing modularly (without influence of data groups) as well as subgroup patterns discovery (for example, I learned that readers want the ability
            to easily compare two years or a series of months from my sketch 2. Inspired by this, I added the ability to show selective years to enable frictionless subgroup comparison),
            which my design achieves by adding an element of interactity in the legends. Overall, I believe my final design addresses the critiques raised earlier
            and delivers a clearer, more interactive, and enjoyable visualization.
          </li>
      </ul>
      
    </section>
  )
}
