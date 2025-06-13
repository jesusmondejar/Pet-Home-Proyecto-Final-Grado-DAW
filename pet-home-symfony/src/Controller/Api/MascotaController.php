<?php
// src/Controller/Api/MascotaController.php

namespace App\Controller\Api;

use App\Entity\ImagenMascota;
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
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\String\Slugger\SluggerInterface;

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
    public function crear(
        Request $request,
        EntityManagerInterface $em,
        SluggerInterface $slugger
    ): JsonResponse {
        // Datos en texto
        $mascota = new Mascota();
        $mascota->setNombre($request->request->get('nombre'));
        $mascota->setEspecie($request->request->get('especie'));
        $mascota->setRaza($request->request->get('raza'));
        $mascota->setEdad($request->request->get('edad'));
        $mascota->setTamanio($request->request->get('tamanio'));
        $mascota->setDescripcion($request->request->get('descripcion'));
        $mascota->setEstado($request->request->get('estado', 'Disponible'));
        $mascota->setLocalidad($request->request->get('localidad'));
        $mascota->setGenero($request->request->get('genero'));
        $mascota->setCaracteristicas($request->request->get('caracteristicas'));
        $mascota->setSalud($request->request->get('salud'));
        $mascota->setCreatedDate(new \DateTimeImmutable());

        // Relación con protectora
        if ($request->request->get('protectora_id')) {
            $protectora = $em->getRepository(Protectora::class)->find($request->request->get('protectora_id'));
            if (!$protectora) {
                return new JsonResponse(['error' => 'Protectora no encontrada'], 404);
            }
            $mascota->setProtectora($protectora);
        }


        // Guardamos mascota primero (porque imagen necesita mascota_id)
        $em->persist($mascota);
        $em->flush();

        /** @var UploadedFile[] $imagenes */
        $imagenes = $request->files->all()['imagenes'] ?? [];



        foreach ($imagenes as $imagenFile) {
            if ($imagenFile) {
                $originalFilename = pathinfo($imagenFile->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $imagenFile->guessExtension();

                $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
                if (!in_array($imagenFile->getMimeType(), $allowedMimeTypes)) {
                    return new JsonResponse(['error' => 'Formato de imagen no permitido'], 400);
                }

                try {
                    $imagenFile->move(
                        $this->getParameter('kernel.project_dir') . '/public/uploads/mascotas',
                        $newFilename
                    );

                    $imagen = new ImagenMascota();
                    $imagen->setUrlImagen('/uploads/mascotas/' . $newFilename);
                    $imagen->setMascota($mascota);

                    $em->persist($imagen);
                } catch (FileException $e) {
                    return new JsonResponse(['error' => 'Error al subir una imagen'], 500);
                }
            }
        }

        $em->flush();

        return new JsonResponse(['message' => 'Mascota registrada con éxito'], 201);
    }




    //Este método elimina una mascota de la base de datos. Recibe el ID de la mascota como parámetro en la URL
    //y utiliza el repositorio de Mascota para buscar la mascota con ese ID. Luego, elimina la mascota de la base de datos


    #[Route('/api/deletemascotas/{id}', name: 'borrar_mascota', methods: ['DELETE'])]
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


#[Route('/api/editmascotas/{id}', name: 'editar_mascota', methods: ['POST'])]
public function editar(
    int $id,
    Request $request,
    EntityManagerInterface $em,
    MascotaRepository $repo,
    SluggerInterface $slugger
): JsonResponse {
    $mascota = $repo->find($id);
    if (!$mascota) {
        return new JsonResponse(['error' => 'Mascota no encontrada'], 404);
    }

    // Actualizar campos básicos
    $mascota->setNombre($request->request->get('nombre', $mascota->getNombre()));
    $mascota->setEspecie($request->request->get('especie', $mascota->getEspecie()));
    $mascota->setRaza($request->request->get('raza', $mascota->getRaza()));
    $mascota->setEdad($request->request->get('edad', $mascota->getEdad()));
    $mascota->setTamanio($request->request->get('tamanio', $mascota->getTamanio()));
    $mascota->setDescripcion($request->request->get('descripcion', $mascota->getDescripcion()));
    $mascota->setEstado($request->request->get('estado', $mascota->getEstado()));
    $mascota->setLocalidad($request->request->get('localidad', $mascota->getLocalidad()));
    $mascota->setGenero($request->request->get('genero', $mascota->getGenero()));
    $mascota->setCaracteristicas($request->request->get('caracteristicas', $mascota->getCaracteristicas()));
    $mascota->setSalud($request->request->get('salud', $mascota->getSalud()));
    $mascota->setCreatedDate(new \DateTimeImmutable());

    if ($request->request->get('protectora_id')) {
        $protectora = $em->getRepository(Protectora::class)->find($request->request->get('protectora_id'));
        if ($protectora) {
            $mascota->setProtectora($protectora);
        }
    }

    // Procesar imágenes nuevas (si se han subido)
    $imagenes = $request->files->all()['imagenes'] ?? [];

    foreach ($imagenes as $imagenFile) {
        if ($imagenFile) {
            $originalFilename = pathinfo($imagenFile->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = $safeFilename . '-' . uniqid() . '.' . $imagenFile->guessExtension();

            $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
            if (!in_array($imagenFile->getMimeType(), $allowedMimeTypes)) {
                return new JsonResponse(['error' => 'Formato de imagen no permitido'], 400);
            }

            try {
                $imagenFile->move(
                    $this->getParameter('kernel.project_dir') . '/public/uploads/mascotas',
                    $newFilename
                );

                $imagen = new ImagenMascota();
                $imagen->setUrlImagen('/uploads/mascotas/' . $newFilename);
                $imagen->setMascota($mascota);

                $em->persist($imagen);
            } catch (FileException $e) {
                return new JsonResponse(['error' => 'Error al subir una imagen'], 500);
            }
        }
    }

    $em->flush();

    return new JsonResponse(['message' => 'Mascota actualizada correctamente'], 200);
}
}
