<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
        ],

        
        // database connection details         
        "db" => [            
            "host" => "localhost",             
            "dbname" => "1pos",             
            "user" => "root",            
            "pass" => "",
            "port" =>  "3306",   
        ],
		"dbn" => [
			"host" => "amity.herosite.pro",
			"dbname" => "wugslfet_pos",
			"user" => "wugslfet_pos",
			"pass" => "4)mhk%%yHJ-2",
			"port" => "3306",
		],

        //SMTP Settings
        "mail" => [            
            "Host" => "smtp.gmail.com",                 // SMTP servers smtp.gmail.com relay-hosting.secureserver.net         
            "SMTPAuth" => 'true',                       // Enable SMTP authentication
            "Username" => "mytestingproject01@gmail.com",     // SMTP username         
            "Password" => 'mytestingproject01@10',            // SMTP password
            "SMTPSecure" => 'tls',                      // Enable TLS encryption, `ssl` also accepted
            "Port" => 587,                        // TCP port to connect to
            "setFromEmail" => 'mytestingproject01@gmail.com',
            "setFromName" => 'InstaStory'
        ],

        "jwt" => [
            'secret' => 'unknownchanges'
        ]

    ],
];
