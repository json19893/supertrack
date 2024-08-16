<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\JWTGuard;

class AuthServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        Auth::extend('jwt', function ($app, $name, array $config) {
            return new JWTGuard(
                $app->make('tymon.jwt'),
                Auth::createUserProvider($config['provider']),
                $app->make('request')
            );
        });
    }
}
