---
layout: layout.njk
renderData: 
    title: "{{ game.title }}"
pagination:
    data: gameList
    size: 1
    alias: game
permalink: "{{ game.date | slug }}/"
---

# Game a Day

I recently stopped working a 9 to 5 job, so I decided to start playing through one game from the [Bundle for Racial Justice and Equality](https://itch.io/b/520/bundle-for-racial-justice-and-equality) a day.

### On {{ game.date }} I'm playing:

## {{ game.title }}

![The cover image for the game]({{game.cover_url}})

{{ game.short_text}}

[{{game.url}}]({{game.url}})