<?php
require_once __DIR__.'/../vendor/autoload.php';
(new Laravel\Lumen\Bootstrap\LoadEnvironmentVariables(
    dirname(__DIR__)
))->bootstrap();

date_default_timezone_set(env('APP_TIMEZONE', 'UTC'));
$app = new Laravel\Lumen\Application(
    dirname(__DIR__)
);
$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->configure('app');
$app->router->group([
    'namespace' => 'App\Http\Controllers',
], function ($router) {
    require __DIR__.'/../routes/web.php';
});

$app->withFacades();
$app->withEloquent();

// Cargar configuración JWT y Auth
$app->configure('jwt');
$app->configure('auth');

// Registrar el proveedor de JWTAuth
$app->register(Tymon\JWTAuth\Providers\LumenServiceProvider::class);

// Registrar el proveedor de Auth
$app->register(App\Providers\AuthServiceProvider::class);
// Agrega esto en bootstrap/app.php

$app->middleware([
    App\Http\Middleware\CorsMiddleware::class,
]);

$app->routeMiddleware([
    'auth' => App\Http\Middleware\Authenticate::class,
]);
return $app;
