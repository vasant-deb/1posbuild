<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);
$app->add(new \Tuupola\Middleware\JwtAuthentication([
    "path" => "/api", /* or ["/api", "/admin"] */    
    "attribute" => "decoded_token_data",
    "secret" => "123456789helo_secret",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments) {
        $data["status"] = "error";
        $data["message"] = $arguments["message"];
        return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST')
            ->withHeader("Content-Type", "application/json")
            ->withStatus(404)
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
]));

