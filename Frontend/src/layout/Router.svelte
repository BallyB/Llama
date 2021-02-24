<script>
    import Router, {replace} from 'svelte-spa-router';
    import wrap from "svelte-spa-router/wrap";

    import LandingPage from '../pages/LandingPage.svelte';
    import Profil from '../pages/Profil.svelte';
    import Creation from '../pages/Creation.svelte';
    import Home from '../pages/Home.svelte';
    import Messagerie from '../pages/Messagerie.svelte';
    import Resultats from '../pages/Resultats.svelte';
    import auth from "../store/auth.js";

    function isAuthenticated() {
        return !!$auth.token
    }

    function isResearcher() {
        return $auth.userType === "chercheur"
    }

    function isParticipant() {
        return $auth.userType === "participant"
    }

    export const routes = {
        '/': LandingPage,
        '/home': wrap({
            component: Home,
            conditions: [
                isAuthenticated,
            ]
        }),
        '/creation': wrap({
            component: Creation,
            conditions: [
                isAuthenticated,
                isResearcher
            ]
        }),
        '/messagerie': wrap({
            component: Messagerie,
            conditions: [
                isAuthenticated,
            ]
        }),
        '/resultats': wrap({
            component: Resultats,
            conditions: [
                isAuthenticated,
            ]
        }),
        '/profil': wrap({
            component: Profil,
            conditions: [
                isAuthenticated,
            ]
        })
    };

    function onConditionsFailed() {
        replace('/');
    }

</script>

<Router {routes} on:conditionsFailed={onConditionsFailed} />