<?php

namespace Alura\Doctrine\Helper;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\Setup;

class EntityManagerFactory
{
  public function getEntityManager(): EntityManagerInterface
  {
    $rootDir = __DIR__ . '/../..';
    echo($rootDir);
    $config = Setup::createAnnotationMetadataConfiguration(
      [$rootDir . '/src'], true);
    // $connection = [
    //   'driver' => 'pdo_sqlite',
    //   'path' => $rootDir . '/var/data/banco.sqlite'
    // ];
    $connection = [
      'driver' => 'pdo_mysql',
      'host' => '192.168.0.7',
      'dbname' => 'teste',
      'user' => 'root',
      'password' => 'gerade',
      'port' => '3307'
    ];
    return EntityManager::create($connection, $config);
  }
}