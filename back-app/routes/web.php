<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*$router->group(['prefix' => 'auth'], function () use ($router) {
    $router->post('register', 'AuthController@register');
    $router->post('login', 'AuthController@login');
    $router->get('me', ['middleware' => 'auth', 'uses' => 'AuthController@me']);
});*/

$router->group(['prefix' => 'auth'], function () use ($router) {
    
    // Rutas públicas
    $router->post('login', 'AuthController@login'); // Inicio de sesión y obtención del token

    // Rutas protegidas por autenticación
    $router->group(['middleware' => 'auth'], function () use ($router) {
        
        // Ruta para obtener la información del usuario autenticado
        $router->get('me', 'AuthController@me');

        $router->get('users/{id}', 'AuthController@show');
        $router->post('register', 'AuthController@register');
        // Rutas para CRUD de usuarios
        $router->get('users', 'AuthController@index'); // Listar todos los usuarios
        $router->post('users', 'AuthController@register'); // Crear un nuevo usuario
        $router->put('users/{id}', 'AuthController@update'); // Actualizar un usuario
        $router->delete('users/{id}', 'AuthController@destroy'); // Eliminar un usuario
    });
});