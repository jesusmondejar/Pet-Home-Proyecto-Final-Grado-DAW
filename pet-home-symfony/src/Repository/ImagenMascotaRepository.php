<?php
// src/Repository/ImagenMascotaRepository.php

namespace App\Repository;

use App\Entity\ImagenMascota;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ImagenMascota>
 *
 * @method ImagenMascota|null find($id, $lockMode = null, $lockVersion = null)
 * @method ImagenMascota|null findOneBy(array $criteria, array $orderBy = null)
 * @method ImagenMascota[]    findAll()
 * @method ImagenMascota[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ImagenMascotaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ImagenMascota::class);
    }

    /**
     * Busca imágenes por mascota
     */
    public function findByMascota(int $mascotaId): array
    {
        return $this->createQueryBuilder('i')
            ->join('i.mascota', 'm')
            ->andWhere('m.id = :mascotaId')
            ->setParameter('mascotaId', $mascotaId)
            ->orderBy('i.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Guarda una imagen en la base de datos
     */
    public function save(ImagenMascota $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Elimina una imagen de la base de datos
     */
    public function remove(ImagenMascota $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Elimina todas las imágenes de una mascota
     */
    public function removeAllByMascota(int $mascotaId): void
    {
        $this->createQueryBuilder('i')
            ->delete()
            ->where('i.mascota = :mascotaId')
            ->setParameter('mascotaId', $mascotaId)
            ->getQuery()
            ->execute();
    }
}