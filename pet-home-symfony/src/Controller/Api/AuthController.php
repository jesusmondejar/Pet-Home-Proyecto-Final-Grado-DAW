<?php
namespace App\Controller\Api;

use App\Entity\Usuario;
use App\Entity\Protectora;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AuthController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $passwordHasher,
        // UsuarioRepository $usuarioRepo,
        // ProtectoraRepository $protectoraRepo
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $tipo = $data['tipoUsuario'] ?? 'cliente';

        $email = $data['email'];

        // $existeUsuario = $usuarioRepo->findOneBy(['email' => $email]);
        // $existeProtectora = $protectoraRepo->findOneBy(['email' => $email]);

        // if ($existeUsuario || $existeProtectora) {
        //     return new JsonResponse(['error' => 'El correo electrónico ya está registrado'], 409);
        // }


        if ($tipo === 'cliente') {
            $usuario = new Usuario();
            $usuario->setEmail($data['email']);
            $usuario->setNombre($data['nombre']);
            $usuario->setTelefono($data['telefono']);
            $usuario->setFechaRegistro(new \DateTimeImmutable());

            $usuario->setPassword(
                $passwordHasher->hashPassword($usuario, $data['contrasena'])
            );
            $em->persist($usuario);
        } elseif ($tipo === 'protectora') {
            $protectora = new Protectora();
            $protectora->setEmail($data['email']);
            $protectora->setNombre($data['nombre']);
            $protectora->setTelefono($data['telefono']);
            $protectora->setDireccion($data['direccion']);
            $protectora->setLocalidad($data['provincia']);
            $protectora->setDescripcion($data['descripcion']);
            $protectora->setFechaRegistro(new \DateTimeImmutable());

            $protectora->setPassword(
                $passwordHasher->hashPassword($protectora, $data['contrasena'])
            );
            $em->persist($protectora);
        } else {
            return new JsonResponse(['error' => 'Tipo de usuario no válido'], 400);
        }

        $em->flush();

        return new JsonResponse(['message' => 'Registro exitoso'], 201);
    }

    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher, SessionInterface $session): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        if (!$email || !$password) {
            return new JsonResponse(['error' => 'Email y contraseña son requeridos'], 400);
        }

        // Buscar usuario en ambas tablas
        $usuarioRepo = $em->getRepository(Usuario::class);
        $protectoraRepo = $em->getRepository(Protectora::class);

        $user = $usuarioRepo->findOneBy(['email' => $email]);
        $tipoUsuario = 'cliente';

        if (!$user) {
            $user = $protectoraRepo->findOneBy(['email' => $email]);
            $tipoUsuario = 'protectora';
        }

        if (!$user) {
            return new JsonResponse(['error' => 'Usuario no encontrado'], 404);
        }

        if (!$passwordHasher->isPasswordValid($user, $password)) {
            return new JsonResponse(['error' => 'Credenciales inválidas'], 401);
        }

        // Guardar info en sesión
        $session->set('user_id', $user->getId());
        $session->set('user_email', $user->getEmail());
        $session->set('user_tipo', $tipoUsuario);

          return new JsonResponse([
        'message' => 'Login exitoso',
        'tipo' => $tipoUsuario,
        'email' => $user->getEmail(),
        'nombre' => $user->getNombre(),
        'id' => $user->getId()
    ]);
    }

    #[Route('/api/logout', name: 'api_logout', methods: ['POST'])]
    public function logout(SessionInterface $session): JsonResponse
    {
        $session->clear();
        return new JsonResponse(['message' => 'Logout exitoso']);
    }
}
