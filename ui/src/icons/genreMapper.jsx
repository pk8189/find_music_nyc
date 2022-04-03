import { MetalIcon } from "./IconCollection"

import * as Icons from './IconCollection'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'


// This is a very basic (and incomplete) approach to mapping genres to icons. 
// We'll have to go by feel mostly and once we get the actual songkick api we should tweak this
export const getGenreIcon = (genreList) => {
    if (genreList) {
        if (genreList.some(g => g.includes("metal"))) return <Icons.MetalIcon/>
        if (genreList.some(g => g.includes("jazz"))) return <Icons.JazzIcon/>
        if (genreList.some(g => g.includes("rock"))) return <Icons.RockIcon/>
    }
    return <Icon icon={locationIcon} />
}