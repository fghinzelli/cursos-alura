<?php

function a()
{
  try {
    echo 'Codigo' . PHP_EOL;
    throw new Exception();
    return 0;
  } catch (Throwable $e) {
    echo "Problema" . PHP_EOL;
    return 1;
  } finally {
    echo "Final" . PHP_EOL;
  }

}

a();