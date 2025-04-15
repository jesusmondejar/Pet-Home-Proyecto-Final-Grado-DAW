<?php
// src/Repository/ProtectoraRepository.php

namespace App\Repository;

use App\Entity\Protectora;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<Protectora>
 *
 * @method Protectora|null find($id, $lockMode = null, $lockVersion = null)
 * @method Protectora|null findOneBy(array $criteria, array $orderBy = null)
 * @method Protectora[]    findAll()
 * @method Protectora[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProtectoraRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Protectora::class);
    }

    /**
     * Busca una protectora por email
     */
    public function findOneByEmail(string $email): ?Protectora
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.email = :email')
            ->setParameter('email', $email)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Busca protectoras por nombre (búsqueda parcial)
     */
    public function findByNombre(string $nombre): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.nombre LIKE :nombre')
            ->setParameter('nombre', '%'.$nombre.'%')
            ->orderBy('p.nombre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Actualiza la contraseña de una protectora (implementación de PasswordUpgraderInterface)
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof Protectora) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setContrasena($newHashedPassword);
        $this->getEntityManager()->flush();
    }

    /**
     * Guarda una protectora en la base de datos
     */
    public function save(Protectora $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Elimina una protectora de la base de datos
     */
    public function remove(Protectora $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Obtiene las mascotas de una protectora específica
     */
    public function findMascotasByProtectora(int $protectoraId): array
    {
        return $this->createQueryBuilder('p')
            ->select('m')
            ->join('p.mascotas', 'm')
            ->where('p.id = :protectoraId')
            ->setParameter('protectoraId', $protectoraId)
            ->orderBy('m.nombre', 'ASC')
            ->getQuery()
            ->getResult();
    }
}