---
title: Bilder
eleventyNavigation:
    key: bilder
    parent: tekniken
    order: 7
    excerpt: 
---
{% intro %}

## Introduktion

Om du ska använda en bild i din kurs så används det bäst genom en shortcode.
Denna shortcode baserar sig i sin tur på [11tys bild-plugin](https://www.11ty.dev/docs/plugins/image/).

### Sidan använder

{% endintro %}

{% instruktioner %}

## Instruktioner

 - Välj en bild och kopiera in den i ```/src/images/```
 - Öppna det markdown dokument som du ska inkludera bilden i
 - Inkludera följande shortcode

**Notera att shortcodes skrivs med ```{ %``` som öppningstagg och ```% }``` som stängningstagg, utan mellanslag.**
De går inte att skriva ut korrekt här i templaten...

Mellan shortcode taggarna skriver du
```md
image "./src/images/filnamn.filändelse", "Beskrivande text för bilden" 
``` 

Bilden kommer automatiskt kopieras, döpas om och optimeras när sidan skapas.
Resultatet finner du i byggmappen, ```/public/img/```

{% endinstruktioner %}

{% uppgifter %}

## Uppgifter
### ⭐
#### Uppgift 1

Testa att använda en bild i en av dina delar

{% enduppgifter %}