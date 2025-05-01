<?php
// src/Repository/MascotaRepository.php

namespace App\Repository;

use App\Entity\Mascota;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Mascota>
 *
 * @method Mascota|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mascota|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mascota[]    findAll()
 * @method Mascota[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MascotaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mascota::class);
    }

    /**
     * Busca mascotas por especie
     */
    public function findByEspecie(string $especie): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('LOWER(m.especie) = LOWER(:especie)')
            ->setParameter('especie', $especie)
            ->orderBy('m.nombre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Busca mascotas disponibles
     */
    public function findDisponibles(): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.estado = :estado')
            ->setParameter('estado', 'Disponible')
            ->orderBy('m.nombre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Busca mascotas por protectora
     */
    public function findByProtectora(int $protectoraId): array
    {
        return $this->createQueryBuilder('m')
            ->join('m.protectora', 'p')
            ->andWhere('p.id = :protectoraId')
            ->setParameter('protectoraId', $protectoraId)
            ->orderBy('m.nombre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Guarda una mascota en la base de datos
     */
    public function save(Mascota $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Elimina una mascota de la base de datos
     */
    public function remove(Mascota $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}