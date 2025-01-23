Page Sign in :
Lors du clic sur bouton formulaire signin > faire l'appel api avec le chemin :http://localhost:3001/user/login
si vérification données api OK > stocker l'état de connexion dans le store (token) + récupérer les données utilisateurs + renvoi vers la page profile
Info : le serveur affilie le token à l'utilisateur logué grace à son user id
si vérification données api KO > affichage message d'erreur

Page User / Profile:
L’affichage de la page est conditionné à la présence du token/état de connexion
Les données utilisateurs sont affichées grace au store Redux
Lors de l'édition du username : lors du clic sur save > stocker l'username renseigné (update) sur le store redux et faire put api :
si api OK > fermer le formulaire d'édition et afficher le nouvel username sur profil depuis le store redux
si api KO > affichage message d'erreur et suppression du store du nouvel username (récupération de l'état antérieur)

Déconnexion User:
Lors du clic sur bouton sign out > réinitialisation du store redux complète + renvoi vers la page sign in
faire une fonction sign out dans onclick ?
