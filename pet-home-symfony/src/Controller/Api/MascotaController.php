<?php
// src/Controller/Api/MascotaController.php

namespace App\Controller\Api;

use App\Repository\MascotaRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Mascota;
use App\Entity\Protectora;


class MascotaController extends AbstractController
{
    //Este método hace una consulta a la base de datos para obtener todas las mascotas y las devuelve en formato JSON.
    //El método utiliza el repositorio de Mascota para obtener los datos y el serializador para convertirlos a JSON.      
    #[Route('/api/mascotas', name: 'api_mascotas', methods: ['GET'])]
    public function index(MascotaRepository $repo, SerializerInterface $serializer): JsonResponse
    {
        $mascotas = $repo->findAll();

        $json = $serializer->serialize($mascotas, 'json', ['groups' => 'mascota']);

        return new JsonResponse($json, 200, [], true);
    }

    //Este método busca mascotas por especie. Recibe la especie como parámetro en la URL
    //y utiliza el repositorio de Mascota para buscar las mascotas que coinciden con esa especie.
    //Luego, convierte los resultados a JSON y los devuelve en la respuesta.

        #[Route('/api/mascotas/especie/{especie}', name: 'mascotas_por_especie', methods: ['GET'])]
    public function mascotasPorEspecie(string $especie, MascotaRepository $repo, SerializerInterface $serializer): JsonResponse
    {
        $mascotas = $repo->findByEspecie($especie);
        $json = $serializer->serialize($mascotas, 'json', ['groups' => 'mascota']);

        return new JsonResponse($json, 200, [], true);
    }

    //Este método busca mascotas por protectora. Recibe el ID de la protectora como parámetro en la URL
    //y utiliza el repositorio de Mascota para buscar las mascotas que pertenecen a esa protectora.

        #[Route('/api/mascotas/protectora/{id}', name: 'mascotas_por_protectora', methods: ['GET'])]
    public function mascotasPorProtectora(
        int $id,
        MascotaRepository $repo,
        SerializerInterface $serializer
    ): JsonResponse {
        $mascotas = $repo->findBy(['protectora' => $id]);

        $json = $serializer->serialize($mascotas, 'json', ['groups' => 'mascota']);

        return new JsonResponse($json, 200, [], true);
    }


    //lo he intentado porbar con CURL pero no me funciona, no se porque

        #[Route('/api/registermascotas', name: 'crear_mascota', methods: ['POST'])]
    public function crear(Request $request, EntityManagerInterface $em, SerializerInterface $serializer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $mascota = new Mascota();
        $mascota->setNombre($data['nombre']);
        $mascota->setEspecie($data['especie']);
        $mascota->setRaza($data['raza'] ?? null);
        $mascota->setEdad($data['edad'] ?? null);
        $mascota->setTamanio($data['tamanio'] ?? null);
        $mascota->setDescripcion($data['descripcion'] ?? null);
        $mascota->setEstado($data['estado'] ?? 'Disponible');
        $mascota->setLocalidad($data['localidad'] ?? null);
        $mascota->setGenero($data['genero'] ?? null);
        $mascota->setSalud($data['salud'] ?? null);
         $mascota->setCreatedDate(new \DateTimeImmutable());

        if (isset($data['protectora_id'])) {
            $protectora = $em->getRepository(Protectora::class)->find($data['protectora_id']);
            $mascota->setProtectora($protectora);
        }

        $em->persist($mascota);
        $em->flush();

        return new JsonResponse( ['message' => 'Registro exitoso'], 201, []);
    }



    //Este método elimina una mascota de la base de datos. Recibe el ID de la mascota como parámetro en la URL
    //y utiliza el repositorio de Mascota para buscar la mascota con ese ID. Luego, elimina la mascota de la base de datos


    #[Route('/api/mascotas/{id}', name: 'borrar_mascota', methods: ['DELETE'])]
public function borrar(int $id, MascotaRepository $repo, EntityManagerInterface $em): JsonResponse
{
    $mascota = $repo->find($id);
    if (!$mascota) {
        return new JsonResponse(['error' => 'Mascota no encontrada'], 404);
    }

    $em->remove($mascota);
    $em->flush();

    return new JsonResponse(['message' => 'Mascota eliminada'], 200);
}



    #[Route('/api/mascotas/{id}', name: 'editar_mascota', methods: ['PUT'])]
    public function editar(
        int $id,
        Request $request,
        EntityManagerInterface $em,
        MascotaRepository $repo,
        SerializerInterface $serializer
    ): JsonResponse {
        $mascota = $repo->find($id);
        
        if (!$mascota) {
            return new JsonResponse(['error' => 'Mascota no encontrada'], 404);
        }

        $data = json_decode($request->getContent(), true);

        $mascota->setNombre($data['nombre'] ?? $mascota->getNombre());
        $mascota->setEspecie($data['especie'] ?? $mascota->getEspecie());
        $mascota->setRaza($data['raza'] ?? $mascota->getRaza());
        $mascota->setEdad($data['edad'] ?? $mascota->getEdad());
        $mascota->setTamanio($data['tamanio'] ?? $mascota->getTamanio());
        $mascota->setDescripcion($data['descripcion'] ?? $mascota->getDescripcion());
        $mascota->setEstado($data['estado'] ?? $mascota->getEstado());

        if (isset($data['protectora_id'])) {
            $protectora = $em->getRepository(Protectora::class)->find($data['protectora_id']);
            if ($protectora) {
                $mascota->setProtectora($protectora);
            }
        }

        $em->flush();

        $json = $serializer->serialize($mascota, 'json', ['groups' => 'mascota']);
        return new JsonResponse($json, 200, [], true);
    }





}
