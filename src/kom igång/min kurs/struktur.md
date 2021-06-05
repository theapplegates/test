---
title: Struktur
eleventyNavigation:
    key: struktur
    parent: min kurs
    order: 1
    excerpt: 
---
{% intro %}

## Introduktion

En kurswebb består av ämne, teman, områden och delar. Detta är nära sammankopplat och
behöver följa en viss struktur och regler för att det ska fungera.

### Tänk på
- Sidan som skapas är för ett ämne
- Du kan ha flera teman
- Teman kan bestå av flera områden
- Områden kan bestå av flera delar

{% endintro %}

{% instruktioner %}

## Instruktioner

Studera strukturen för den här guiden.

- Ämnet utgår från title i ```src/index.md``` och siteName i ```_data/meta.js```
- Ett tema är en mapp i ```src/``` med temats namn, ex. *kom igång*, i ett temas mapp hittar du
    - ```index.md``` för temat med tema front matter
    - Ett område, det är en mapp i temat, ex. *min kurs*, i ett områdes mapp hittar du
        - ```omådets namn.json``` med front matter för delarna, ex. *min kurs.json*
        - ```index.md``` för området med områdets front matter
        - ```del.md``` där del är namnet på en del, ex. *struktur.md*

{% image "./src/images/struktur.png", "Skärmdump av strukturen" %}

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Studera strukturen för den här guiden, temat kom igång

{% enduppgifter %}