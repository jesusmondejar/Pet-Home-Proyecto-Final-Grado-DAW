<?php

namespace App\Entity;

use App\Repository\ProtectoraRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProtectoraRepository::class)]
class Protectora implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['mascota', 'protectora'])]
    private ?int $id = null;

    #[Groups(['mascota', 'protectora'])]
    #[ORM\Column(length: 150)]
    private string $nombre;

    #[Groups(['mascota', 'protectora'])]
    #[ORM\Column(length: 100, unique: true)]
    private string $email;

    #[ORM\Column(length: 255)]
    private string $password;

   #[Groups(['mascota', 'protectora'])]
    #[ORM\Column(length: 15, nullable: true)]
    private ?string $telefono = null;

   #[Groups(['mascota', 'protectora'])]
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $direccion = null;

    #[Groups(['mascota', 'protectora'])]
    #[ORM\Column(length: 255)]
    private string $localidad;

   #[Groups(['mascota', 'protectora'])]
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $descripcion = null;

  #[Groups(['mascota', 'protectora'])]
    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $fechaRegistro;

    #[Groups(['mascota', 'protectora'])]
    public function getId(): ?int
    {
        return $this->id;
    }

   #[Groups(['mascota', 'protectora'])]
    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;
        return $this;
    }

   #[Groups(['mascota', 'protectora'])]
    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;
        return $this;
    }

    #[Groups(['mascota', 'protectora'])]
    public function getTelefono(): ?string
    {
        return $this->telefono;
    }

    public function setTelefono(?string $telefono): self
    {
        $this->telefono = $telefono;
        return $this;
    }

   #[Groups(['mascota', 'protectora'])]
    public function getDireccion(): ?string
    {
        return $this->direccion;
    }

    public function setDireccion(?string $direccion): self
    {
        $this->direccion = $direccion;
        return $this;
    }

    #[Groups(['mascota', 'protectora'])]
    public function getLocalidad(): string
    {
        return $this->localidad;
    }

    public function setLocalidad(string $localidad): self
    {
        $this->localidad = $localidad;
        return $this;
    }

   #[Groups(['mascota', 'protectora'])]
    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): self
    {
        $this->descripcion = $descripcion;
        return $this;
    }

    public function getFechaRegistro(): \DateTimeImmutable
    {
        return $this->fechaRegistro;
    }

    public function setFechaRegistro(\DateTimeImmutable $fechaRegistro): self
    {
        $this->fechaRegistro = $fechaRegistro;
        return $this;
    }
    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        // Todas las protectoras tendrán el rol ROLE_PROTECTORA
        return ['ROLE_PROTECTORA'];
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // Si almacenas datos temporales sensibles, límpialos aquí
        // $this->plainPassword = null;
    }
}

