# translateSelected
firefox addon

## Warning!

Addons of this type are currently deprecated, so take a look on this [project](https://github.com/pustovitDmytro/translator), based on my [boilerplate](https://github.com/pustovitDmytro/web-extension)

## How to install

Unfortunately, you can't install this add-on from Firefox store, but it is possible on the [addons.mozilla.org](https://addons.mozilla.org/ru/developers/addon/instantaneous-translator).

If you prefer to build extensions by yourself, firstly clone this (repo)[https://github.com/pustovitDmytro/translateSelected]
```sh
$ git clone https://github.com/pustovitDmytro/translateSelected addon
$ cd addon
```
You can use classic Firefox [Load Addon](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension), but I recommend to use (web-ext)[https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext]:

```sh
$ npm install --global web-ext
$ web-ext run
```

## About

Instantaneous translator is quick and simple translation add-on.

It can translate selected text from any of this 90 Languages:
**Azerbaijan, Albanian, Amharic, English, Arabic, Armenian, Afrikaans, Basque, Bashkir, Belarusian, Bengali, Bulgarian, Bosnian, Welsh, Hungarian, Vietnamese, Haitian (Creole), Galician, Dutch, Hill Mari, Greek, Georgian, Gujarati, Danish, Hebrew, Yiddish, Indonesian, Irish, Italian, Icelandic, Spanish, Kazakh, Kannada, Catalan, Kyrgyz, Chinese, Korean, Xhosa, Latin, Latvian, Lithuanian, Luxembourgish, Malagasy, Malay, Malayalam, Maltese, Macedonian, Maori, Marathi, Mari, Mongolian, German, Nepali, Norwegian, Punjabi, Papiamento, Persian, Polish, Portuguese, Romanian, Russian, Cebuano, Serbian, Sinhala, Slovakian, Slovenian, Swahili, Sundanese, Tajik, Thai, Tagalog, Tamil, Tatar, Telugu, Turkish, Udmurt, Uzbek, Ukrainian, Urdu, Finnish, French, Hindi, Croatian, Czech, Swedish, Scottish, Estonian, Esperanto, Javanese, Japanese**

In preferences you could choose (default - Ukrainian) your native language from the list:
*Ukrainian
*English
*Spanish
*Russian
*Chinese
*Polish
*German
*Turkish
*Japanese
 
If you language has not mentioned in the list, contact me at [gmail](mailto:dipustovit@gmail.com.com?Subject=TranslateSelected) or github and I'll add you language to add-on.

Also it is possible to change flag shape between country balls and waving flags.(**default** - waving flags)

Click on toolbar button to activate add-on, so it will change icon as you see at screenshot.

Then after every text selection the popup with translation will be displayed near the toolbar button.

Translation Machine used in add-on is Yandex translate, but after selection has been confirmed it is still possible to check alternative variants with buttons - Google, Oxford (definition dictionary) and Lingvo.
