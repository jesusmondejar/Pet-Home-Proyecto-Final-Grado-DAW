<?php

namespace App\Controller\Api;

use App\Entity\Usuario;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $passwordHasher
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $usuario = new Usuario();
        $usuario->setNombre($data['nombre']);
        $usuario->setEmail($data['email']);
        $usuario->setTelefono($data['telefono'] ?? null);
        $usuario->setDireccion($data['direccion'] ?? null);
        $usuario->setFechaRegistro(new \DateTimeImmutable());

        // Hasheamos la contraseña
        $hashedPassword = $passwordHasher->hashPassword($usuario, $data['contrasena']);
        $usuario->setPassword($hashedPassword);

        $em->persist($usuario);
        $em->flush();

        return new JsonResponse(['message' => 'Usuario registrado correctamente'], Response::HTTP_CREATED);
    }
}
