import React from 'react';
import Counter from './Counter';
import MovieList from './MovieList';
import PokemonList from './PokemonList';
import '../style.css';

const Hooks = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Hooks
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="__blank"
          rel="noopener"
        >
          Docs
        </a>
      </h1>
      <PokemonList />
      <MovieList />
      <Counter />
    </section>
  )
}
export default Hooks