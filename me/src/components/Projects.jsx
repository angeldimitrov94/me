import React from 'react';

export default function Projects(){
  return (
    <div className="content">
      <h1>Projects</h1>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="two-column-grid-layout">
          <div>
            <h2>Nexus EOL</h2>
          </div>
          <div></div>
          <div></div>
          <div>
            <p><i>nexus - noun - nex·us ˈnek-səs : CONNECTION, LINK</i></p>
            <p><i>EOL = end-of-line, describes the final manufacturing test performed on an assembled manufactured product at the end of the assembly line</i></p>
          </div>
          <div>
            <h4>What does it do?</h4>
            <p>An aggregator and central connection hub for manufacturing test data (hence 'Nexus'). When a product is tested by a manufacturer, said test status and data is sent to the platform. Pushes of data to the platform can trigger subsequent logic, such as back-office operations.</p>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4>What issue does it solve?</h4>
            <p>Manufacturing processes sometimes suffer from being woefully disconnected. The amount of data available can offer tremendous value, IF it is captured. The platform is specifically tailored to make it easy for manufacturing testing teams to send their data to a centralized location where various stake-holders can access it from the web, as opposed to various random bits of data being stored away on scattered machines across multiple networks and with varying formats.</p>
          </div>
          <div>
            <h4>Software Implementation</h4>
            <p>The project is built in Node.Js with a monolithic backend built with Express.Js and a client-rendered Angular frontend that uses mostly Angular Material UI components. MongoDB is the data store to provide flexibility for data models. It employs a multi-tenant architecture for logically separating multiple accounts'/users' data from each other within the same common data store, which brings value at reasonable compute cost.</p>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4>Questions?</h4>
            <p>Feel free to DM on <a href="https://www.linkedin.com/in/angel-dimitrov/" target="_blank" rel="noreferrer">LinkedIn</a> if you're interested and would like to learn/discuss more.</p>
          </div>
        </div>

        <div className="two-column-grid-layout">
          <div>
            <h2>This site</h2>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4>A design exercise</h4>
            <p>I've always had an interest in developing a better design sense to expand my full-stack skillset.</p>
            <p>I also enjoy elegant designs (not just web applications) - and wanted an exercise in applying my favorite minimalist, timeless design style - <a href="https://admindagency.com/blog/exploring-the-depths-of-swiss-design/">Swiss Design</a>.</p>
          </div>
          <div>
            <h4>Tech stack minimalism</h4>
            <p>Along with the minimalist design style, I wanted an exercise in minimalist web design as well.</p>
            <p>No  : npm, site templates, React, Angular, frameworks...</p>
            <p>Yes : diy, vanilla Javascript/HTML, simplicity</p>
          </div>
        </div>

      </div>

    </div>
  );
}
