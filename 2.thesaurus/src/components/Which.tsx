import React, { useEffect, useState } from 'react';

/**
 * This is the "which" component that displays the prompt that is being responded to
 * @param endpoint the endpoint that is being used
 * @returns JSX.Element
 * @constructor
 * @component
 * @example
 * <Which endpoint={endpoint} />
 *
 * @typedef Props
 * @property {string} endpoint - the endpoint that is being used
 * @property {string} word - the word that is being used
 * @property {string} which - the which prompt that is being responded to
 * @property {React.Dispatch<React.SetStateAction<string>>} setWhich - a setter for the which prompt
 */

interface Props {
  endpoint: string;
  word: string;
}

const Which: React.FC<Props> = ({ endpoint, word }) => {
  const [which, setWhich] = useState<string>('Synonyms');

  useEffect(() => {
    switch (endpoint) {
      case 'rel_syn=':
        setWhich('Synonyms');
        break;
      case 'rel_ant=':
        setWhich('Antonyms');
        break;
      case 'rel_rhy=':
        setWhich('Rhymes');
        break;
      default:
        setWhich('Synonyms');
    }
  }, [endpoint]);

  const whichStyle = {
    color: 'cyan',
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      Here are the <span style={whichStyle}>{which}</span> for{' '}
      <span style={whichStyle}>{word}</span>
      <hr />
    </div>
  );
};

export default Which;
