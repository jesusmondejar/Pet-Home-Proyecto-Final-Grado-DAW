<?php
// src/Controller/Api/UsuarioController.php

namespace App\Controller\Api;

use App\Repository\UsuarioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class UsuarioController extends AbstractController
{
    #[Route('/api/usuarios', name: 'api_usuarios', methods: ['GET'])]
    public function index(UsuarioRepository $repo, SerializerInterface $serializer): JsonResponse
    {
        $usuarios = $repo->findAll();

        $json = $serializer->serialize($usuarios, 'json', ['groups' => 'usuario']);

        return new JsonResponse($json, 200, [], true);
    }
}
