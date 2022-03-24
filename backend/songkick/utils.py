def get_musicbrainz_id_from_event(event: dict):
    performance = event["performance"][0]  #  not sure why this is an array but might need to have something more sophisticated here.
    first_identifier = performance["artist"]["identifier"][0]  # will have to be more sophisticated in the future because they might return many for lesser known bands
    return first_identifier["mbid"]
    