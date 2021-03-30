import React from 'react';
import Toggle from './Toggle';
import ToggleRP from './ToggleRP';
import '../style.css';

const RenderProps = props => {

  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <ToggleRP render={(bool, toggleBool) => {
        return (
          <div>
            {bool ? 'Hello Friend!' : null}
            <button onClick={toggleBool}>CLICK!</button>
          </div>
        )
      }} />
      <Toggle >
        <h1>
          Hey you GUYYYZ!
        </h1>
      </Toggle>

    </section>
  )
}
export default RenderProps