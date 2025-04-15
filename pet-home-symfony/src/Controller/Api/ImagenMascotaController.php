<?php
// src/Controller/Api/ImagenMascotaController.php

namespace App\Controller\Api;

use App\Repository\ImagenMascotaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ImagenMascotaController extends AbstractController
{
    #[Route('/api/imagenes', name: 'api_imagenes', methods: ['GET'])]
    public function index(ImagenMascotaRepository $repo, SerializerInterface $serializer): JsonResponse
    {
        $imagenes = $repo->findAll();

        $json = $serializer->serialize($imagenes, 'json', ['groups' => 'imagen']);

        return new JsonResponse($json, 200, [], true);
    }
}
