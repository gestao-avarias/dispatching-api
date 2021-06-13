import React from 'react';

const UseMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatches() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatches();
    window.addEventListener('resize', changeMatches);
    return () => window.removeEventListener('resize', changeMatches);
  }, [media]);
  return match;
};

export default UseMedia;
