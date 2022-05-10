import { QuestionSet } from '../../interfaces/question-set';

export const enQuiz1: QuestionSet[] = [
  {
    question: 'Comment la science des données est-elle définie par le Centre de Compétences en Sciences des Données de l’Université de Genève ?',
    responses: {
      1: 'La méthodologie définissant un cadre à la récolte de données scientifiques',
      2: 'La science de l’apprentissage à partir des données',
      3: 'L’ensemble des techniques visant à permettre aux machines d’imiter une forme d’intelligence réelle'
    },
    correct: [2],
    reason: '“La science des données fournit ainsi tout un processus scientifique d’apprentissage à partir des données aux sciences humaines et sociales, aux sciences économiques, à la médecine, aux sciences de l’environnement, ainsi qu’à une multitude d’autres disciplines, et fournit un support d’aide à la décision, en contribuant à comprendre et à agir sur des problèmes complexes du monde réel.” Cette définition est tirée du site internet du CCSD.',
  },
  {
    question: 'Qu’est-ce qu’une collecte de données participative ?',
    responses: {
      1: 'Il s’agit d’une collecte de données récoltées aléatoirement, par exemple par le biais d’enquêtes en micro-trottoir',
      2: 'Il s’agit d’une collecte de données où des acteurs spécifiques sont appelés à évaluer les résultats d’enquêtes statistiques effectués préalablement.',
      3: 'Il s’agit d’une collecte de données qui consiste à impliquer les parties prenantes et les impliquer dans l’étude statistique qui les concerne.',
    },
    correct: [3],
    reason: 'Selon l’UNICEF, l’utilisation d’approches participatives, dans le cadre de l’évaluation d’impacts, consiste à impliquer les parties prenantes, particulièrement les participants d’un programme ou les individues et individus concernés par une politique, dans certains aspects du processus d’évaluation. Le terme « approches participatives » recouvre plusieurs types de participation qui diffèrent de par leur nature, leur objet, leur méthode et l’identité des individues et individus dont la participation est souhaitée.'
  },
  {
    question: 'En moyenne, quel pourcentage de données, générées par les utilisateurs et utilisatrices sur internet, sont stockées et analysées par des entreprises privées ?',
    responses: {
      1: '40%',
      2: '65%',
      3: '80%',
      4: '90%',
    },
    correct: [3],
    reason: 'Les entreprises, allant du secteur de l’horlogerie ou de la finance, en passant par la santé ou l’agroalimentaire, exploitent les données de leurs utilisateurs et utilisatrices, afin de connaître leurs préférences de consommation, leurs dépenses, leurs déplacements, leurs goûts culturels et bien d’autres facteurs encore.'
  },
  {
    question: 'D’après vous, sachant que les femmes représentent 49,6% de la population mondiale, quel pourcentage représente-t-elle dans les études, avec financement public, publiées dans les journaux de médecine interne à fort impact ?',
    responses: {
      1: '38%',
      2: '49,6%',
      3: '50%',
      4: '57%',
    },
    correct: [1],
    reason: 'Des données mal équilibrées peuvent mener à des résultats biaisés dans les études statistiques. Dans ce cas-ci, la parité homme-femme n’est pas respectée. Comme de nombreuses molécules ont des effets différents le métabolisme des femmes par rapport au métabolisme des hommes, les femmes sont sous-représentées dans les études cliniques. Cette réalité entraîne une prise en charge sous-optimale des patientes.'
  },
  {
    question: 'Selon une étude, combien de temps en moyenne vous faudrait-il pour lire les conditions générales d’usage de tous les sites internet que vous visitez en l’espace d’une année (365 jours) ?',
    responses: {
      1: '26 jours',
      2: '33 jours',
      3: '49 jours',
      4: '79 jours',
    },
    correct: [4],
    reason: 'Celles-ci souvent longues, confuses, voire incompréhensibles, afin d’amener un maximum de personnes à les accepter sans les lire, car on ne peut pas les refuser si on veut accéder au service en question. Les utilisateurs et utilisatrices vont donc manquer d’informations, ce qui peut parfois créer des désaccords.'
  },
  {
    question: 'Quelle dimension ne fait pas directement partie de la science des données ?',
    responses: {
      1: 'L’intelligence artificielle',
      2: 'Big DATA',
      3: 'Les lois sur la protection des données',
      4: 'Le machine learning',
    },
    correct: [3],
    reason: 'Les lois sur la protection des données servent de cadre légal pour l’utilisation de données, mais elles ne sont pas directement liées aux applications de la science des données, contrairement aux trois autres propositions, qui sont, elles, des outils directs liés à la science des données.'
  },
  {
    question: 'La science des données permet d’analyser et de prédire les comportements des consommateurs et consommatrices, jour après jour (météo, évènements nationaux, ...). De nombreuses industries utilisent ces informations pour augmenter la productivité. Pour les employées et employés dans le domaine du service, cela se traduit par des horaires irréguliers et imprévisibles. Quels sont les conséquences pour les travailleurs et travailleuses concernés ?',
    responses: {
      1: 'Problèmes de santé accrus',
      2: 'Problèmes liés aux performances psychologiques',
      3: 'Troubles du sommeil',
    },
    correct: [1, 2, 3],
    reason: 'Par exemple, aux Etats-Unis, la société Starbucks a été accusée, en 2014, de pratiquer le “clopening”, qui consiste à surexploiter ses employées et employés en les faisant travailler jusqu’à tard le soir, et les faire rouvrir l’établissement quelques heures plus tard, tôt le matin.'
  },
  {
    question: 'Selon les pronostics, combien d’appareils connectés (Internet of Things) seront utilisés en 2025, sachant qu’en 2019, il y en avait 25 milliards ?',
    responses: {
      1: '34 milliards',
      2: '66 milliards',
      3: '75 milliards',
      4: '120 milliards',
    },
    correct: [3],
    reason: 'L’Internet of Things est l’une des technologies les plus importantes du 21ème siècle. Désormais, nous pouvons connecter beaucoup de nos objets du quotidien (appareils électroménagers, voitures, thermostats, interphones bébés) à internet. Ces objets collectent et partagent des données, afin d’enregistrer, surveiller et ajuster chaque interaction entre les objets connectés. Le monde physique rencontre le monde digital, et ils coopèrent. '
  },
  {
    question: 'Parmi ces objets, lesquels sont susceptibles de récolter des données sur leur utilisation? (plusieurs réponses possibles)',
    responses: {
      1: 'Une voiture',
      2: 'L’ordinateur de la bibliothèque de l’UNIGE',
      3: 'Votre téléphone portable',
      4: 'Un lampadaire sur la voie publique',
      5: 'Une carte de fidélité de supermarché',
      6: 'Une tondeuse à gazon',
    },
    correct: [1, 2, 3, 4, 5, 6],
    reason: 'De nos jours, tous les appareils connectés récoltent des données, ce qui est le cas des voitures récentes, des ordinateurs et des smartphones. Les lampadaires publics peuvent aussi récolter des données, afin que les municipalités optimisent leur usage (par exemple sur leur fréquence d’allumage, pour optimiser leur intensité ou leur quantité). Les cartes de fidélité récoltent également des données, afin de connaître les préférences de consommation de leurs clientes et clients. Pour finir, il existe, de nos jours, des tondeuses à gazon connectées, qui récoltent également des données.'
  },
  {
    question: 'Selon une étude faite en Suisse en 2021, est-ce que les comités d’éthiques de la recherche sont suffisamment formés sur les questions de l’utilisation des Big Data ?',
    responses: {
      1: 'Oui',
      2: 'Non'
    },
    correct: [2],
    reason: 'L’étude révèle qu’il y a un manque sur la compréhension du big data au sein des comités d’éthiques de la recherche au niveau cantonal. Le manque d’une définition claire du big data peut entraîner, par la suite, des problèmes éthiques.'
  },
  {
    question: 'Il existe plusieurs types de données, selon leur portée, et définies par un cadre juridique différent. Parmi ces propositions, lesquelles de ses données sont les moins “sensibles” ?',
    responses: {
      1: 'Les données techniques',
      2: 'Les données personnelles',
      3: 'Les données originales',
    },
    correct: [1],
    reason: 'Les données personnelles concernent tout ce qui se rapporte à la vie privée de chaque utilisateur et chaque utilisatrice. Cela peut être, par exemple, l’adresse e-mail, le numéro de téléphone, les goûts musicaux ou l’historique de navigation. Celles-ci peuvent être plus ou moins sensibles et privées. Les données originales concernent la propriété intellectuelle et les droits d’auteur des contenus originaux crées sur internet, comme une vidéo sur YouTube ou un NFT. Finalement, les données techniques sont les moins sensibles, et concernent les informations sur l’utilisation d’appareils électroniques, comme par exemple, le nombre de personnes ayant visité un site internet précis, sans que l’on ait l’identité des personnes qui s’y sont rendues.'
  },
  {
    question: 'Les cookies présents sur de nombreux sites internet ont plusieurs usages. Laquelle de ces fonctions n’est pas assurée par les cookies ?',
    responses: {
      1: 'Ils servent à tracer la navigation de chaque internaute, afin de lui suggérer un contenu personnalisé',
      2: 'Ils servent à détecter les potentiels virus présents sur la page internet',
      3: 'Ils servent à mémoriser certaines informations sur le site internet, comme par exemple l’identifiant d’un compte, ou le panier d’achats',
    },
    correct: [2],
    reason: 'Explication : Les cookies servent à mémoriser certaines données qui concernent la navigation des internautes sur les différents sites internet. En revanche, ils n’effectuent pas le travail d’un antivirus. Pour s’assurer de la fiabilité d’un site internet, un bon moyen est de regarder si un petit symbole de cadenas est présent à côté de l’URL sur le haut de la page. Si ce n’est pas le cas, le site internet pourrait être une menace pour vos données privées.'
  },
  {
    question: 'La croissance exponentielle du stockage et de l’utilisation de données constitue une menace à long terme pour l’écologie. La technologie et l’utilisation des données ont-elles leur place dans le monde de demain ?',
    responses: {
      1: 'Non, car leur usage nécessite toujours plus d’appareils coûteux en énergie, ce qui est mauvais pour notre planète',
      2: 'Oui, car les sources d’énergies renouvelables se démocratisent de plus en plus, ce qui permet d’utiliser les appareils électroniques de manière durable',
      3: 'Ni oui ni non, tout dépend de la manière dont les humains vont se servir des données et de leurs applications',
    },
    correct: [3],
    reason: 'Il est vrai que la croissance exponentielle du nombre de données peut sembler peu favorable à une perspective écologique. Néanmoins, il est aussi vrai que la science des données a des applications qui favorisent la durabilité. Elle peut servir, par exemple, dans l’optimisation de la consommation d’énergie de grands bâtiments. Les données servent aussi à évaluer plus précisément les impacts écologiques en général, afin de mieux les optimiser.'
  },
  {
    question: 'Pour assurer la confidentialité des informations sensibles des individues et individus, les hôpitaux, les écoles ou les banques anonymisent les données qu’ils collectent avant de les étudier. Une fois les données anonymisées, il est impossible de réidentifier les données, et de faire le lien entre les informations sensibles et les individus.',
    responses: {
      1: 'Vrai',
      2: 'Faux'
    },
    correct: [2],
    reason: 'D’après différentes études scientifiques récentes, en utilisant de large ensemble de données, il est possible de réidentifier des données anonymisées, notamment les données de localisation spatiale.'
  },
];
