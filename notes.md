Page Sign in :
Lors du clic sur bouton formulaire signin > faire l'appel api avec le chemin :http://localhost:3001/user/login
si vérification données api OK > stocker l'état de connexion dans le store (token) + récupérer les données utilisateurs + renvoi vers la page profile
Info : le serveur affilie le token à l'utilisateur logué grace à son user id
si vérification données api KO > affichage message d'erreur avec setimout pour effacer le message

Remember Me :
si case est cochée (valeur par défaut), email stocké dans redux et devient valeur par défaut du champs email du form login
si case est décochée, state retourne à valeur initiale ("")

Page User / Profile:
L’affichage de la page est conditionné à la présence du token/état de connexion
Les données utilisateurs sont affichées grace au store Redux
Lors de l'édition du username : lors du clic sur save > stocker le nouvel username renseigné sur le store redux et faire put api :
si api OK > fermer le formulaire d'édition, update user data du store redux avec le nouvel username stocké sur store et afficher le nouvel username sur profil depuis user data du store redux
si api KO > affichage message d'erreur avec setimout pour effacer le message

Déconnexion User:
Lors du clic sur bouton sign out > réinitialisation du store redux complète + renvoi vers la page home
faire une fonction sign out dans onclick ?

PB : reload page = reset store redux
