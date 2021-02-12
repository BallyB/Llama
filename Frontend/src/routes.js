import LandingPage from './pages/LandingPage.svelte';
import Profil from './pages/Profil.svelte';
import Creation from './pages/Creation.svelte';
import Home from './pages/Home.svelte';
import Messagerie from './pages/Messagerie.svelte';
import Resultats from './pages/Resultats.svelte';

export default {
    '/': LandingPage,
    '/profil': Profil,
    '/home': Home,
    '/creation': Creation,
    '/messagerie': Messagerie,
    '/resultats': Resultats
};