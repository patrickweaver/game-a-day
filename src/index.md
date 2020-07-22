---
layout: layout.njk
title: Game Schedule
---

# Game a Day

I recently stopped working a 9 to 5 job, so I decided to start playing through one game from the [Bundle for Racial Justice and Equality](https://itch.io/b/520/bundle-for-racial-justice-and-equality) a day. I post about them on Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Trying to find ways to build structure into my day now that I&#39;m not doing the 9-5, decided to pick one game from the <a href="https://twitter.com/itchio?ref_src=twsrc%5Etfw">@itchio</a> Bundle for Racial Justice and Equality to play for at least 10 minutes. Gonna thread micro reviews here.</p>&mdash; Patrick Weaver (@patrickweave_r) <a href="https://twitter.com/patrickweave_r/status/1285347059042787329?ref_src=twsrc%5Etfw">July 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<a id="today-anchor" href="#" style="display: none">Scroll to today's Game</a>


## Game Schedule

<ol id="game-list">
{% for game in gameList %}
  <div  id="{{ game.idDate }}-game" class="item-container">
    <li>
      <h4>Day {{ game.oneIndexDay }}: {{game.date}}<h4>
      <h3><a href="{{ game.date | slug }}">{{ game.title}}</a></h3>
      <p>
        {{ game.short_text}}
      </p>
    </li>
  </div>
{% endfor %}
</ol>