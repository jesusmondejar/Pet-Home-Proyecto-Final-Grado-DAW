<?php
// src/Controller/Api/ProtectoraController.php

namespace App\Controller\Api;

use App\Repository\ProtectoraRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProtectoraController extends AbstractController
{
    #[Route('/api/protectoras', name: 'api_protectoras', methods: ['GET'])]
    public function index(ProtectoraRepository $repo, SerializerInterface $serializer): JsonResponse
    {
        $protectoras = $repo->findAll();

        $json = $serializer->serialize($protectoras, 'json', ['groups' => 'protectora']);

        return new JsonResponse($json, 200, [], true);
    }
}
