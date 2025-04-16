<?php

namespace App\Entity;

use App\Repository\ProtectoraRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProtectoraRepository::class)]
class Protectora
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['protectora' , 'mascota'])]
    private ?int $id = null;

    #[ORM\Column(length: 150)]
    #[Groups(['protectora', 'mascota'])]
    private string $nombre;

    #[ORM\Column(length: 100, unique: true)]
    #[Groups(['protectora', 'mascota'])]
    private string $email;

    #[ORM\Column(length: 255)]
    #[Groups(['protectora', 'mascota'])]
    private string $contrasena;

    #[ORM\Column(length: 15, nullable: true)]
    #[Groups(['protectora'])]
    private ?string $telefono = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['protectora', 'mascota'])]
    private ?string $direccion = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['protectora', 'mascota'])]
    private ?string $descripcion = null;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['protectora', 'mascota'])]
    private \DateTimeImmutable $fechaRegistro;

    #[ORM\OneToMany(mappedBy: 'protectora', targetEntity: Mascota::class)]
    #[Groups(['protectora'])]
    private $mascotas;

    public function getId(): ?int
{
    return $this->id;
}

public function getNombre(): string
{
    return $this->nombre;
}

public function setNombre(string $nombre): self
{
    $this->nombre = $nombre;
    return $this;
}

public function getEmail(): string
{
    return $this->email;
}

public function setEmail(string $email): self
{
    $this->email = $email;
    return $this;
}

public function getContrasena(): string
{
    return $this->contrasena;
}

public function setContrasena(string $contrasena): self
{
    $this->contrasena = $contrasena;
    return $this;
}

public function getTelefono(): ?string
{
    return $this->telefono;
}

public function setTelefono(?string $telefono): self
{
    $this->telefono = $telefono;
    return $this;
}

public function getDireccion(): ?string
{
    return $this->direccion;
}

public function setDireccion(?string $direccion): self
{
    $this->direccion = $direccion;
    return $this;
}

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

public function getMascotas(): iterable
{
    return $this->mascotas;
}

public function addMascota(Mascota $mascota): self
{
    $this->mascotas[] = $mascota;
    return $this;
}

public function removeMascota(Mascota $mascota): self
{
    $this->mascotas->removeElement($mascota);
    return $this;
}

}