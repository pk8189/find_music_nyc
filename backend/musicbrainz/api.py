import requests
import json

# https://musicbrainz.org/doc/MusicBrainz_API
_api_root = "https://musicbrainz.org/ws/2/"

def _make_request(url):
    headers = {'Accept': 'application/json'}
    r = requests.get(url, headers=headers)
    return json.loads(r.text)

def fetch_artist_genres_by_mbid(mbid: str):
    result = _make_request(_api_root + f"artist/{mbid}?inc=genres")
    assert "genres" in result
    return set([g['name'] for g in result["genres"]])
