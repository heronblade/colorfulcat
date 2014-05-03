<?php
/**
 *  MODX Configuration file
 */
$database_type = 'mysql';
$database_server = 'localhost';
$database_user = 'modx';
$database_password = 'modx';
$database_connection_charset = 'utf8';
$dbase = 'modx';
$table_prefix = 'modx_';
$database_dsn = 'mysql:host=localhost;dbname=modx;charset=utf8';
$config_options = array (
);
$driver_options = array (
);

$lastInstallTime = 1398912462;

$site_id = 'modx5361b5ce390a69.89782969';
$site_sessionname = 'SN5361b45e61752';
$https_port = '443';
$uuid = '1b837509-638a-4207-8f0d-5d9231bf7c5a';

if (!defined('MODX_CORE_PATH')) {
    $modx_core_path= '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/core/';
    define('MODX_CORE_PATH', $modx_core_path);
}
if (!defined('MODX_PROCESSORS_PATH')) {
    $modx_processors_path= '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/core/model/modx/processors/';
    define('MODX_PROCESSORS_PATH', $modx_processors_path);
}
if (!defined('MODX_CONNECTORS_PATH')) {
    $modx_connectors_path= '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/connectors/';
    $modx_connectors_url= '/colorfulcat/cms/modx/modx-2.2.14-pl/connectors/';
    define('MODX_CONNECTORS_PATH', $modx_connectors_path);
    define('MODX_CONNECTORS_URL', $modx_connectors_url);
}
if (!defined('MODX_MANAGER_PATH')) {
    $modx_manager_path= '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/manager/';
    $modx_manager_url= '/colorfulcat/cms/modx/modx-2.2.14-pl/manager/';
    define('MODX_MANAGER_PATH', $modx_manager_path);
    define('MODX_MANAGER_URL', $modx_manager_url);
}
if (!defined('MODX_BASE_PATH')) {
    $modx_base_path= '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/';
    $modx_base_url= '/colorfulcat/cms/modx/modx-2.2.14-pl/';
    define('MODX_BASE_PATH', $modx_base_path);
    define('MODX_BASE_URL', $modx_base_url);
}
if(defined('PHP_SAPI') && (PHP_SAPI == "cli" || PHP_SAPI == "embed")) {
    $isSecureRequest = false;
} else {
    $isSecureRequest = ((isset ($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) == 'on') || $_SERVER['SERVER_PORT'] == $https_port);
}
if (!defined('MODX_URL_SCHEME')) {
    $url_scheme=  $isSecureRequest ? 'https://' : 'http://';
    define('MODX_URL_SCHEME', $url_scheme);
}
if (!defined('MODX_HTTP_HOST')) {
    if(defined('PHP_SAPI') && (PHP_SAPI == "cli" || PHP_SAPI == "embed")) {
        $http_host='localhost:8888';
        define('MODX_HTTP_HOST', $http_host);
    } else {
        $http_host= array_key_exists('HTTP_HOST', $_SERVER) ? $_SERVER['HTTP_HOST'] : 'localhost:8888';
        if ($_SERVER['SERVER_PORT'] != 80) {
            $http_host= str_replace(':' . $_SERVER['SERVER_PORT'], '', $http_host); // remove port from HTTP_HOST
        }
        $http_host .= ($_SERVER['SERVER_PORT'] == 80 || $isSecureRequest) ? '' : ':' . $_SERVER['SERVER_PORT'];
        define('MODX_HTTP_HOST', $http_host);
    }
}
if (!defined('MODX_SITE_URL')) {
    $site_url= $url_scheme . $http_host . MODX_BASE_URL;
    define('MODX_SITE_URL', $site_url);
}
if (!defined('MODX_ASSETS_PATH')) {
    $modx_assets_path= '/Users/bylerj/Dev/Sites/colorfulcat/cms/modx/modx-2.2.14-pl/assets/';
    $modx_assets_url= '/colorfulcat/cms/modx/modx-2.2.14-pl/assets/';
    define('MODX_ASSETS_PATH', $modx_assets_path);
    define('MODX_ASSETS_URL', $modx_assets_url);
}
if (!defined('MODX_LOG_LEVEL_FATAL')) {
    define('MODX_LOG_LEVEL_FATAL', 0);
    define('MODX_LOG_LEVEL_ERROR', 1);
    define('MODX_LOG_LEVEL_WARN', 2);
    define('MODX_LOG_LEVEL_INFO', 3);
    define('MODX_LOG_LEVEL_DEBUG', 4);
}
if (!defined('MODX_CACHE_DISABLED')) {
    $modx_cache_disabled= false;
    define('MODX_CACHE_DISABLED', $modx_cache_disabled);
}
