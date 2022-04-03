import { ReactComponent as ElectronicIcon } from "./resources/synth.svg"
import { ReactComponent as MetalIcon } from "./resources/metal-guitar.svg"
import { ReactComponent as LatinIcon } from "./resources/maracas.svg"
import { ReactComponent as JazzIcon } from "./resources/trumpet.svg"
import { ReactComponent as RockIcon } from "./resources/electric-guitar.svg"
import { ReactComponent as ClassicalIcon } from "./resources/harp.svg"
import { ReactComponent as FolkIcon } from "./resources/acoustic-guitar.svg"
import { ReactComponent as DjIcon } from "./resources/dj.svg"
import styled from "styled-components"


// This is a very basic (and incomplete) approach to mapping genres to icons. 
// We'll have to go by feel mostly and once we get the actual songkick api we should tweak this
export default ({genreList, width = "4rem"}) => {
    if (genreList) {
        if (genreList.some(g => g.includes("metal"))) return <MetalIcon width={width}/>
        if (genreList.some(g => g.includes("jazz"))) return <JazzIcon width={width}/>
        if (genreList.some(g => g.includes("rock"))) return <RockIcon width={width}/>
    }
    return null
}
