import React from 'react';

export default function Projects(){
  return (
    <div className="mx-auto my-10 px-10 py-10 max-w-4xl bg-black/60 backdrop-blur-md rounded-3xl shadow-2xl relative text-white">
      <h1 className="text-5xl font-semibold text-white my-3">Projects</h1>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div>
            <h2 className="text-4xl text-white my-3">Itinerary Fairy</h2>
            <a href="https://itineraryfairy.com/" className="text-white no-underline font-semibold hover:underline">https://itineraryfairy.com/</a>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">What issue does it solve?</h4>
            <p className="text-white mb-4">
              Planning multi‑stop trips is time consuming: finding relevant places, arranging a logical route, and sharing a usable plan are all friction points. The app streamlines discovery with AI assistance, surfaces sensible routing using mapping integrations, and makes it easy to publish shareable itineraries that others can view and follow.
            </p>
          </div>
          <div>
            <p className="text-white mb-4"><i>A travel itinerary builder that helps users discover, compose, and publish trip plans.</i></p>
          </div>
          <div></div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">What does it do?</h4>
            <p className="text-white mb-4">
              Itinerary Fairy helps travelers create multi‑stop itineraries by combining an AI‑assisted search with mapping tools. Users can discover places, generate suggested sequences, then organize and reorder stops using an intuitive editor. Each itinerary can include directions and dynamic links so others can follow the route or open directions in their preferred mapping app.
            </p>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Software implementation</h4>
            <p className="text-white mb-4">
              The app integrates mapping plugins and dynamic direction URLs to present routes and location context. An AI search layer helps generate candidate stops and suggests orderings; users can then edit, reorder (drag‑and‑drop), and save itineraries. Publishing produces a lightweight, shareable view that viewers can open to inspect the itinerary and follow directions in their chosen mapping tool. The application is implemented as an Angular frontend backed by a Node.js API and a document database, and is packaged as containerized Docker services for quick, reproducible deployment.
            </p>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Questions?</h4>
            <p className="text-white mb-4">
              Interested parties can reach out on <a href="https://www.linkedin.com/in/angel-dimitrov/" target="_blank" rel="noreferrer" className="text-white no-underline font-semibold hover:underline">LinkedIn</a> to learn more or see demos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div>
            <h2 className="text-4xl text-white my-3">This Site</h2>
          </div>
          <div></div>
          <div></div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Modern web tech</h4>
            <p className="text-white mb-4">Built with React for component architecture, React Router for navigation, and Tailwind CSS for utility-first styling. I learned about design systems, responsive layouts, and how powerful utility frameworks can be for rapid, maintainable development. Deployed as a static SPA with zero backend dependencies.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
