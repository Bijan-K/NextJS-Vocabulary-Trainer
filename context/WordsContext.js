import { createContext } from 'react';

const WordsContext = createContext();

export const WordsProvider = ({ children, events }) => {
  console.log(events);
  return <WordsContext.Provider value={{}}>{children}</WordsContext.Provider>;
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}

export default WordsContext;
