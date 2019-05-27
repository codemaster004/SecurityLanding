var texty = ["Jestem Filip Dąbkowskii jestem junior frontend developerm, kt&oacute;ryw tym projekcie był odpowiedzialny za kodowanie strony, rozdzielanie zadań i pilnowanie termin&oacute;w.", "Mam na imię Mateusz. Dzięki mnie możecie oglądać na tej stronie jakże piękne obrazki świetną grafikę oraz wyszukany tekst. Razem z moimi fantastycznym, wspaniałymi kolegami stworzyliśmy tę stronę z myślą o edukowaniu społeczeństwa o niebezpiecznym oraz złośliwym oprogramowaniu. Myślę że przez moje uświadamiające grafiki oraz wszelkiego rodzaju obrazki będziecie mogli dogłębniej poznać tajniki ciekawego świata informatyki. Strzała!!", "Ja mam na imię Kacper. W tym oto projekcie szukałem najistotniejszych informacji aby nasza strona mogła wypełniać zadanie do którego została stworzona, a mianowicie w pomocy wam - czytelnikom. Mam również nadzieję, że informacje zawarte na stronie są przejrzyste i jasne.", "Jam jest Mateusz. Wśród wielu pytań nasuwających się po poprzednim zdaniu, najprawdopodobniej znajduje się ,,A czymże się zajmowałeś w tym wspaniałym, i wartym oceny celującej projekcie?”. I o dziwo, mimo braku odpowiedzi na wiele innych pytań które mogły się nasunąć, na to jedno konkretne pytanie odpowiem. Zajmowałem się częścią tekstów, ustalałem terminy spotkań, pomagałem przy wyborach walorów estetycznych projektu, oraz poprawiałem (przynajmniej część) błędów gramatycznych i stylistycznych spowodowanych między innymi przez nieumiejący korzystać z autokorekty komputer."]

function uzupelni(kto) {
  document.getElementById("tuQla").innerHTML = texty[kto];
  document.getElementById("reklama").style.display = "block";
}

function clos() {
  document.getElementById("reklama").style.display = "none";
}
