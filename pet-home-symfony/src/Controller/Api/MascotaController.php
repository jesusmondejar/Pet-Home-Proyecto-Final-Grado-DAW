<?php
// src/Controller/Api/MascotaController.php

namespace App\Controller\Api;

use App\Repository\MascotaRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Annotation\Groups;

class MascotaController extends AbstractController
{
    #[Route('/api/mascotas', name: 'api_mascotas', methods: ['GET'])]
    public function index(MascotaRepository $repo, SerializerInterface $serializer): JsonResponse
    {
        $mascotas = $repo->findAll();

        $json = $serializer->serialize($mascotas, 'json', ['groups' => 'mascota']);

        return new JsonResponse($json, 200, [], true);
    }


}
