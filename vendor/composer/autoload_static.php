<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitec0819b720087bc43818afccc789444e
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Mainfo\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Mainfo\\' => 
        array (
            0 => __DIR__ . '/..' . '/mainfo/php-classes/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
        'R' => 
        array (
            'Rain' => 
            array (
                0 => __DIR__ . '/..' . '/rain/raintpl/library',
            ),
        ),
    );

    public static $classMap = array (
        'EasyPeasyICS' => __DIR__ . '/..' . '/phpmailer/phpmailer/extras/EasyPeasyICS.php',
        'PHPMailer' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmailer.php',
        'PHPMailerOAuth' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmaileroauth.php',
        'PHPMailerOAuthGoogle' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmaileroauthgoogle.php',
        'POP3' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.pop3.php',
        'SMTP' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.smtp.php',
        'ntlm_sasl_client_class' => __DIR__ . '/..' . '/phpmailer/phpmailer/extras/ntlm_sasl_client.php',
        'phpmailerException' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmailer.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitec0819b720087bc43818afccc789444e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitec0819b720087bc43818afccc789444e::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitec0819b720087bc43818afccc789444e::$prefixesPsr0;
            $loader->classMap = ComposerStaticInitec0819b720087bc43818afccc789444e::$classMap;

        }, null, ClassLoader::class);
    }
}
