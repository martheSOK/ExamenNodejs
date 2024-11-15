const HTTP_STATUS_OK = 200; // Requête réussie
const HTTP_STATUS_CREATED = 201; // Ressource créée avec succès
const HTTP_STATUS_ACCEPTED = 202; // Requête acceptée, mais non encore traitée
const HTTP_STATUS_NO_CONTENT = 204; // Requête réussie, mais pas de contenu à renvoyer

const HTTP_STATUS_BAD_REQUEST = 400; // Mauvaise requête (erreur de syntaxe ou paramètre invalide)
const HTTP_STATUS_UNAUTHORIZED = 401; // Authentification requise
const HTTP_STATUS_FORBIDDEN = 403; // Accès interdit (même authentification échouée)
const HTTP_STATUS_NOT_FOUND = 404; // Ressource non trouvée

const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500; // Erreur interne du serveur
const HTTP_STATUS_NOT_IMPLEMENTED = 501; // Fonctionnalité non implémentée
const HTTP_STATUS_BAD_GATEWAY = 502; // Mauvaise passerelle (problème avec un serveur en amont)
const HTTP_STATUS_SERVICE_UNAVAILABLE = 503; // Service temporairement indisponible

export {
    HTTP_STATUS_OK,
    HTTP_STATUS_CREATED,
    HTTP_STATUS_ACCEPTED,
    HTTP_STATUS_NO_CONTENT,
    HTTP_STATUS_BAD_REQUEST,
    HTTP_STATUS_UNAUTHORIZED,
    HTTP_STATUS_FORBIDDEN,
    HTTP_STATUS_NOT_FOUND,
    HTTP_STATUS_INTERNAL_SERVER_ERROR,
    HTTP_STATUS_NOT_IMPLEMENTED,
    HTTP_STATUS_BAD_GATEWAY,
    HTTP_STATUS_SERVICE_UNAVAILABLE,
}