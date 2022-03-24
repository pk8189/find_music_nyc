# Find Music NYC

## Start the frontend
- install nodejs v12.18.3
- `cd ui`
- `npm install`
- `npm start`

## Start the backend
- install [miniconda](https://docs.conda.io/en/latest/miniconda.html)
- cd to `backend`
- `conda env create -f environment.yml`
- (you may have to [conda init](https://stackoverflow.com/questions/64149680/how-to-activate-conda-environment-from-powershell) your shell)
- `conda activate find_music_nyc`
- `uvicorn main:app --reload`

