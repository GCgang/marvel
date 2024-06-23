import { useParams } from 'react-router-dom';
import useFetchCharacterData from '../../hooks/useFetchCharacterData';

export default function CharacterDetails() {
  const {id} = useParams();
  const {loading, error, characterData} = useFetchCharacterData(id);
  const {details, comics, series, events, stories } = characterData;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(characterData);

  return (
    <div>
      {details.length > 0 && (
        <div key={details[0].id}>
          <h1>{details[0].name}</h1>
          {details[0].thumbnail && (
            <img src={`${details[0].thumbnail.path}/portrait_xlarge.jpg`} alt={details[0].name} />
          )}
        </div>
      )}

      <h2>Comics</h2>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <h2>{comic.title}</h2>
            {comic.thumbnail && (
              <img src={`${comic.thumbnail.path}/portrait_xlarge.jpg`} alt={comic.title} />
            )}
          </li>
        ))}
      </ul>

      {series.length > 0 && (
        <>
          <h2>Series</h2>
          <ul>
            {series.map((serie) => (
              <li key={serie.id}>
                <h2>{serie.title}</h2>
                {serie.thumbnail && (
                  <img src={`${serie.thumbnail.path}/portrait_xlarge.jpg`} alt={serie.title} />
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {events.length > 0 && (
        <>
          <h2>Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <h2>{event.title}</h2>
                {event.thumbnail && (
                  <img src={`${event.thumbnail.path}/portrait_xlarge.jpg`} alt={event.title} />
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {stories.length > 0 && (
              <>
                <h2>Stories</h2>
                <ul>
                  {stories.map((story) => (
                    <li key={story.id}>
                      <h2>{story.title}</h2>
                      {story.thumbnail && (
                        <img src={`${story.thumbnail.path}/portrait_xlarge.jpg`} alt={story.title} />
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
    </div>
  );
}