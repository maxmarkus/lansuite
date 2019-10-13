<?php

/**
 * Used as a callback function
 *
 * @param int $place
 * @return string
 */
function PlaceName($place)
{
    if ($place == 0) {
        return t('Linke Seite');
    } elseif ($place == 1) {
        return t('Rechte Seite');
    } elseif ($place == 2) { // markus boxklassen
        return t('Header');
    } elseif ($place == 3) { // markus boxklassen
        return t('Top (Login)');
    }

    return '';
}
