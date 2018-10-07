var courses_data = [
	{
		"id": 0,
		"title": "Kurs Programowanie w jQuery - w Praktyce",
		"description": "Poznaj jQuery, czyli najbardziej popularną bibliotekę JavaScript na Świecie! Z jQuery korzystają niemal wszystkie nowoczesne serwisy WWW, a nasz Kurs stanowi niezwykle praktyczne i wyczerpujące omówienie tej biblioteki od podstaw, aż po bardziej zaawansowane techniki. Jeśli znasz już HTML i CSS oraz przynajmniej podstawy JavaScript, jQuery to kolejna obowiązkowa pozycja na Twojej drodze do tworzenia świetnych serwisów internetowych. ",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_27ded9b2-af48-4118-a02a-e35fe950a9be.png",
		"author": "Piotr Palarz",
		"duration": "8 godzin",
		"price": 99.00,
		"categories": ["JavaScript", "jQuery"],
		"is_new": true,
	},
	{
		"id": 1,
		"title": "Kurs Nowoczesny Webdesign - Projektowanie stron i UI/UX",
		"description": "Zajmujesz się, lub zamierzasz się zająć Tworzeniem Stron WWW? Jesteś programistą, grafikiem, chcesz stworzyć stronę firmy lub kierujesz zespołem? Ten kurs jest wszystkim, czego potrzebujesz aby projektować nowoczesne, skuteczne i funkcjonalne serwisy.  Poznasz i zoptymalizujesz proces koncepcyjny, dowiesz się jak pracować wydajnie w zespole, optymalizować grafikę, wykorzystać RWD i podejście Mobile First. Powiem Ci jak skutecznie optymalizować i promować strony WWW. Poznasz też dziesiątki narzędzi oraz linków, które pomogą Ci usprawnić pracę i zebrać potrzebne zasoby. Pokażę Ci na setkach przykładów jak działają nowoczesne strony WWW oraz jakie są trendy w projektowaniu. Gwarantuję, że inwestycja w kurs zwróci się wielokrotnie w Twojej pracy!",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_9c8b5fd6-cda2-4b2f-881e-0039d189326e.png",
		"author": "Grzegorz Róg",
		"duration": "13 godzin",
		"price": 149.00,
		"categories": ["Webdesign", "UI", "UX"]
	},
	{
		"id": 3,
		"title": "Kurs JavaScript - w Praktyce",
		"description": "Kurs ten jest dopełnieniem wiedzy z zakresu języka JavaScript i Obiektowego Modelu Dokumentu z kursu “JavaScript od Podstaw”. Poprzedni kurs nie jest wymagany, lecz jego przerobienie z pewnością pozwoli dużo lepiej przyswoić wiedzę z tego kursu, gdyż były one przygotowywane równocześnie. Oba te materiały, pozwolą od zera, wskoczyć na naprawdę wysoki poziom rozumienia języka, a także dobrych praktyk pisania kodu. Do tego kursu mogą jednak przystąpić wszystkie osoby, które znają już podstawy języka HTML, CSS i JavaScript i chcą poszerzyć swoją wiedzę, a także spojrzeć zupełnie inaczej na ten język.",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_093c53c6-7395-4697-a141-4eae2db3d6a6.png",
		"author": "Piotr Palarz",
		"duration": "10 godzin",
		"price": 139.00,
		"categories": ["JavaScript"],
		"is_promo": true
	},
	{
		"id": 4,
		"title": "Kurs JavaScript - od Podstaw",
		"description": "Kurs traktuje o jednym z najpopularniejszych języków programowania na świecie. Materiał przeznaczony jest dla wszystkich osób, które znają już podstawy HTML i CSS i chciałyby przejść poziom wyżej i dodać do swoich stron dynamiczności. W kursie nie brakuje praktycznych przykładów, które celowo zostały ułożone tak, aby wykorzystać w nich jak najwięcej zdobytej wiedzy. Ponadto, oprócz podstaw samego języka JavsScript, poruszamy również tematy zawiązane z Obiektowym Modelem Dokumentu. Dzięki wyraźnemu rozdzieleniu tych dwóch zagadnień, będziesz mógł w przyszłości wykorzystać język JavaScript także do innych zastosowań, nawet poza przeglądarką internetową!",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_22d488e0-ca9e-4fc0-ad1a-e1c6ed6663ae.png",
		"author": "Piotr Palarz",
		"duration": "11 godzin",
		"price": 89.00,
		"categories": ["JavaScript"]
	},
	{
		"id": 5,
		"title": "Kurs Webdevelopment The Best Of - Wybrane Warsztaty",
		"description": "Na przestrzeni aż 12 godzin kursu poznasz najciekawsze i najnowsze techniki związane z kodowaniem nowoczesnych stron WWW, odkrywając szereg przydatnych skrótów i trików, które wykorzystasz w codziennej pracy. Poznasz między innymi GRUNTJS, GIT, BOOTSTRAP, NODE.JS, EMMET i wiele innych! Dowiesz się wszystkiego o optymalizacji stron WWW dla urządzeń mobilnych, wykorzystasz skrypty pozwalające na automatyzację powtarzalnych zadań, stworzysz od zera aplikacje WWW z Bootstrap, poznasz świetny system kontroli wersji, jakim jest Git czy dowiesz się jak optymalnie ładować skrypty CSS i JS. Prezentowany materiał nie powtarza się w żadnym z kursów!",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_e58d27a2-23d7-40f3-89b3-91d8437f5f73.png",
		"author": "Piotr Palarz",
		"duration": "12 godzin",
		"price": 99.00,
		"categories": ["Webdevelopment", "HTML5", "CSS", "GIT", "JavaScript", "Grunt.js"]
	},
	{
		"id": 6,
		"title": "AngularJS w Aplikacjach WWW - od Podstaw",
		"description": "Witaj w kursie Nowoczesne Aplikacje WWW z AngularJS! Kurs, który masz przed soba zostal stworzony dla wszystkich, którzy znaja juz podstawy technologii webowych i chca zaczac tworzyc funkcjonalne aplikacje z wykorzystaniem najbardziej popularnego obecnie frameworka, którego specjalisci sa jednoczesnie obecnie jednymi z najbardziej poszukiwanych przez pracodawców.  W kursie, na przestrzeni ponad 7 godzin przedstawiamy Angular od strony teoretycznej, jak równiez w obszernej czesci praktycznej piszemy swój wlasny system CRM dzialajacy po stronie przegladarki",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_6b888ae8-a69d-45c2-949f-c9aec2c74917.png",
		"author": "Maciek Zukiewicz",
		"duration": "7 godzin 10 minut",
		"price": 129.00,
		"categories": ["JavaScript", "Angular.js"]
	},
	{
		"id": 7,
		"title": "Nowoczesne Aplikacje Webowe - w Backbone.js",
		"description": "Poznaj framework JavaScript MV* Backbone.js od A do Z i przygotuj razem z autorem praktyczną, nowoczesną aplikację webową napędzaną danymi. Kurs, który dla Ciebie przygotowaliśmy, pozwoli Ci wkroczyć w fascynujący świat tworzenia aplikacji webowych działających po stronie klienta! To podstawy które stanowią wprowadzenie do wszystkich tego typu materiałów na eduweb.pl i poza Backbone zawiera on cały proces przygotowania, wdrożenia aplikacji, refaktoryzacji kodu i wiele więcej! Będziemy pracować między innymi z technologiami Node.js, REST, Express.js czy MongoDB!",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_ad008004-a199-4d48-adc3-6a9b87fb2c70.png",
		"author": "Piotr Palarz",
		"duration": "11 godzin",
		"price": 159.00,
		"categories": ["JavaScript", "Backbone.js"]
	},
	{
		"id": 8,
		"title": "Kurs ASP.NET MVC - w Praktyce",
		"description": "Witaj w Kursie, w którym na przestrzeni niemal 13 godzin lekcji wideo, ewangelista Microsoft Bartłomiej Zass pokaże Ci, jak przygotować kompletną witrynę w oparciu o ASP.NET MVC. Zacznij od pustego projektu w Visual Studio i przygotuj swój własny sklep internetowy z wykorzystaniem najciekawszych nowinek w ASP.NET MVC",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_24fc5549-a48a-45b8-8303-023963d25932.png",
		"author": "Bartłomiej Zass",
		"duration": "12 godziny 30 minut",
		"price": 100.00,
		"categories": ["ASP.NET", "MVC"]
	},
	{
		"id": 2,
		"title": "Kurs Programowanie w Java - od Podstaw",
		"description": "Kurs, który masz przed sobą, będzie doskonałym wprowadzeniem w świat programowania. Autor opowie Ci o wszystkich najważniejszych konstrukcjach języka, takich jak zmienne, typy danych, instrukcje warunkowe, pętle, tablice, obiekty czy metody. Poznasz dobre praktyki kodowania w języku Java, dowiesz się jakich narzędzi najlepiej używać przy procesie pisania aplikacji, oraz krok po kroku i od podstaw na praktycznych przykładach nauczysz się tworzyć pierwsze, funkcjonalne programy. Dzięki temu wiedza zdobyta w kursie nie będzie tylko suchą teorią, ale pozwoli Ci szybko przystąpić do realizacji własnych projektów z wykorzystaniem języka Java!",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_c024962e-3fb9-477f-b4b9-67ca8f368921.png",
		"author": "Sylwester Madej",
		"duration": "6 godzin 30 minut",
		"price": 69.00,
		"categories": ["Java"]
	},
	{
		"id": 9,
		"title": "Kurs WooCommerce - Sklep w WordPress",
		"description": "WooCommerce to najpopularniejszy, darmowy dodatek do systemu CMS WordPress, który umożliwia tworzenie złożonych sklepów internetowych, w środowisku, które wielu z nas zna już bardzo dobrze.  Kurs który masz przed sobą, został przygotowany w taki sposób, abyś poznał WooCommerce od A do Z. Dzięki WooCommerce oraz wiedzy którą zebraliśmy dla Ciebie wraz z Piotrem Palarzem, bez trudu i w przyjaznym środowisku WordPressa stworzysz swój własny, całkowicie funkcjonalny sklep internetowy.",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_d3aace12-0c77-48f2-a89a-5b6943b86902.png",
		"author": "Piotr Palarz",
		"duration": "6 godzin",
		"price": 89.00,
		"categories": ["PHP5", "WordPress", "E-Commerce", "WooCommerce"]
	},
	{
		"id": 10,
		"title": "Kurs Symfony Framework - Techniki Zaawansowane",
		"description": "Kurs Symfony2 Techniki Zaawansowane, stanowi kontynuację i rozwinięcie kursu podstawowego, wprowadzając widza w tajniki praktycznego programowania aplikacji WWW w oparciu o framework Symfony2. Omawiane zagadnienia dotyczyć będą niezwykle szerokiego wachlarza pojęć oraz czynności- od wdrożenia szablonu HTML przez system szablonów TWIG, po wykorzystanie pakietu AsseticBundle i przyspieszenia działania aplikacji. Od konfiguracji modułu bezpieczeństwa po przygotowanie w pełni kompletnego pakietu do logowania, rejestracji i  zarządzania użytkownikami. Od programowania funkcjonalności Bloga po w pełni funkcjonalny Panel Administracyjny. Ten kurs odkryje przed Tobą wszystko to co powinieneś wiedzieć, aby móc samodzielnie tworzyć profesjonalne aplikacje WWW z wykorzystaniem frameworka Symfony2. ",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_19faa6ee-81c8-4b5b-a71f-40e32527d367.png",
		"author": "Maciek Zukiewicz",
		"duration": "9 godzin",
		"price": 129.00,
		"categories": ["PHP5", "Symfony Framework"]
	},
	{
		"id": 11,
		"title": "Kurs C Sharp - Podstawy",
		"description": "Serdecznie zapraszamy Cię na siedmioipółgodzinny kurs poświęcony popularnemu obiektowemu językowi programowania. C# stanowi rewelacyjne rozwiązanie dla każdego twórcy aplikacji desktopowych, mobilnych, bogatych aplikacji internetowych w technologiach Microsoft. Przygotowany przez nas materiał stanowi kompletny zbiór fachowej wiedzy oraz praktycznych porad, dzięki którym będziesz mógł rozpocząć samodzielną pracę. ",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_b7bf3fa8-182f-4d5b-81c8-ff9c956e3291.png",
		"author": "Mateusz Manaj",
		"duration": "7 godzin 30 minut",
		"price": 69.00,
		"categories": ["C#"]
	},
	{
		"id": 12,
		"title": "Kurs ASP.NET MVC - Aplikacje Internetowe",
		"description": "Chcesz rozpocząć pracę z ASP.NET MVC i zrozumieć zasady rządzące najpopularniejszą technologią do tworzenia aplikacji internetowych na platformie Microsoft .NET? Trafiłeś pod dobry adres! Wspólnie z ewangelistą Microsoft, Bartłomiejem Zassem, przygotowaliśmy dla Ciebie obszerny, 12-godzinny kurs w którym opowiemy o wszystkim, co chcesz lub powinieneś wiedzieć na jej temat. ",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_33fd7f37-cc01-4781-8a19-1ab03d4eb019.png",
		"author": "Bartłomiej Zass",
		"duration": "12 godzin",
		"price": 99.00,
		"categories": ["ASP.NET", "MVC"]
	},
	{
		"id": 13,
		"title": "Kurs HTML5 i JavaScript - Techniki Zaawansowane",
		"description": "Nowe specyfikacje HTML5 przy użyciu JavaScript dają niesamowite możliwości twórcom stron WWW. Mechanizmy Geolokacji, Aplikacji Offline, Wideo czy Canvas to standard, który już teraz możemy wykorzystać. Poznaj go na praktycznych przykładach z naszym obszernym kursem. Materiał, który masz przed sobą to kompendium nowoczesnych technik pracy ze stronami WWW, które powinien znać każdy webdeveloper.",
		"image": "http://eduweb.pl/Images/Training/big_20080c6e-2a56-4481-b4c7-f64dad2c64e7.png",
		"author": "Piotr Palarz",
		"duration": "9 godzin 30 minut",
		"price": 100.00,
		"categories": ["HTML", "JavaScript"]
	},
	{
		"id": 14,
		"title": "Kurs Symfony Framework - Techniki Pracy",
		"description": "Poznaj jeden z najlepszych frameworków PHP, który pomoże Ci wejść na kolejny poziom programowania dynamicznych stron z PHP. Skorzystaj z gotowych komponentów oraz metodologii, która nie tylko przyspieszy Twoją pracę, ale także sprawi, że Twoje projekty będą jeszcze bardziej skalowalne!",
		"image": "http://eduweb.pl/Images/Training/big_feedd327-5535-461b-a7c7-57edfbec3ee0.png",
		"author": "Maciek Zukiewicz",
		"duration": "11 godzin",
		"price": 129.00,
		"categories": ["PHP5", "Symfony Framework"]
	},
	{
		"id": 15,
		"title": "Kurs Zend Framework - Podstawy",
		"description": "Wykorzystaj potencjał jednego z najlepszych i najbardziej popularnych frameworków PHP i przyspiesz proces budowania nawet bardzo zaawansowanych stron WWW. W kursie doświadczony praktyk wprowadzi Cię w tajniki Zenda, począwszy od konfiguracji środowiska po gotowe moduły.",
		"image": "http://eduweb.pl/Images/Training/big_3940d93f-1935-4e65-9d8c-b52699c3975a.png",
		"author": "Mateusz Manaj",
		"duration": "6 godzin 45 minut",
		"price": 79.00,
		"categories": ["PHP5", "Zend Framework"]
	},
	{
		"id": 16,
		"title": "Kurs Responsive Web Design - Skuteczne Techniki",
		"description": "Projektowanie na wiele ekranów i rozdzielczości to jedno z największych wyzwań współczesnych front-end developerów. Materiał, który masz przed sobą stanowi szereg niezwykle praktycznych lekcji, dzięki którym będziesz mógł jeszcze skuteczniej kodować responsywne serwisy.",
		"image": "http://eduweb.pl/Images/Training/big_889711b3-57e5-48a0-8466-c8aced069827.png",
		"author": "Grzegorz Róg",
		"duration": "9 godzin 45 minut",
		"price": 89.00,
		"categories": ["Responsive Design", "HTML", "CSS"]
	},
	{
		"id": 17,
		"title": "Kurs Preprocesory CSS - SASS, LESS i Compass",
		"description": "Projektuj strony WWW jeszcze szybciej i wydajniej dzięki preprocesorom CSS. Te niezwykle przydatne narzędzia wspomagają proces kodowania witryn internetowych oraz rozszerzania ich o nowe funkcje. W ostatnim czasie Preprocesory CSS stały się obowiązkowym narzędziem każdego webdevelopera a ich nauka nie jest trudna i wymaga jedynie znajomości podstaw CSS!",
		"image": "http://eduweb.pl/Images/Training/big_e2f2c368-0546-4afb-8e0b-73d9099d186b.png",
		"author": "Piotr Palarz",
		"duration": "6 godzin 20 minut",
		"price": 69.00,
		"categories": ["HTML", "CSS", "SASS", "LESS"]
	},
	{
		"id": 18,
		"title": "Kurs Tworzenie Stron WWW cz. 1 - Wybrane Warsztaty",
		"description": "Przedstawiamy serię najlepszych Warsztatów wydanych w ramach ścieżki\\nWebdevelopment na Eduweb Live (materiał nie powtarza się z żadnym z kursów). Jeśli pracujesz z technologiami front-end\\ntakimi jak HTML, CSS czy jQuery, znajdziesz w nich niezwykle przydatną\\ndawkę wiedzy na temat projektowania nowoczesnych stron WWW.",
		"image": "http://eduweb.pl/Images/Training/big_bb2ca430-c29f-49f7-ad1b-eb115b5f7d3e.png",
		"author": "Maciek Zukiewicz",
		"duration": "13 godzin",
		"price": 79.00,
		"categories": ["HTML", "CSS"]
	},
	{
		"id": 19,
		"title": "Kurs Tworzenie Stron WWW cz. 2 - Wybrane Warsztaty",
		"description": "Przedstawiamy serię najlepszych Warsztatów wydanych w ramach ścieżki Webdevelopment na Eduweb Live (materiał nie powtarza się z żadnym z kursów) z zakresu PHP oraz technologii back-end. Jeśli programujesz dynamiczne strony WWW, znajdziesz w nich niezwykle przydatną dawkę wiedzy na temat nowoczesnych technik i narzędzi.",
		"image": "http://eduweb.pl/Images/Training/big_cb38b02a-11ad-4f5e-a8d7-e58d965dc242.png",
		"author": "Maciek Zukiewicz",
		"duration": "15 godzin",
		"price": 89.00,
		"categories": ["HTML", "CSS"]
	},
	{
		"id": 20,
		"title": "Kurs WordPress - Tworzenie Motywów - Techniki Pracy z CMS WordPress",
		"description": "WordPress to najbardziej popularny i elastyczny system CMS na którym działają tysiące witryn. Nasz kurs to jedyne tak obszerne i kompleksowe opracowanie tematu tworzenia własnych Motywów, zmiany wyglądu i funkcjonowania WordPress. Podczas kursu stworzymy zaawansowaną stronę WWW, wykorzystamy wbudowane funkcje oraz napiszemy setki linii kodu skryptów!",
		"image": "http://eduweb.pl/Images/Training/big_motywy_a5739f8a-8574-4231-a502-2bfb82fb8383.png",
		"author": "Grzegorz Róg",
		"duration": "12 godzin",
		"price": 99.00,
		"categories": ["WordPress"]
	},
	{
		"id": 21,
		"title": "Kurs WordPress - Własne Pluginy - Tworzenie Wtyczek dla WordPress",
		"description": "Twórz własne Pluginy do popularnego systemu CMS WordPress i rozszerzaj możliwości Twoich stron WWW! Kurs, który masz przed sobą to esencja praktycznej wiedzy z pisania Pluginów w PHP na przestrzeni obszernych 10 godzin kursu. To dawka wiedzy niezbędna dla każdej osoby, która zamierza na poważnie zająć się pracą z WordPress!",
		"image": "http://eduweb.pl/Images/Training/big_pluginy_af1c8a3a-cc25-4e19-95bf-f35e5bb7848a.png",
		"author": "Maciek Zukiewicz",
		"duration": "10 godzin",
		"price": 89.00,
		"categories": ["WordPress"]
	},
	{
		"id": 22,
		"title": "Kurs Photoshop do HTML i CSS - PSD do HTML",
		"description": "Zobacz kompletny kurs projektowania stron WWW od czystej kartki w Photoshopie, przez kodowanie w najnowszych standardach HTML5 oraz CSS3 aż do tworzenia animacji z pomocą jQuery! Zobacz, jak pracuje ekspert tak, jakbyś przyglądał mu się przez ramię słuchając precyzyjnych wskazówek. Kurs, który masz przed sobą to esencja praktycznej pracy!",
		"image": "http://eduweb.pl/Images/Training/big_74a0ed48-4a8d-4449-a9c8-d09dcd3981ec.png",
		"author": "Grzegorz Róg",
		"duration": "9 godzin 30 minut",
		"price": 79.00,
		"categories": ["Adobe", "Photoshop", "HTML", "CSS"]
	},
	{
		"id": 23,
		"title": "Kurs Strony WWW z WordPress - Podstawy",
		"description": "Poznaj niezwykle popularny i elastyczny system CMS WordPress, który pozwoli Ci w łatwy i szybki sposób tworzyć i zarządzać dynamicznymi stronami WWW! W naszym kursie od podstaw opanujesz obsługę WordPress, jak również zmodyfikujesz grafikę swojej strony i rozszerzysz jej funkcjonalności!",
		"image": "http://eduweb.pl/Images/Training/big_100d988f-fdc5-4e29-b2f3-46dae5c0e7bb.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin 30 minut",
		"price": 69.00,
		"categories": ["WordPress", "HTML", "CSS"]
	},
	{
		"id": 24,
		"title": "Kurs Strony WWW z CSS3 - Nowe Standardy",
		"description": "Nowe standardy oferują twórcom stron WWW niesamowite możliwości. Animacje, efekty, przejścia, elastyczne rozmieszczenie treści - to wszystko możesz osiągnąć z CSS3 już teraz! Dodatkowo, strony w CSS3 ładują się szybciej. Jeśli chcesz tworzyć nowoczesne serwisy internetowe - ten kurs jest właśnie dla Ciebie!",
		"image": "http://eduweb.pl/Images/Training/big_101ab164-286c-4620-adc7-96fd32da1a6b.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin 30 minut",
		"price": 79.00,
		"categories": ["HTML", "CSS"]
	},
	{
		"id": 25,
		"title": "Kurs Elastyczne Strony WWW - Projektowanie na wiele urządzeń i rozdzielczości",
		"description": "Responsive Design to technika, która polega na wykorzystaniu najnowszych standardów jak HTML5 i CSS3 do tworzenia stron WWW, które dobrze prezentują się na popularnych urządzeniach mobilnych jak tablety i telefony. Nie jest to już tylko nowinka, ale aktualny wymóg i nisza na rynku. Z naszym kursem dowiesz się wszystkiego o projektowaniu takich nowoczesnych witryn.",
		"image": "http://eduweb.pl/Images/Training/big_702c0d04-e0f7-49f2-acb1-a63fee503704.png",
		"author": "Grzegorz Róg",
		"duration": "8 godzin 45 minut",
		"price": 79.00,
		"categories": ["Responsive Design", "HTML", "CSS"]
	},
	{
		"id": 26,
		"title": "Kurs Joomla! Tworzenie Dodatków - Twórz Komponenty, Moduły, Pluginy",
		"description": "Rozszerzaj możliwości Twoich stron w Joomla o efektowne dodatki jak własne Komponenty, Moduły, Pluginy czy Paczki Językowe. Na przestrzeni kursu poznasz najlepsze techniki na praktycznych przykładach. Stworzymy także profesjonalne Zaplecze dla dodatków, które możesz publikować na swoich stronach lub na Joomla.org",
		"image": "http://eduweb.pl/Images/Training/big_5cb650d7-1844-4853-9705-82dbc688bc57.png",
		"author": "Maciek Zukiewicz",
		"duration": "6 godzin 50 minut",
		"price": 69.00,
		"categories": ["PHP5", "Joomla"]
	},
	{
		"id": 27,
		"title": "Kurs PHP - System CMS - Stwórz Własny System Zarządzania Treścią",
		"description": "Kurs, który masz przed sobą to praktyczny materiał, w którym krok po kroku zaprogramujesz swój własny system zarządzania treścią na stronie. Panel Administracyjny to niezbędny element każdej strony WWW takiej jak sklep czy blog. Zobacz najlepsze praktyki w zakresie programowania obiektowego, które pozwolą Ci stworzyć kompletny system CMS.",
		"image": "http://eduweb.pl/Images/Training/big_61b9186a-4856-4d43-8853-94503a244816.png",
		"author": "Mateusz Manaj",
		"duration": "12 godzin",
		"price": 119.00,
		"categories": ["PHP"]
	},
	{
		"id": 28,
		"title": "Kurs Adobe Edge Animate - Animacje z HTML5 i CSS3",
		"description": "Z pomocą Adobe Edge możesz stworzyć fantastyczne animacje, podobne do tych tworzonych we Flash'u, jednak z wykorzystaniem najnowszych technologii HTML5, CSS3. W kursie dowiesz się wszystkiego o Edge i jego funkcjach, umieścisz animacje na swoich stronach oraz dodasz je do gotowych serwisów. Edge jest na razie dostępne za darmo!",
		"image": "http://eduweb.pl/Images/Training/big_046b8a74-dd73-4b49-a52a-556fab2fa41b.png",
		"author": "Grzegorz Róg",
		"duration": "3 godziny 40 minut",
		"price": 49.00,
		"categories": ["Adobe", "Edge", "HTML", "CSS"]
	},
	{
		"id": 29,
		"title": "Kurs Joomla! - Podstawy",
		"description": "Joomla! to najbardziej popularny w Polsce system CMS, z którego pomocą w krótkim czasie stworzysz funkcjonalne strony firmowe, portale czy blogi. Dzięki Joomla! zarządzanie witryną jest niezwykle prostę, a bogaty zbiór darmowych dodatków daje nieograniczone wręcz możliwości rozbudowy strony.",
		"image": "http://eduweb.pl/Images/Training/big_1ca2d1b9-475b-43bb-adf5-68cb205ff849.png",
		"author": "Grzegorz Róg",
		"duration": "5 godzin 50 minut",
		"price": 59.00,
		"categories": ["PHP5", "Joomla"]
	},
	{
		"id": 30,
		"title": "Kurs Joomla! - Techniki Pracy i Tworzenie Szablonów",
		"description": "Poznaj najlepsze techniki pracy z systemem CMS Joomla! Dowiedz się jak tworzyć od podstaw szablony Joomla zgodne z HTML5, korzystać z najlepszych dodatków oraz tworzyć własne moduły i komponenty. Ten kurs to pozycja niezbędna dla każdej osoby, która zajmuje się tworzeniem stron WWW z wykorzystaniem CMS Joomla!",
		"image": "http://eduweb.pl/Images/Training/big_bb8d24bd-d045-4b60-bfa0-f95303fe727f.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin 40 minut",
		"price": 79.00,
		"categories": ["PHP5", "Joomla"]
	},
	{
		"id": 31,
		"title": "Kurs HTML5 - W Praktyce",
		"description": "HTML5 to nowy standard w którym już niedługo będą tworzone wszystkie strony internetowe. W kursie prezentujemy praktyczne podejście do nowej specyfikacji HTML5, omawiając najważnejsze możliwości języka na przykładzie konkretnej witryny. Znajomość HTML5 jest obowiązkowa dla każdego twórcy stron WWW. Dzięki naszym materiałom, jego poznanie to czysta przyjemność.",
		"image": "http://eduweb.pl/Images/Training/big_757a9f24-27ea-4934-b99a-118e4f9b45c0.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin",
		"price": 59.00,
		"categories": ["PHP5"]
	},
	{
		"id": 32,
		"title": "Kurs PHP 5 - Techniki Pracy",
		"description": "Język PHP to najbardziej popularny język skryptowy w sieci, w którym oskryptowuje się sklepy internetowe czy fora dyskusyjne. Webdeveloperzy korzystający z PHP są jednymi z najbardziej poszukiwanych specjalistów na rynku. Jeśli chcesz do nich dołączyć - zapraszamy do zapoznania się z naszym najnowszym kursem.",
		"image": "http://eduweb.pl/Images/Training/big_314dd37e-4f92-4621-b4a5-9a4441b876a8.png",
		"author": "Mateusz Manaj",
		"duration": "10 godzin 40 minut",
		"price": 79.00,
		"categories": ["PHP5"]
	},
	{
		"id": 33,
		"title": "Kurs Dreamweaver - Techniki Zaawansowane",
		"description": "Zaawansowany kurs Dreamweaver pozwoli Ci jeszcze lepiej poznać możliwości najlepszego środowiska do tworzenia stron WWW. W kursie omawiamy pracę z Dreamweaverem pod kątem najnowszych standardów HTML5 i CSS3 a także trendów sieciowych, jak integracja z systemami CMS jak WordPress.",
		"image": "http://eduweb.pl/Images/Training/big_f967437e-bbab-4754-91d8-c1c4e5df5e3a.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin",
		"price": 79.00,
		"categories": ["Adobe", "HTML", "CSS", "Programowanie"]
	},
	{
		"id": 34,
		"title": "Kurs Adobe Dreamweaver - Techniki Pracy",
		"description": "Dreamweaver to narzędzie o ogromnych możliwościach. Ułatwia on tworzenie stron w HTML5, jak również dynamicznych witryn opartych na systemach Joomla! czy WordPress. Zawiera narzędzia, dzięki którym Twoja strona będzie zgodna z najnowszymi standardami W3C, oraz dodatki, jak skrypty JavaScript gotowe do umieszczenia na witrynie. Dreamweaver to wszechstronny program, który doceni każda osoba zajmująca się tworzeniem stron WWW.",
		"image": "http://eduweb.pl/Images/Training/big_9f562164-8068-45f0-80d0-fb872525a13c.png",
		"author": "Grzegorz Róg",
		"duration": "9 godzin 45 minut",
		"price": 79.00,
		"categories": ["Adobe", "HTML", "CSS", "Programowanie"]
	},
	{
		"id": 35,
		"title": "Kurs PHP 5 - Podstawy programowania",
		"description": "Dynamiczne strony WWW, systemy newsów, fora dyskusyjne czy panele administracyjne - to tylko niektóre przykłady zastosowań języska PHP, który w połączeniu z XHTML jest najpopularniejszą technologią w sieci. Pierwszy kurs z serii PHP wprowadzi Cię w podstawy tego języka kładąc fundament wiedzy niezbędny każdemu projektantowi stron WWW.",
		"image": "http://eduweb.pl/Images/Training/big_b8f5b44b-16f7-48aa-aa37-1c3d44e38acc.png",
		"author": "Mateusz Manaj",
		"duration": "7 godzin 40 minut",
		"price": 59.00,
		"categories": ["PHP5", "Programowanie"]
	},
	{
		"id": 36,
		"title": "Kurs Adobe Flash Builder - Podstawy",
		"description": "Strony WWW oraz aplikacje internetowe i desktopowe to tylko próbka możliwości Adobe Flash Builder. Dzięki temu fantastycznemu środowisku możesz tworzyć także programy na pulpit w Adobe AIR, gry na telefony komórkowe a nawet aplikacje na telewizory! Wiedzę na temat obsługi Flash Builder zdobędziesz w naszym kursie. Reszta to Twoja wyobraźnia!",
		"image": "http://eduweb.pl/Images/Training/big_b9be1c61-047b-437c-967c-603778fcac77.png",
		"author": "Grzegorz Róg",
		"duration": "6 godzin 40 minut",
		"price": 49.00,
		"categories": ["Adobe", "Flash"]
	},
	{
		"id": 37,
		"title": "Kurs Adobe Flash Builder - Techniki Pracy z Projektem Flash Catalyst",
		"description": "Współpraca Adobe Flash Builder oraz Flash Catalyst daje wręcz niesamowite możliwości. Teraz możesz jeszcze szybciej tworzyć wspaniałe interfejsy stron w Catalyst i uzupełniać je funkcjonalnością z pomocą Flash Buildera. Projektowanie Flash jeszcze nigdy nie było takie proste!",
		"image": "http://eduweb.pl/Images/Training/big_a3f68e2a-1bbb-4102-90f4-b9c6f2baf9ca.png",
		"author": "Grzegorz Róg",
		"duration": "6 godzin",
		"price": 59.00,
		"categories": ["Adobe", "Flash"]
	},
	{
		"id": 38,
		"title": "Kurs Nowoczesne Strony Flash - Projektowanie efektownych witryn we Flashu",
		"description": "Flash przez wiele lat przechodził ewolucję po to, by stać się najbardziej efektowną technologią w sieci, z którą pracują najlepsi w branży. Teraz możesz w rekordowym czasie tworzyć fantastyczne strony we Flashu, nawet jeśli dopiero zaczynasz przygodę z tą technologią!",
		"image": "http://eduweb.pl/Images/Training/big_6554fa67-96ba-431d-a0d7-e40b086b0b20.png",
		"author": "Grzegorz Róg",
		"duration": "8 godzin 25 minut",
		"price": 79.00,
		"categories": ["Adobe", "Flash"]
	},
	{
		"id": 39,
		"title": "Kurs Pozycjonowania Flash - Promocja Stron Flash w Wyszukiwarkach",
		"description": "Obecnie większość ruchu na naszych witrynach pochodzi z wyszukiwarek. W kursie obalamy mit, że Flash'a nie da się pozycjonować w wyszukiwarkach. Teraz poznasz skuteczne techniki, dzięki którym strony przygotowane we Flash'u mogą skutecznie konkurować w wynikach organicznych z witrynami w XHTML!",
		"image": "http://eduweb.pl/Images/Training/big_ce3630cf-707b-43a3-ac2a-cce7acb75603.png",
		"author": "Grzegorz Róg",
		"duration": "2 godziny 45 minut",
		"price": 39.00,
		"categories": ["Adobe", "Pozycjonowanie", "Flash"]
	},
	{
		"id": 40,
		"title": "Kurs Flash Catalyst - Techniki Pracy",
		"description": "Teraz możesz w rekordowym czasie przygotować rewelacyjną stronę w technologii Flash, bez użycia ani jednej linii kodu ActionScript. Catalyst to zarówno narzędzie dla profesjonalistów, które przyspieszy ich pracę przy prostych projektach, jak i dla początkujących, którzy teraz mogą tworzyć efektowne strony.",
		"image": "http://eduweb.pl/Images/Training/big_fdb1f900-2a96-4ef9-a652-07bbebfda742.png",
		"author": "Grzegorz Róg",
		"duration": "6 godzin 20 minut",
		"price": 59.00,
		"categories": ["Adobe", "Flash"]
	},
	{
		"id": 41,
		"title": "Kurs Pozycjonowania i Optymalizacji - Promocja w wyszukiwarkach",
		"description": "Co zrobić, by wśród setek innych witryn Twoja strona znalazła się jak najwyżej? Pozycjonowanie stron internetowych jest w zasięgu ręki. Wystarczy trochę czasu i systematyczność abyś mógł skutecznie promować w wyszukiwarkach swoją stronę lub witrynę Twojego klienta. SEO to obecnie jeden z najlepszych sposobów na niedrogie wygenerowanie ruchu oraz promocję marki.",
		"image": "http://eduweb.pl/Images/Training/big_986bcea7-2e70-46df-98d8-59afde61bad4.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin 20 minut",
		"price": 59.00,
		"categories": ["Pozycjonowanie"]
	},
	{
		"id": 42,
		"title": "Kurs HTML i CSS - W Praktyce",
		"description": "Kurs, który masz przed sobą stanowi praktyczną esencję doświadczenia w profesjonalnym projektowaniu stron WWW. Jeśli chcesz nauczyć się projektować witryny internetowe, które są zgodne z najnowszymi standardami XHTML i CSS, a jednocześnie poprawnie wyświetlają się pod różnymi przeglądarkami - ten kurs jest dla Ciebie pozycją obowiązkową.",
		"image": "http://eduweb.pl/Images/Training/big_9105134d-46cb-4e9f-8706-1b31cdfa46e2.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin 45 minut",
		"price": 59.00,
		"categories": ["HTML", "CSS"]
	},
	{
		"id": 43,
		"title": "Kurs HTML i CSS - Podstawy",
		"description": "Jeśli chodzi o strony Internetowe - wszystko opiera się na HTML i CSS. W praktyce niedoskonałości współczesnych przeglądarek sprawiają, że tworzenie profesjonalnych stron WWW wymaga doskonałego zrozumienia mechanizmów HTML i CSS. Poznaj tajniki pracy z tymi językami na ciekawych przykładach.",
		"image": "http://eduweb.pl/Images/Training/big_3e082952-4db5-4426-bfb8-d4d0b13ab89d.png",
		"author": "Grzegorz Róg",
		"duration": "6 godzin 45 minut",
		"price": 49.00,
		"categories": ["HTML", "CSS"]
	},
	{
		"id": 44,
		"title": "Kurs ActionScript 3.0 - Programowanie we Flash'u ",
		"description": "Każdy, kto miał przyjemność pracować we Flashu wie, że bez znajomości języka skryptowego ActionScript nie da się obejść w żadnym projekcie. AS3 to nie tylko podstawowe, niezbędne polecenia, ale w pełni funkcjonalny język programowania, dzięki któremu możemy stworzyć dynamiczne aplikacje, strony internetowe oraz prezentacje.",
		"image": "http://eduweb.pl/Images/Training/big_f7038d24-1c28-4284-8a1d-38b4eb6d190a.png",
		"author": "Autor:",
		"duration": "5 godzin 30 minut",
		"price": 49.00,
		"categories": ["Adobe", "Flash", "ActionScript"]
	},
	{
		"id": 45,
		"title": "Kurs Flash - Tworzenie Stron WWW - Adobe Flash z elementami Photoshop",
		"description": "Kurs to niespełna 10 godzin materiałów video, w których omawiam cały proces tworzenia tej strony od początku do końca, od \\czystej kartki\\ w Photoshopie, przez Flasha, aż do osadzenia kompletnej witryny w HTML'u i umieszczenia na serwerze. Przy okazji otrzymasz szereg wskazówek, płynących z kilkuletniego doświadczenia trenera.",
		"image": "http://eduweb.pl/Images/Training/big_0efd6e16-9551-4373-bfc9-cd5222a484e5.png",
		"author": "Grzegorz Róg",
		"duration": "10 godzin",
		"price": 39.00,
		"categories": ["Adobe", "Flash"]
	},
	{
		"id": 46,
		"title": "Kurs Adobe Flash - Techniki Pracy",
		"description": "Projektanci Flash to jedni z najlepiej opłacanych i najbardziej poszukiwanych specjalistów w branży reklamowej. Praca we Flashu to niesamowicie ciekawe i satysfakcjonujące zajęcie. W kursie poznasz wszystkie najważniejsze techniki pracy z Flashem, nauczysz się tworzyć animacje, rysować oraz pracować ze stronami WWW.",
		"image": "http://eduweb.pl/Images/Training/big_93a75935-82c0-4e4e-9280-22241b788a6e.png",
		"author": "Grzegorz Róg",
		"duration": "9 godzin",
		"price": 69.00,
		"categories": ["Adobe", "Flash"]
	},
	{
		"id": 47,
		"title": "Kurs Adobe Muse - Tworzenie Stron WWW",
		"description": "Twórz świetne witryny w środowisku graficznym - bez kodowania! Odkryj potencjał edytora, który umożliwia intuicyjne tworzenie stron WWW i przygotuj w rekordowym czasie estetyczną, prostą witrynę czy landing page. Teraz możesz także tworzyć strony responsywne, które świetnie wyglądają na każdym urządzeniu i rozdzielczości. Jeśli chcesz stworzyć swoją pierwszą witrynę lub masz doświadczenie w tworzeniu stron, ale chcesz znacznie przyspieszyć proces pracy z prostymi witrynami - Muse to najlepsze rozwiązanie!",
		"image": "http://eduweb.pl/Images/Training/miniaturka-do-opisu-kursu_370fc688-f91a-4bd6-a4ae-02e06a0e76af.png",
		"author": "Grzegorz Róg",
		"duration": "7 godzin 30 minut",
		"price": 79.00,
		"categories": ["Adobe", "Muse", "Webdesign"]
	}
]

export default courses_data