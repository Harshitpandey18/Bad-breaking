import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../Ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : items.length > 0 ? (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  ) : (
    <h2 style={{ textAlign: 'center' }}>No characters found</h2>
  );
};

export default CharacterGrid;

