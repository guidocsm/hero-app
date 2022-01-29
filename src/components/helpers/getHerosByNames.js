import {heroes} from '../../data/heroes'

export const getHerosByNames = (name) => {
    name = name?.toLowerCase()
    if (name === "") {
        return [];
    }
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name));
};
