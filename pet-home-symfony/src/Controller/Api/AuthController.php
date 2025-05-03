<?php

namespace App\Controller\Api;

use App\Entity\Usuario;
use App\Repository\UsuarioRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthController extends AbstractController
{
    private $usuarioRepository;
    private $passwordHasher;

    public function __construct(UsuarioRepository $usuarioRepository, UserPasswordHasherInterface $passwordHasher)
    {
        $this->usuarioRepository = $usuarioRepository;
        $this->passwordHasher = $passwordHasher;
    }

    #[Route('/api/register', name: 'register', methods: ['POST'])]
    public function register(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Creamos la entidad Usuario y asignamos los datos
        $usuario = new Usuario();
        $usuario->setNombre($data['nombre']);
        $usuario->setEmail($data['email']);
        $usuario->setTelefono($data['telefono']);
        $usuario->setDireccion($data['direccion']);
        $usuario->setFechaRegistro(new \DateTimeImmutable());

        // Ahora encriptamos la contraseña antes de guardarla
        $hashedPassword = $this->passwordHasher->hashPassword($usuario, $data['contrasena']);
        $usuario->setPassword($hashedPassword);

        $rol = 'ROLE_CLIENTE';
        if (!empty($data['tipoUsuario']) && $data['tipoUsuario'] === 'protectora') {
            $rol = 'ROLE_PROTECTORA';
        }
        $usuario->setRoles([$rol]);

        $this->usuarioRepository->save($usuario, true); // Guardar al final


        return new JsonResponse(['message' => 'Usuario registrado correctamente'], JsonResponse::HTTP_CREATED);
    }

    #[Route('/api/login', name: 'login', methods: ['POST'])]
    public function login(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Verificamos que se ha recibido el email y la contraseña
        if (empty($data['email']) || empty($data['contrasena'])) {
            return new JsonResponse(['message' => 'Email o contraseña vacíos'], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Buscamos al usuario por email
        $usuario = $this->usuarioRepository->findOneBy(['email' => $data['email']]);
        // Verificamos la contraseña
        $isPasswordValid = $this->passwordHasher->isPasswordValid($usuario, $data['contrasena']);



        if (!$usuario) {
            return new JsonResponse(['message' => 'Usuario no encontrado'], JsonResponse::HTTP_NOT_FOUND);
        }

        // Verificamos la contraseña
        $isPasswordValid = $this->passwordHasher->isPasswordValid($usuario, $data['contrasena']);

        if (!$isPasswordValid) {
            return new JsonResponse(['message' => 'Contraseña incorrecta'], JsonResponse::HTTP_UNAUTHORIZED);
        }

        // Aquí puedes generar un token JWT si lo necesitas (omitiendo en este ejemplo)
        return new JsonResponse(['message' => 'Login exitoso', 'usuario' => $usuario->getNombre()], JsonResponse::HTTP_OK);
    }
}
