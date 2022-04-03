import json

from fastapi import FastAPI
from musicbrainz.api import fetch_artist_genres_by_mbid
from songkick.utils import get_musicbrainz_id_from_event

app = FastAPI()

@app.get("/api")
def read_root():
    songkick_data = json.load(open("songkick/fake_data.json"))
    events = songkick_data["resultsPage"]["results"]["event"]  # TODO make some legit parsing logic for these
    # TODO should probably map by performance ID rather than event ID because what happens if a jazz artist and a metal artist play at the same event
    artist_musicbrainz_ids = [(e["id"], get_musicbrainz_id_from_event(e)) for e in events] 
    genres = {}
    for (event_id, mbid) in artist_musicbrainz_ids:
        genres[event_id] = fetch_artist_genres_by_mbid(mbid)
    return {'events': events, 'genres': genres}