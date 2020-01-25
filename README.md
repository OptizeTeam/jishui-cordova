Webowy i mobilny klient książki kucharskiej.

Klient webowy:
1. Utwórz konfigurację komunikacji z API w pliku `sources/scripts/environment/api.js` na podstawie pliku `sources/scripts/environment/api.sample.js`.
2. Zainstaluj zależności:
   > npm install
3. Zbuduj źródła:
   > npm run grunt build
4. Strona jest gotowa do pracy w katalogu `www`.

Klient mobilny:
1. Wykonaj wszystkie kroki dla klienta webowego.
2. Przygotuj środowisko:
   > npm run cordova prepare android
3. Zbuduj aplikację
   > npm run cordova build android
4. Aplikacja jest gotowa w pliku `platforms/android/app/build/outputs/apk/debug/app-debug.apk`.

Możesz zainstalować aplikację bezpośrednio na telefonie, na którym włączone jest debugowanie USB:
   > npm run cordova run android --device
