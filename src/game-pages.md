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

## {{ game.title }}

### {{ game.date }}

![The cover image for the game]({{game.cover_url}})

{{ game.short_text}}