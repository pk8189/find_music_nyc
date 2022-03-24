import json

from fastapi import FastAPI
from musicbrainz.api import fetch_artist_genres_by_mbid
from songkick.utils import get_musicbrainz_id_from_event

app = FastAPI()

@app.get("/api")
def read_root():
    songkick_data = json.load(open("songkick/fake_data.json"))
    events = songkick_data["resultsPage"]["results"]["event"]  # TODO make some legit parsing logic for these
    artist_musicbrainz_ids = [get_musicbrainz_id_from_event(e) for e in events]
    genres = {}
    for id in artist_musicbrainz_ids:
        genres[id] = fetch_artist_genres_by_mbid(id)
    return {'events': events, 'genres': genres}
